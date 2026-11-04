import { useEffect, useMemo, useState } from 'react'
import { playSfx } from '../../services/audio'
import type { Character as CharacterType, Recipe } from '../../types'
import { Icon } from '../Icon'
import { DoughStack } from './DoughStack'
import { IngredientShelf } from './IngredientShelf'
import { OrderBanner } from './OrderBanner'
import { Workbench } from './Workbench'
import { isDough } from './ingredientVisuals'

interface KitchenProps {
  recipe: Recipe
  character: CharacterType
  reducedMotion: boolean
  onServe: (quality: number) => void
  onBack: () => void
}

export function Kitchen({ recipe, character, reducedMotion, onServe, onBack }: KitchenProps) {
  const needsDough = useMemo(() => recipe.ingredients.some(isDough), [recipe])
  const doughName = recipe.ingredients.find(isDough)
  const otherIngredients = useMemo(
    () => recipe.ingredients.filter((ingredient) => !isDough(ingredient)),
    [recipe],
  )

  const [doughPlaced, setDoughPlaced] = useState(!needsDough)
  const [remaining, setRemaining] = useState(6)
  const [refillPulse, setRefillPulse] = useState(0)
  const [layers, setLayers] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [mistakes, setMistakes] = useState(0)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (remaining !== 0) return
    const timer = window.setTimeout(() => {
      setRemaining(6)
      setRefillPulse((value) => value + 1)
    }, 420)
    return () => window.clearTimeout(timer)
  }, [remaining])

  useEffect(() => {
    if (!shake) return
    const timer = window.setTimeout(() => setShake(false), 320)
    return () => window.clearTimeout(timer)
  }, [shake])

  const completed = useMemo(() => {
    const done = [...layers]
    if (needsDough && doughPlaced && doughName) done.push(doughName)
    return done
  }, [layers, needsDough, doughPlaced, doughName])

  const isComplete =
    otherIngredients.every((ingredient) => layers.includes(ingredient)) &&
    (!needsDough || doughPlaced)

  const placeDough = () => {
    if (doughPlaced) return
    setDoughPlaced(true)
    setSelected(null)
    setRemaining((value) => Math.max(0, value - 1))
    playSfx('pop')
  }

  const placeIngredient = (name: string) => {
    if (isDough(name)) {
      placeDough()
      return
    }
    if (needsDough && !doughPlaced) {
      setMistakes((value) => value + 1)
      setShake(true)
      playSfx('error')
      return
    }
    if (layers.includes(name)) {
      playSfx('click')
      return
    }
    setLayers((current) => [...current, name])
    setSelected(null)
    playSfx('pop')
  }

  const selectIngredient = (name: string) => {
    if (isDough(name)) {
      placeDough()
      return
    }
    playSfx('click')
    setSelected((current) => (current === name ? null : name))
  }

  const handleTableTap = () => {
    if (selected) placeIngredient(selected)
  }

  const hint = isComplete
    ? '¡Listo para servir!'
    : needsDough && !doughPlaced
      ? 'Toma una masa de la pila.'
      : selected
        ? 'Toca la mesa para colocarlo.'
        : 'Toca un ingrediente y luego la mesa, o arrástralo.'

  const quality = Math.max(60, 100 - mistakes * 10)

  return (
    <div className={`overlay kitchen-overlay ${reducedMotion ? 'kitchen-overlay--reduced' : ''}`}>
      <section
        className={`kitchen-panel ${shake ? 'is-shaking' : ''}`}
        aria-label={`Mesa de construcción para ${recipe.name}`}
      >
        <OrderBanner
          character={character}
          recipe={recipe}
          completed={completed}
          onBack={onBack}
        />

        <div className="kitchen-stage">
          <IngredientShelf
            ingredients={recipe.ingredients}
            placed={layers}
            selected={selected}
            doughPlaced={doughPlaced}
            onSelect={selectIngredient}
            onDragStart={() => playSfx('click')}
          />

          <div className={`kitchen-floor ${needsDough ? '' : 'kitchen-floor--drink'}`}>
            {needsDough ? (
              <DoughStack
                remaining={remaining}
                refillPulse={refillPulse}
                disabled={doughPlaced}
                onTake={placeDough}
                onDragStart={() => playSfx('click')}
              />
            ) : null}

            <Workbench
              needsDough={needsDough}
              doughPlaced={doughPlaced}
              layers={layers}
              selected={selected}
              onTap={handleTableTap}
              onDropIngredient={placeIngredient}
            />
          </div>
        </div>

        <footer className="kitchen-footer">
          <p className="kitchen-hint">{hint}</p>
          <button
            className="cn-button cn-button--lg"
            disabled={!isComplete}
            onClick={() => {
              playSfx('serve')
              onServe(quality)
            }}
          >
            <Icon name="plate" size={18} /> Servir pedido
          </button>
        </footer>
      </section>
    </div>
  )
}
