import { useEffect, useState } from 'react'
import { playSfx } from '../../services/audio'
import { Icon } from '../Icon'

interface OvenStationProps {
  variant: 'oven' | 'brew'
  active: boolean
  reducedMotion: boolean
  onDone: (score: number) => void
}

export function OvenStation({ variant, active, reducedMotion, onDone }: OvenStationProps) {
  const [marker, setMarker] = useState({ pos: 0, dir: 1 })
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    if (!active || locked) return
    const speed = reducedMotion ? 0.3 : 0.8
    const interval = window.setInterval(() => {
      setMarker((current) => {
        let pos = current.pos + current.dir * speed
        let dir = current.dir
        if (pos >= 100) {
          pos = 100
          dir = -1
        } else if (pos <= 0) {
          pos = 0
          dir = 1
        }
        return { pos, dir }
      })
    }, 16)
    return () => window.clearInterval(interval)
  }, [active, locked, reducedMotion])

  const finish = () => {
    if (locked) return
    const distance = Math.abs(marker.pos - 50)
    const score = Math.round(Math.max(0, 100 - distance * 2))
    setLocked(true)
    playSfx(score >= 70 ? 'success' : 'oven')
    onDone(score)
  }

  const isBrew = variant === 'brew'
  const title = isBrew ? 'Cafetera' : 'Horno'
  const doneLabel = isBrew ? 'Servir café' : 'Sacar del horno'
  const hint = isBrew
    ? 'Sirve cuando el aroma esté en su punto. Sin prisa.'
    : 'Detén la barra en la zona verde. Sin prisa.'
  const iconName = isBrew ? 'coffee' : 'oven'

  return (
    <div className="oven-station">
      <div className="oven-stage">
        <div className={`${isBrew ? 'brew-visual' : 'oven-visual'} ${active && !locked ? 'is-baking' : ''}`}>
          {isBrew ? (
            <>
              <div className="brew-liquid" />
              <div className="brew-handle" />
              <span className="brew-steam steam-one" />
              <span className="brew-steam steam-two" />
            </>
          ) : (
            <>
              <div className="oven-window" />
              <div className="oven-knob" />
            </>
          )}
        </div>

        <div className="timing-bar" aria-hidden="true">
          <div className="timing-zone" />
          <div className="timing-marker" style={{ left: `${marker.pos}%` }} />
        </div>
        <p className="timing-hint">Zona verde = mejor calidad</p>
      </div>

      <div className="oven-info">
        <div className="oven-info__head">
          <Icon name={iconName} size={30} />
          <div>
            <h3>{title}</h3>
            <p>{hint}</p>
          </div>
        </div>
        <p className="oven-info__note">
          {isBrew
            ? 'La barra se mueve despacio. Sirve en el centro para una taza perfecta.'
            : 'La barra se mueve despacio. La precisión mejora la calidad del pedido.'}
        </p>
      </div>

      <footer className="kitchen-footer">
        <p className="kitchen-hint">{locked ? '¡Listo!' : 'Detén la barra en el centro.'}</p>
        <button
          className="cn-button cn-button--lg"
          onClick={finish}
          disabled={!active || locked}
        >
          <Icon name={iconName} size={18} /> {doneLabel}
        </button>
      </footer>
    </div>
  )
}
