import { Icon } from '../Icon'
import { DRAG_MIME } from './drag'
import { getIngredientVisual, isDough } from './ingredientVisuals'

interface IngredientShelfProps {
  ingredients: string[]
  placed: string[]
  selected: string | null
  doughPlaced: boolean
  onSelect: (name: string) => void
  onDragStart: () => void
}

export function IngredientShelf({
  ingredients,
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
        {ingredients.map((ingredient) => {
          const visual = getIngredientVisual(ingredient)
          const dough = isDough(ingredient)
          const done = dough ? doughPlaced : placed.includes(ingredient)
          return (
            <button
              key={ingredient}
              type="button"
              className={`ingredient-square ${selected === ingredient ? 'is-selected' : ''} ${
                done ? 'is-done' : ''
              }`}
              onClick={() => onSelect(ingredient)}
              disabled={done}
              aria-pressed={selected === ingredient}
              aria-label={`${ingredient}${dough ? ', tomar masa' : ''}${done ? ', ya colocado' : ''}`}
              draggable={!done}
              onDragStart={(event) => {
                event.dataTransfer.setData(DRAG_MIME, ingredient)
                event.dataTransfer.effectAllowed = 'move'
                onDragStart()
              }}
            >
              <span className="ingredient-square__icon" style={{ backgroundColor: visual.color }}>
                <Icon name={done ? 'check' : visual.icon} size={22} />
              </span>
              <span className="ingredient-square__name">{ingredient}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
