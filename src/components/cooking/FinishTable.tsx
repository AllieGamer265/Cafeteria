import { useEffect, useRef, useState } from 'react'
import { playSfx } from '../../services/audio'
import type { Recipe } from '../../types'
import { Icon, type IconName } from '../Icon'

interface FinishTableProps {
  recipe: Recipe
  cut: boolean
  reducedMotion: boolean
  onToggleCut: () => void
  onBox: () => void
}

export function FinishTable({
  recipe,
  cut,
  reducedMotion,
  onToggleCut,
  onBox,
}: FinishTableProps) {
  const [boxing, setBoxing] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current)
    },
    [],
  )

  const toggleCut = () => {
    if (boxing) return
    playSfx('mix')
    onToggleCut()
  }

  const box = () => {
    if (boxing) return
    setBoxing(true)
    playSfx('pop')
    timer.current = window.setTimeout(onBox, reducedMotion ? 80 : 420)
  }

  return (
    <div className="finish-station">
      <div className="finish-table">
        <div className="finish-plate">
          <div
            className={`finish-dessert ${cut ? 'is-cut' : ''} ${boxing ? 'is-boxing' : ''}`}
            style={{ backgroundColor: recipe.color }}
          >
            <Icon name={recipe.icon as IconName} size={54} />
          </div>
          <span className="finish-plate__rim" aria-hidden="true" />
        </div>

        <div className={`finish-box ${boxing ? 'is-filled' : ''}`} aria-hidden="true">
          <span className="finish-box__lid" />
          <span className="finish-box__ribbon" />
        </div>
      </div>

      <div className="finish-info">
        <div className="finish-info__head">
          <Icon name="plate" size={30} />
          <div>
            <h3>Acabado</h3>
            <p>Presenta el pedido y guárdalo en su cajita.</p>
          </div>
        </div>
        <p className="finish-info__note">
          {cut
            ? 'Cortado en porciones: mejor presentación y un extra de calidad.'
            : 'Cortar es opcional, pero mejora la presentación.'}
        </p>
      </div>

      <footer className="kitchen-footer finish-footer">
        <p className="kitchen-hint">La cajita cierra el pedido.</p>
        <div className="finish-actions">
          <button
            className={`cn-button cn-button--ghost ${cut ? 'is-selected' : ''}`}
            onClick={toggleCut}
            disabled={boxing}
          >
            <Icon name={cut ? 'check' : 'scissors'} size={18} />
            {cut ? 'Cortado' : 'Cortar'}
          </button>
          <button className="cn-button cn-button--lg" onClick={box} disabled={boxing}>
            <Icon name="box" size={18} /> Guardar en la cajita
          </button>
        </div>
      </footer>
    </div>
  )
}
