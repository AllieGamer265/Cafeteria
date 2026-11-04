export type Screen = 'title' | 'cafe' | 'recipe' | 'cooking' | 'night' | 'shop'

export type Station = 'mix' | 'oven' | 'brew' | 'plate'

export type Species =
  | 'cat'
  | 'dog'
  | 'bunny'
  | 'fox'
  | 'bear'
  | 'panda'
  | 'frog'
  | 'bird'
  | 'hamster'
  | 'capybara'

export type Mood = 'happy' | 'waiting' | 'sad'

export type RecipeCategory = 'bebidas' | 'panaderia' | 'postres'

export type ShopCategory = 'ingredientes' | 'equipo' | 'decoracion'

export interface CharacterColors {
  body: string
  accent: string
  blush: string
  outline: string
}

export interface Character {
  id: string
  name: string
  species: Species
  personality: string
  favoriteRecipe: string
  colors: CharacterColors
  greeting: string
  happy: string
  sad: string
}

export interface Recipe {
  id: string
  name: string
  category: RecipeCategory
  ingredients: string[]
  stations: Station[]
  difficulty: number
  unlockDay: number
  basePrice: number
  color: string
  icon: string
}

export interface Order {
  id: string
  characterId: string
  recipeId: string
  reward: number
  stars: number
}

export interface ShopItem {
  id: string
  name: string
  category: ShopCategory
  price: number
  description: string
  icon: string
  color: string
}

export interface Settings {
  music: boolean
  sfx: boolean
  reducedMotion: boolean
  largeText: boolean
}

export interface Reward {
  coins: number
  stars: number
  message: string
}

export interface GameState {
  screen: Screen
  day: number
  orderIndex: number
  coins: number
  stars: number
  orders: Order[]
  currentRecipeId: string | null
  served: number
  dayEarnings: number
  dayStars: number
  ownedItems: string[]
  unlockedRecipes: string[]
  settings: Settings
  toast: string | null
  quality: number
  lastReward: Reward | null
  settingsOpen: boolean
  showHelp: boolean
}

export interface SaveData {
  day: number
  orderIndex: number
  coins: number
  stars: number
  served: number
  dayEarnings: number
  dayStars: number
  ownedItems: string[]
  unlockedRecipes: string[]
  settings: Settings
  orders: Order[]
  currentRecipeId: string | null
}

export type GameAction =
  | { type: 'START_GAME' }
  | { type: 'CONTINUE_GAME'; payload: SaveData }
  | { type: 'GO_SCREEN'; screen: Screen }
  | { type: 'OPEN_RECIPE' }
  | { type: 'START_COOKING' }
  | { type: 'SERVE_ORDER'; quality: number }
  | { type: 'NEXT_ORDER' }
  | { type: 'CLOSE_DAY' }
  | { type: 'BUY_ITEM'; itemId: string }
  | { type: 'NEXT_DAY' }
  | { type: 'TOGGLE_SETTING'; key: keyof Settings }
  | { type: 'TOAST'; message: string }
  | { type: 'CLEAR_TOAST' }
  | { type: 'OPEN_SETTINGS' }
  | { type: 'CLOSE_SETTINGS' }
  | { type: 'SHOW_HELP'; show: boolean }
  | { type: 'RESET' }
