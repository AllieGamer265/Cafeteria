import { useEffect, useState } from 'react'
import { playSfx } from '../services/audio'
import type { Character as CharacterType, Recipe, Station } from '../types'
import { Character } from './Character'
import { Icon } from './Icon'

interface CookingStationProps {
  recipe: Recipe
  character: CharacterType
  reducedMotion: boolean
  onServe: (quality: number) => void
  onBack: () => void
}

const stationLabels: Record<Station, string> = {
  mix: 'Mezclar',
  oven: 'Hornear',
  brew: 'Cafetera',
  plate: 'Emplatar',
}

const stationHints: Record<Station, string> = {
  mix: 'Toca para mezclar. No hay prisa.',
  oven: 'Detén la barra en la zona verde.',
  brew: 'Sirve cuando el aroma esté en su punto.',
  plate: 'Elige un topping y sirve.',
}

const toppings = [
  { id: 'fresa', name: 'Fresa' },
  { id: 'chocolate', name: 'Chocolate' },
  { id: 'sakura', name: 'Sakura' },
]

export function CookingStation({
  recipe,
  character,
  reducedMotion,
  onServe,
  onBack,
}: CookingStationProps) {
  const stations = recipe.stations
  const maxPossible = stations.reduce(
    (total, station) => total + (station === 'plate' ? 20 : 40),
    0,
  )
  const [stepIndex, setStepIndex] = useState(0)
  const [mixClicks, setMixClicks] = useState(0)
  const [marker, setMarker] = useState({ pos: 0, dir: 1 })
  const [earned, setEarned] = useState(0)
  const [topping, setTopping] = useState<string | null>(null)

  const currentStation = stations[stepIndex]
  const qualityPreview = Math.max(0, Math.min(100, Math.round((earned / maxPossible) * 100)))

  useEffect(() => {
    if (currentStation !== 'oven' && currentStation !== 'brew') return
    const speed = reducedMotion ? 0.25 : 0.7
    const interval = window.setInterval(() => {
      setMarker((previous) => {
        let pos = previous.pos + previous.dir * speed
        let dir = previous.dir
        if (pos >= 100) {
          pos = 100
          dir = -1
        }
        if (pos <= 0) {
          pos = 0
          dir = 1
        }
        return { pos, dir }
      })
    }, 16)
    return () => window.clearInterval(interval)
  }, [currentStation, reducedMotion])

  function advance(points: number) {
    const nextEarned = earned + points
    setEarned(nextEarned)

    if (stepIndex >= stations.length - 1) {
      const quality = Math.max(0, Math.min(100, Math.round((nextEarned / maxPossible) * 100)))
      playSfx('serve')
      onServe(quality)
      return
    }

    setStepIndex((value) => value + 1)
    setMixClicks(0)
    setMarker({ pos: 0, dir: 1 })
    setTopping(null)
    if (points > 0) playSfx('success')
  }

  function handleMix() {
    if (mixClicks >= 5) return
    playSfx('mix')
    setMixClicks((value) => Math.min(5, value + 1))
  }

  function handleTiming() {
    const distance = Math.abs(marker.pos - 50)
    const points = Math.max(0, Math.round(40 - distance * 1.1))
    playSfx(points > 30 ? 'success' : points > 15 ? 'oven' : 'error')
    advance(points)
  }

  function handlePlate() {
    const points = topping ? 20 : 8
    playSfx(topping ? 'success' : 'error')
    advance(points)
  }

  function handlePrimary() {
    if (currentStation === 'mix') {
      if (mixClicks < 5) {
        handleMix()
        return
      }
      advance(Math.round((mixClicks / 5) * 40))
      return
    }
    if (currentStation === 'oven' || currentStation === 'brew') {
      handleTiming()
      return
    }
    handlePlate()
  }

  const primaryLabel =
    currentStation === 'mix'
      ? mixClicks >= 5
        ? 'Siguiente'
        : `Mezclar (${mixClicks}/5)`
      : currentStation === 'oven'
        ? 'Sacar del horno'
        : currentStation === 'brew'
          ? 'Servir café'
          : stepIndex === stations.length - 1
            ? 'Servir al cliente'
            : 'Siguiente'

  return (
    <div className="overlay">
      <section className="cooking-panel" aria-label={`Preparando ${recipe.name}`}>
        <header className="cooking-header">
          <button className="cn-button cn-button--ghost cn-button--sm" onClick={onBack}>
            <Icon name="arrow" size={14} /> Volver
          </button>
          <div className="cooking-title">
            <span className="ticket-kicker">PREPARANDO</span>
            <h2>{recipe.name}</h2>
          </div>
          <div className="step-dots" aria-label={`Paso ${stepIndex + 1} de ${stations.length}`}>
            {stations.map((station, index) => (
              <span
                key={`${station}-${index}`}
                className={`step-dot ${index < stepIndex ? 'is-done' : ''} ${
                  index === stepIndex ? 'is-active' : ''
                }`}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </header>

        <div className="cooking-body">
          <div className={`station-visual station-${currentStation}`}>
            {currentStation === 'mix' ? (
              <div className="mix-station">
                <div className={`mix-bowl ${mixClicks > 0 ? 'is-mixing' : ''}`}>
                  <div
                    className="mix-batter"
                    style={{ height: `${18 + mixClicks * 13}%` }}
                  />
                </div>
                <div className="whisk" aria-hidden="true" />
                <div className="mix-dots" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <span key={index} className={`mix-dot ${index < mixClicks ? 'is-on' : ''}`} />
                  ))}
                </div>
              </div>
            ) : null}

            {currentStation === 'oven' || currentStation === 'brew' ? (
              <div className="timing-station">
                <div className={currentStation === 'oven' ? 'oven-visual' : 'brew-visual'}>
                  {currentStation === 'oven' ? (
                    <>
                      <div className="oven-window" />
                      <div className="oven-knob" />
                    </>
                  ) : (
                    <>
                      <div className="brew-liquid" />
                      <div className="brew-handle" />
                      <span className="brew-steam steam-one" />
                      <span className="brew-steam steam-two" />
                    </>
                  )}
                </div>
                <div className="timing-bar" aria-hidden="true">
                  <div className="timing-zone" />
                  <div className="timing-marker" style={{ left: `${marker.pos}%` }} />
                </div>
                <p className="timing-hint">Zona verde = mejor calidad</p>
              </div>
            ) : null}

            {currentStation === 'plate' ? (
              <div className="plate-station">
                <div className="plate-visual">
                  {topping ? <span className={`plate-topping topping-${topping}`} /> : null}
                </div>
                <div className="topping-row">
                  {toppings.map((entry) => (
                    <button
                      key={entry.id}
                      className={`topping-button ${topping === entry.id ? 'is-selected' : ''}`}
                      onClick={() => {
                        setTopping(entry.id)
                        playSfx('pop')
                      }}
                    >
                      <span className={`topping-dot topping-${entry.id}`} />
                      {entry.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="station-controls">
            <div className="cooking-character-row">
              <Character character={character} size={64} />
              <div>
                <h3>{stationLabels[currentStation]}</h3>
                <p>{stationHints[currentStation]}</p>
              </div>
            </div>

            <div className="quality-block">
              <div className="quality-label">
                <span>Calidad</span>
                <span>{qualityPreview}%</span>
              </div>
              <div className="quality-bar">
                <span style={{ width: `${qualityPreview}%` }} />
              </div>
            </div>

            <p className="cooking-note">
              No hay cronómetro. La calidad depende de tu precisión y de los detalles.
            </p>
          </div>
        </div>

        <footer className="cooking-footer">
          <span className="cooking-step-label">
            Paso {stepIndex + 1} de {stations.length}
          </span>
          <button className="cn-button cn-button--lg" onClick={handlePrimary}>
            {primaryLabel}
          </button>
        </footer>
      </section>
    </div>
  )
}
