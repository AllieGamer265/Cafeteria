import { DRAG_MIME } from './drag'

interface DoughStackProps {
  remaining: number
  disabled: boolean
  refillPulse: number
  onTake: () => void
  onDragStart: () => void
}

const TOTAL = 6

export function DoughStack({
  remaining,
  disabled,
  refillPulse,
  onTake,
  onDragStart,
}: DoughStackProps) {
  return (
    <section className="dough-stack" aria-label="Pila de masas">
      <span className="dough-stack__label">Masas</span>

      <div className="dough-stack__pile" key={refillPulse}>
        {Array.from({ length: TOTAL }, (_, index) => {
          const available = index < remaining
          return (
            <button
              key={index}
              type="button"
              className={`dough-ball ${available ? '' : 'is-gone'}`}
              style={{ animationDelay: `${index * 45}ms` }}
              onClick={() => {
                if (available) onTake()
              }}
              disabled={disabled || !available}
              draggable={!disabled && available}
              onDragStart={(event) => {
                event.dataTransfer.setData(DRAG_MIME, 'masa')
                event.dataTransfer.effectAllowed = 'move'
                onDragStart()
              }}
              aria-label={available ? 'Tomar masa' : 'Masa agotada'}
            />
          )
        })}
      </div>

      <span className="dough-stack__count">{remaining}/{TOTAL}</span>
    </section>
  )
}
