import { useEffect, useReducer, useState } from 'react'
import { ActionDock } from './components/ActionDock'
import { CafeScene } from './components/CafeScene'
import { ConfirmDialog } from './components/ConfirmDialog'
import { Kitchen } from './components/cooking/Kitchen'
import { HelpModal } from './components/HelpModal'
import { NightSummary } from './components/NightSummary'
import { OrderTicket } from './components/OrderTicket'
import { RecipeBook } from './components/RecipeBook'
import { ResultModal } from './components/ResultModal'
import { SettingsModal } from './components/SettingsModal'
import { Shop } from './components/Shop'
import { TitleScreen } from './components/TitleScreen'
import { Toast } from './components/Toast'
import { TopBar } from './components/TopBar'
import { characters } from './data/characters'
import { recipeById } from './data/recipes'
import { playSfx, setAudioSettings, startMusic, stopMusic } from './services/audio'
import {
  gameReducer,
  hasSavedGame,
  initialState,
  loadGame,
  saveGame,
} from './state/game'
import type { Settings } from './types'

export function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const [hasSave, setHasSave] = useState(() => hasSavedGame())
  const [confirmClose, setConfirmClose] = useState(false)

  const currentOrder = state.orders[state.orderIndex]
  const currentCharacter =
    characters.find((character) => character.id === currentOrder?.characterId) ?? characters[0]
  const orderRecipe = recipeById(currentOrder?.recipeId)
  const activeRecipe = recipeById(state.currentRecipeId) ?? orderRecipe ?? null
  const currentRequest =
    orderRecipe && currentCharacter.favoriteRecipe !== orderRecipe.id
      ? orderRecipe.request
      : currentCharacter.greeting

  useEffect(() => {
    document.documentElement.classList.toggle('reduced-motion', state.settings.reducedMotion)
    document.documentElement.classList.toggle('large-text', state.settings.largeText)
    setAudioSettings(state.settings)
    if (state.settings.music && state.screen !== 'title') {
      startMusic()
    } else {
      stopMusic()
    }
  }, [state.settings, state.screen])

  useEffect(() => {
    if (state.screen === 'title') return
    saveGame(state)
    setHasSave(true)
  }, [state])

  useEffect(() => {
    if (!state.toast) return
    const timer = window.setTimeout(() => dispatch({ type: 'CLEAR_TOAST' }), 2800)
    return () => window.clearTimeout(timer)
  }, [state.toast])

  const startNewGame = () => {
    playSfx('click')
    dispatch({ type: 'START_GAME' })
  }

  const continueGame = () => {
    const save = loadGame()
    if (!save) {
      dispatch({ type: 'TOAST', message: 'No encontramos una partida guardada.' })
      return
    }
    playSfx('click')
    dispatch({ type: 'CONTINUE_GAME', payload: save })
  }

  const openSettings = () => {
    playSfx('click')
    dispatch({ type: 'OPEN_SETTINGS' })
  }

  const closeSettings = () => {
    playSfx('click')
    dispatch({ type: 'CLOSE_SETTINGS' })
  }

  const toggleSetting = (key: keyof Settings) => {
    dispatch({ type: 'TOGGLE_SETTING', key })
  }

  const resetGame = () => {
    dispatch({ type: 'RESET' })
    setHasSave(false)
    setConfirmClose(false)
  }

  const openRecipe = () => {
    playSfx('click')
    dispatch({ type: 'OPEN_RECIPE' })
  }

  const handleCook = () => {
    playSfx('click')
    if (state.currentRecipeId) {
      dispatch({ type: 'START_COOKING' })
    } else {
      dispatch({ type: 'OPEN_RECIPE' })
    }
  }

  const handleTalk = () => {
    playSfx('pop')
    dispatch({ type: 'TOAST', message: currentRequest })
  }

  const handleServe = (quality: number) => {
    dispatch({ type: 'SERVE_ORDER', quality })
  }

  const handleBuy = (itemId: string) => {
    dispatch({ type: 'BUY_ITEM', itemId })
  }

  const isCafe = state.screen === 'cafe' || state.screen === 'recipe' || state.screen === 'cooking'

  return (
    <div className="app">
      {state.screen === 'title' ? (
        <TitleScreen
          hasSave={hasSave}
          onStart={startNewGame}
          onContinue={continueGame}
          onSettings={openSettings}
          onHelp={() => dispatch({ type: 'SHOW_HELP', show: true })}
        />
      ) : null}

      {isCafe ? (
        <div className="cafe-screen">
          <TopBar
            day={state.day}
            orderIndex={state.orderIndex}
            coins={state.coins}
            stars={state.stars}
            onCloseDay={() => setConfirmClose(true)}
            onSettings={openSettings}
          />

          <main className="cafe-main">
            <div className="cafe-stage">
              <CafeScene
                character={currentCharacter}
                bubble={state.screen === 'cafe' ? currentRequest : undefined}
              />
            </div>

            {currentOrder && orderRecipe ? (
              <OrderTicket
                character={currentCharacter}
                recipe={orderRecipe}
                ownedIngredients={state.ownedIngredients}
                orderIndex={state.orderIndex}
                day={state.day}
                onStart={openRecipe}
              />
            ) : null}
          </main>

          <ActionDock
            onRecipe={openRecipe}
            onCook={handleCook}
            onTalk={handleTalk}
            onCloseDay={() => setConfirmClose(true)}
          />
        </div>
      ) : null}

      {state.screen === 'night' ? (
        <NightSummary
          day={state.day}
          served={state.served}
          dayEarnings={state.dayEarnings}
          dayStars={state.dayStars}
          coins={state.coins}
          onShop={() => {
            playSfx('click')
            dispatch({ type: 'GO_SCREEN', screen: 'shop' })
          }}
          onSleep={() => {
            playSfx('click')
            dispatch({ type: 'NEXT_DAY' })
          }}
        />
      ) : null}

      {state.screen === 'shop' ? (
        <Shop
          day={state.day}
          coins={state.coins}
          ownedItems={state.ownedItems}
          onBuy={handleBuy}
          onBack={() => {
            playSfx('click')
            dispatch({ type: 'GO_SCREEN', screen: 'night' })
          }}
          onSleep={() => {
            playSfx('click')
            dispatch({ type: 'NEXT_DAY' })
          }}
        />
      ) : null}

      {state.screen === 'recipe' && activeRecipe ? (
        <RecipeBook
          day={state.day}
          currentRecipeId={state.currentRecipeId}
          onClose={() => dispatch({ type: 'GO_SCREEN', screen: 'cafe' })}
          onCook={() => dispatch({ type: 'START_COOKING' })}
        />
      ) : null}

      {state.screen === 'cooking' && activeRecipe ? (
        <Kitchen
          recipe={activeRecipe}
          character={currentCharacter}
          ownedIngredients={state.ownedIngredients}
          reducedMotion={state.settings.reducedMotion}
          onServe={handleServe}
          onBack={() => dispatch({ type: 'GO_SCREEN', screen: 'recipe' })}
        />
      ) : null}

      {state.lastReward && currentCharacter ? (
        <ResultModal
          character={currentCharacter}
          reward={state.lastReward}
          isLast={state.orderIndex >= 4}
          onNext={() => {
            playSfx('click')
            dispatch({ type: 'NEXT_ORDER' })
          }}
        />
      ) : null}

      {state.settingsOpen ? (
        <SettingsModal
          settings={state.settings}
          onToggle={toggleSetting}
          onClose={closeSettings}
          onReset={resetGame}
        />
      ) : null}

      {state.showHelp ? (
        <HelpModal onClose={() => dispatch({ type: 'SHOW_HELP', show: false })} />
      ) : null}

      {confirmClose ? (
        <ConfirmDialog
          title="¿Cerrar la tienda?"
          message="Puedes cerrar antes de los 5 pedidos. Verás el resumen del día y podrás ir a la tienda."
          confirmLabel="Sí, cerrar"
          cancelLabel="Seguir"
          onConfirm={() => {
            playSfx('click')
            setConfirmClose(false)
            dispatch({ type: 'CLOSE_DAY' })
          }}
          onCancel={() => {
            playSfx('click')
            setConfirmClose(false)
          }}
        />
      ) : null}

      {state.toast ? <Toast message={state.toast} /> : null}
    </div>
  )
}
