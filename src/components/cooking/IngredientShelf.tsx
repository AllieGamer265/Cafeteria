import { ingredientById } from '../../data/ingredients'
import { Icon } from '../Icon'
import { DRAG_MIME } from './drag'
import { getIngredientVisual, isDough } from './ingredientVisuals'

interface IngredientShelfProps {
  ingredients: string[]
  required: string[]
  owned: string[]
  placed: string[]
  selected: string | null
  doughPlaced: boolean
  onSelect: (id: string) => void
  onDragStart: () => void
}

export function IngredientShelf({
  ingredients,
  required,
  owned,
  placed,
  selected,
  doughPlaced,
  onSelect,
  onDragStart,
}: IngredientShelfProps) {
  return (
    <section className="ingredient-shelf" aria-label="Estante de ingredientes">
      <span className="ingredient-shelf__label">Ingredientes</span>
      <span className="ingredient-shelf__vine" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>

      <div className="ingredient-squares">
        {ingredients.map((id) => {
          const ingredient = ingredientById(id)
          const visual = getIngredientVisual(id)
          const name = ingredient?.name ?? id
          const dough = isDough(id)
          const available = owned.includes(id)
          const needed = required.includes(id)
          const done = dough ? doughPlaced : placed.includes(id)
          const locked = !available
          const extra = available && !needed
          const disabled = done || locked || extra
          return (
            <button
              key={id}
              type="button"
              className={`ingredient-square ${selected === id ? 'is-selected' : ''} ${
                done ? 'is-done' : ''
              } ${locked ? 'is-locked' : ''} ${extra ? 'is-extra' : ''}`}
              onClick={() => onSelect(id)}
              disabled={disabled}
              aria-pressed={selected === id}
              title={
                locked
                  ? 'Consíguelo en la tienda'
                  : extra
                    ? 'No se usa en esta receta'
                    : undefined
              }
              aria-label={`${name}${
                locked
                  ? ', bloqueado. Consíguelo en la tienda'
                  : extra
                    ? ', guardado. No se usa en esta receta'
                    : dough
                      ? ', tomar masa'
                      : ''
              }${done ? ', ya colocado' : ''}`}
              draggable={!disabled}
              onDragStart={(event) => {
                event.dataTransfer.setData(DRAG_MIME, id)
                event.dataTransfer.effectAllowed = 'move'
                onDragStart()
              }}
            >
              <span className="ingredient-square__icon" style={{ backgroundColor: visual.color }}>
                <Icon name={done ? 'check' : locked ? 'lock' : visual.icon} size={22} />
              </span>
              <span className="ingredient-square__name">{name}</span>
              {locked ? <span className="ingredient-square__hint">Tienda</span> : null}
              {extra ? <span className="ingredient-square__hint">Guardado</span> : null}
            </button>
          )
        })}
      </div>
    </section>
  )
}
