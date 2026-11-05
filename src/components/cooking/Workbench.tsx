import type { CSSProperties, DragEvent, KeyboardEvent } from 'react'
import { getIngredientName } from '../../data/ingredients'
import type { IngredientKind } from '../../types'
import { Icon } from '../Icon'
import { DRAG_MIME } from './drag'
import { getIngredientVisual } from './ingredientVisuals'

interface WorkbenchProps {
  needsDough: boolean
  doughPlaced: boolean
  layers: string[]
  selected: string | null
  onTap: () => void
  onDropIngredient: (name: string) => void
}

const sprinkleOffsets = [
  { left: '22%', top: '26%' },
  { left: '58%', top: '18%' },
  { left: '38%', top: '52%' },
  { left: '70%', top: '46%' },
  { left: '14%', top: '58%' },
]

function layerStyle(kind: IngredientKind, index: number): CSSProperties {
  const isSauce = kind === 'sauce' || kind === 'liquid'
  return {
    width: isSauce ? '78%' : '64%',
    height: isSauce ? '40%' : '26%',
    bottom: `${16 + index * 13}%`,
  }
}

export function Workbench({
  needsDough,
  doughPlaced,
  layers,
  selected,
  onTap,
  onDropIngredient,
}: WorkbenchProps) {
  const ready = !needsDough || doughPlaced

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const name = event.dataTransfer.getData(DRAG_MIME)
    if (name) onDropIngredient(name)
  }

  const handleKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onTap()
    }
  }

  return (
    <section
      className={`workbench ${ready ? 'is-ready' : 'is-empty'}`}
      aria-label="Mesa de trabajo"
      role="button"
      tabIndex={0}
      onClick={onTap}
      onKeyDown={handleKey}
      onDragOver={(event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
      }}
      onDrop={handleDrop}
    >
      <div className="workbench__surface">
        <span className="workbench__light" aria-hidden="true" />
        <span className="workbench__pin" aria-hidden="true" />

        {!ready ? (
          <div className="workbench__hint">
            <Icon name="dough" size={52} />
            <p>Toma una masa y colócala aquí.</p>
          </div>
        ) : (
          <div className={`workpiece ${needsDough ? 'is-dough' : 'is-cup'}`}>
            {needsDough ? (
              <>
                <div className="dough-disc" />
                {layers.map((layer, index) => {
                  const visual = getIngredientVisual(layer)
                  if (visual.kind === 'sprinkle') {
                    return (
                      <span className="work-layer work-layer--sprinkle" key={layer} aria-hidden="true">
                        {sprinkleOffsets.map((offset) => (
                          <span
                            key={`${offset.left}-${offset.top}`}
                            className="sprinkle-dot"
                            style={{ backgroundColor: visual.color, ...offset }}
                          />
                        ))}
                      </span>
                    )
                  }
                  return (
                    <span
                      key={layer}
                      className={`work-layer work-layer--${visual.kind}`}
                      style={{ backgroundColor: visual.color, ...layerStyle(visual.kind, index) }}
                      aria-hidden="true"
                    />
                  )
                })}
              </>
            ) : (
              <div className="cup-glass">
                <div className="cup-liquid-base" />
                {layers.map((layer, index) => {
                  const visual = getIngredientVisual(layer)
                  return (
                    <span
                      key={layer}
                      className="cup-band"
                      style={{
                        backgroundColor: visual.color,
                        bottom: `${index * 26}px`,
                        height: '26px',
                      }}
                      aria-hidden="true"
                    />
                  )
                })}
              </div>
            )}
          </div>
        )}

        {selected ? <span className="workbench__ghost">{getIngredientName(selected)}</span> : null}
      </div>

      <p className="workbench__caption">
        {selected
          ? `Toca la mesa para colocar ${getIngredientName(selected).toLowerCase()}`
          : 'Mesa de trabajo'}
      </p>
    </section>
  )
}
