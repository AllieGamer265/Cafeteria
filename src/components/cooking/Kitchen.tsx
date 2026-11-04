import { useEffect, useMemo, useState } from 'react'
import { playSfx } from '../../services/audio'
import type { Character as CharacterType, Recipe } from '../../types'
import { Icon } from '../Icon'
import { DoughStack } from './DoughStack'
import { FinishTable } from './FinishTable'
import { IngredientShelf } from './IngredientShelf'
import { KitchenCamera } from './KitchenCamera'
import { OrderBanner } from './OrderBanner'
import { OvenStation } from './OvenStation'
import { Workbench } from './Workbench'
import { isDough } from './ingredientVisuals'

interface KitchenProps {
  recipe: Recipe
  character: CharacterType
  reducedMotion: boolean
  onServe: (quality: number) => void
  onBack: () => void
}

type Phase = 'assemble' | 'oven' | 'finish'

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
  const [phase, setPhase] = useState<Phase>('assemble')
  const [ovenScore, setOvenScore] = useState(0)
  const [cut, setCut] = useState(false)

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

  const heatVariant = useMemo<'oven' | 'brew'>(
    () => (recipe.stations.includes('brew') && !recipe.stations.includes('oven') ? 'brew' : 'oven'),
    [recipe],
  )

  const steps = useMemo(
    () => [
      { id: 'assemble', label: 'Ensamblaje' },
      { id: 'oven', label: heatVariant === 'brew' ? 'Cafetera' : 'Horno' },
      { id: 'finish', label: 'Acabado' },
    ],
    [heatVariant],
  )

  const phaseIndex = steps.findIndex((step) => step.id === phase)

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
    ? '¡Ingredientes listos!'
    : needsDough && !doughPlaced
      ? 'Toma una masa de la pila.'
      : selected
        ? 'Toca la mesa para colocarlo.'
        : 'Toca un ingrediente y luego la mesa, o arrástralo.'

  const assemblyScore = Math.max(60, 100 - mistakes * 10)

  const handleOvenDone = (score: number) => {
    setOvenScore(score)
    setPhase('finish')
  }

  const handleBox = () => {
    const finishScore = cut ? 100 : 65
    const quality = Math.round(assemblyScore * 0.4 + ovenScore * 0.4 + finishScore * 0.2)
    playSfx('serve')
    onServe(quality)
  }

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

        <ol className="kitchen-steps" aria-label="Etapas de la preparación">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className={`kitchen-step ${index === phaseIndex ? 'is-active' : ''} ${
                index < phaseIndex ? 'is-done' : ''
              }`}
            >
              {index < phaseIndex ? <Icon name="check" size={11} /> : <span>{index + 1}</span>}
              {step.label}
            </li>
          ))}
        </ol>

        <KitchenCamera index={phaseIndex} instant={reducedMotion}>
          <div className="kitchen-zone kitchen-zone--assemble">
            <div className="kitchen-scene" aria-hidden="true">
              <span className="kitchen-scene__sun" />
              <span className="kitchen-scene__window" />
              <span className="kitchen-scene__beam" />
              <span className="kitchen-scene__lamp">
                <span className="kitchen-scene__cord" />
                <span className="kitchen-scene__shade" />
                <span className="kitchen-scene__glow" />
              </span>
              <span className="kitchen-scene__plant">
                <span className="kitchen-plant__leaf is-1" />
                <span className="kitchen-plant__leaf is-2" />
                <span className="kitchen-plant__leaf is-3" />
                <span className="kitchen-plant__leaf is-4" />
                <span className="kitchen-plant__pot" />
              </span>
              <span className="kitchen-scene__dust is-1" />
              <span className="kitchen-scene__dust is-2" />
              <span className="kitchen-scene__dust is-3" />
              <span className="kitchen-scene__dust is-4" />
              <span className="kitchen-scene__dust is-5" />
            </div>

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
                  playSfx('oven')
                  setPhase('oven')
                }}
              >
                <Icon name={heatVariant === 'brew' ? 'coffee' : 'oven'} size={18} />
                {heatVariant === 'brew' ? 'Pasar a la cafetera' : 'Llevar al horno'}
              </button>
            </footer>
          </div>

          <div className="kitchen-zone">
            <OvenStation
              variant={heatVariant}
              active={phase === 'oven'}
              reducedMotion={reducedMotion}
              onDone={handleOvenDone}
            />
          </div>

          <div className="kitchen-zone">
            <FinishTable
              recipe={recipe}
              cut={cut}
              reducedMotion={reducedMotion}
              onToggleCut={() => setCut((value) => !value)}
              onBox={handleBox}
            />
          </div>
        </KitchenCamera>
      </section>
    </div>
  )
}
