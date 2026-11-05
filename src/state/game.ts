import { characters } from '../data/characters'
import { getDefaultIngredientIds, ingredientById } from '../data/ingredients'
import { recipes } from '../data/recipes'
import { shopItems } from '../data/shop'
import type { GameAction, GameState, Order, SaveData, Settings } from '../types'

export const SAVE_KEY = 'cafe-nido-save-v1'

export const defaultSettings: Settings = {
  music: true,
  sfx: true,
  reducedMotion: false,
  largeText: false,
}

function normalizeOwnedIngredients(
  saved: string[] | undefined,
  ownedItems: string[],
): string[] {
  const fromSave = Array.isArray(saved) ? saved : []
  const fromItems = shopItems
    .filter((item) => item.ingredientId && ownedItems.includes(item.id))
    .map((item) => item.ingredientId as string)
  return Array.from(
    new Set([...getDefaultIngredientIds(), ...fromSave, ...fromItems]),
  ).filter((id) => Boolean(ingredientById(id)))
}

function normalizeOwnedItems(
  saved: string[] | undefined,
  ownedIngredientIds: string[],
): string[] {
  const items = Array.isArray(saved) ? saved : []
  const fromIngredients = shopItems
    .filter((item) => item.ingredientId && ownedIngredientIds.includes(item.ingredientId))
    .map((item) => item.id)
  return Array.from(new Set([...items, ...fromIngredients])).filter((id) =>
    shopItems.some((item) => item.id === id),
  )
}

export function getUnlockedRecipeIds(day: number): string[] {
  return recipes.filter((recipe) => recipe.unlockDay <= day).map((recipe) => recipe.id)
}

export function getOrdersForDay(day: number): Order[] {
  const dayStart = ((day - 1) * 5) % characters.length
  const unlocked = recipes.filter((recipe) => recipe.unlockDay <= day)
  const fallback = unlocked.length > 0 ? unlocked : [recipes[0]]
  return Array.from({ length: 5 }, (_, index) => {
    const character = characters[(dayStart + index) % characters.length]
    const favorite = recipes.find((recipe) => recipe.id === character.favoriteRecipe)
    const recipe = favorite && favorite.unlockDay <= day ? favorite : fallback[index % fallback.length]
    return {
      id: `d${day}-o${index}`,
      characterId: character.id,
      recipeId: recipe.id,
      reward: recipe.basePrice + index,
      stars: Math.min(3, 1 + Math.floor(recipe.difficulty / 2)),
    }
  })
}

export const initialState: GameState = {
  screen: 'title',
  day: 1,
  orderIndex: 0,
  coins: 30,
  stars: 0,
  orders: getOrdersForDay(1),
  currentRecipeId: null,
  served: 0,
  dayEarnings: 0,
  dayStars: 0,
  ownedItems: [],
  ownedIngredients: getDefaultIngredientIds(),
  unlockedRecipes: getUnlockedRecipeIds(1),
  settings: defaultSettings,
  toast: null,
  quality: 0,
  lastReward: null,
  settingsOpen: false,
  showHelp: false,
}

function freshGame(settings: Settings): GameState {
  return {
    ...initialState,
    settings,
    screen: 'cafe',
    orders: getOrdersForDay(1),
    unlockedRecipes: getUnlockedRecipeIds(1),
  }
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return { ...freshGame(state.settings), toast: '¡Bienvenida al nido!' }

    case 'CONTINUE_GAME': {
      const save = action.payload
      const ownedIngredients = normalizeOwnedIngredients(save.ownedIngredients, save.ownedItems)
      return {
        ...state,
        screen: 'cafe',
        day: save.day,
        orderIndex: save.orderIndex,
        coins: save.coins,
        stars: save.stars,
        served: save.served,
        dayEarnings: save.dayEarnings,
        dayStars: save.dayStars,
        ownedItems: normalizeOwnedItems(save.ownedItems, ownedIngredients),
        ownedIngredients,
        unlockedRecipes: save.unlockedRecipes,
        settings: { ...defaultSettings, ...save.settings },
        orders: save.orders,
        currentRecipeId: save.currentRecipeId,
        toast: 'Partida cargada.',
        lastReward: null,
        settingsOpen: false,
        showHelp: false,
      }
    }

    case 'GO_SCREEN':
      return { ...state, screen: action.screen }

    case 'OPEN_RECIPE': {
      const order = state.orders[state.orderIndex]
      return {
        ...state,
        screen: 'recipe',
        currentRecipeId: order?.recipeId ?? state.currentRecipeId,
      }
    }

    case 'START_COOKING':
      if (!state.currentRecipeId) {
        return { ...state, toast: 'Primero elige una receta.' }
      }
      return { ...state, screen: 'cooking', quality: 0 }

    case 'SERVE_ORDER': {
      const order = state.orders[state.orderIndex]
      if (!order) return state
      const character = characters.find((item) => item.id === order.characterId)
      const qualityStars = action.quality >= 80 ? 3 : action.quality >= 50 ? 2 : 1
      const coins = order.reward + qualityStars * 2
      return {
        ...state,
        screen: 'cafe',
        coins: state.coins + coins,
        stars: state.stars + qualityStars,
        served: state.served + 1,
        dayEarnings: state.dayEarnings + coins,
        dayStars: state.dayStars + qualityStars,
        currentRecipeId: null,
        quality: action.quality,
        lastReward: {
          coins,
          stars: qualityStars,
          message: character?.happy ?? '¡Quedó delicioso!',
        },
      }
    }

    case 'NEXT_ORDER': {
      if (state.orderIndex >= 4) {
        return { ...state, screen: 'night', lastReward: null }
      }
      return {
        ...state,
        orderIndex: state.orderIndex + 1,
        lastReward: null,
        screen: 'cafe',
      }
    }

    case 'CLOSE_DAY':
      return { ...state, screen: 'night', lastReward: null }

    case 'BUY_ITEM': {
      const item = shopItems.find((entry) => entry.id === action.itemId)
      if (!item) return state
      if (state.ownedItems.includes(item.id)) {
        return { ...state, toast: 'Ya tienes ese objeto.' }
      }
      if (state.coins < item.price) {
        return { ...state, toast: 'Faltan monedas para eso.' }
      }
      const ownedIngredients =
        item.ingredientId && !state.ownedIngredients.includes(item.ingredientId)
          ? [...state.ownedIngredients, item.ingredientId]
          : state.ownedIngredients
      return {
        ...state,
        coins: state.coins - item.price,
        ownedItems: [...state.ownedItems, item.id],
        ownedIngredients,
        toast: item.ingredientId
          ? `Compraste: ${item.name}. Ya está en tu estante.`
          : `Compraste: ${item.name}`,
      }
    }

    case 'NEXT_DAY': {
      const nextDay = state.day + 1
      return {
        ...state,
        screen: 'cafe',
        day: nextDay,
        orderIndex: 0,
        orders: getOrdersForDay(nextDay),
        served: 0,
        dayEarnings: 0,
        dayStars: 0,
        currentRecipeId: null,
        unlockedRecipes: getUnlockedRecipeIds(nextDay),
        lastReward: null,
        toast: `Día ${nextDay}. ¡Buen café, gran café!`,
      }
    }

    case 'TOGGLE_SETTING': {
      const settings = { ...state.settings, [action.key]: !state.settings[action.key] }
      return { ...state, settings }
    }

    case 'TOAST':
      return { ...state, toast: action.message }

    case 'CLEAR_TOAST':
      return { ...state, toast: null }

    case 'OPEN_SETTINGS':
      return { ...state, settingsOpen: true }

    case 'CLOSE_SETTINGS':
      return { ...state, settingsOpen: false }

    case 'SHOW_HELP':
      return { ...state, showHelp: action.show }

    case 'RESET':
      try {
        localStorage.removeItem(SAVE_KEY)
      } catch {
        // ignore storage errors
      }
      return { ...initialState, settings: state.settings, screen: 'title' }

    default:
      return state
  }
}

export function saveGame(state: GameState) {
  const data: SaveData = {
    day: state.day,
    orderIndex: state.orderIndex,
    coins: state.coins,
    stars: state.stars,
    served: state.served,
    dayEarnings: state.dayEarnings,
    dayStars: state.dayStars,
    ownedItems: state.ownedItems,
    ownedIngredients: state.ownedIngredients,
    unlockedRecipes: state.unlockedRecipes,
    settings: state.settings,
    orders: state.orders,
    currentRecipeId: state.currentRecipeId,
  }
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data))
  } catch {
    // ignore storage errors
  }
}

export function loadGame(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as SaveData
    if (!parsed || typeof parsed.day !== 'number' || !Array.isArray(parsed.orders)) {
      return null
    }
    const ownedItems = Array.isArray(parsed.ownedItems) ? parsed.ownedItems : []
    const ownedIngredients = normalizeOwnedIngredients(parsed.ownedIngredients, ownedItems)
    return {
      ...parsed,
      ownedItems: normalizeOwnedItems(ownedItems, ownedIngredients),
      ownedIngredients,
      settings: { ...defaultSettings, ...parsed.settings },
    }
  } catch {
    return null
  }
}

export function hasSavedGame(): boolean {
  try {
    return localStorage.getItem(SAVE_KEY) !== null
  } catch {
    return false
  }
}
