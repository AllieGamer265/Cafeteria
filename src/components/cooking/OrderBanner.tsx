import type { Character as CharacterType, Recipe } from '../../types'
import { Character } from '../Character'
import type { IconName } from '../Icon'
import { Icon } from '../Icon'
import { getIngredientVisual } from './ingredientVisuals'

interface OrderBannerProps {
  character: CharacterType
  recipe: Recipe
  completed: string[]
  onBack: () => void
}

export function OrderBanner({ character, recipe, completed, onBack }: OrderBannerProps) {
  return (
    <header className="order-banner">
      <button className="cn-button cn-button--ghost cn-button--sm" onClick={onBack}>
        <Icon name="arrow" size={14} /> Volver
      </button>

      <div className="order-banner__character">
        <span className="order-banner__avatar">
          <Character character={character} size={44} />
        </span>
        <span className="order-banner__who">
          <small>Pedido de</small>
          <strong>{character.name}</strong>
        </span>
      </div>

      <div className="order-banner__recipe">
        <span
          className="order-banner__icon"
          style={{ backgroundColor: recipe.color }}
          aria-hidden="true"
        >
          <Icon name={recipe.icon as IconName} size={26} />
        </span>
        <span className="order-banner__title">
          <small>Preparando</small>
          <h2>{recipe.name}</h2>
        </span>
      </div>

      <ul className="order-banner__ingredients" aria-label="Ingredientes del pedido">
        {recipe.ingredients.map((ingredient) => {
          const visual = getIngredientVisual(ingredient)
          const done = completed.includes(ingredient)
          return (
            <li
              key={ingredient}
              className={`order-banner__chip ${done ? 'is-done' : ''}`}
              aria-label={`${ingredient}${done ? ', listo' : ', pendiente'}`}
            >
              <Icon name={done ? 'check' : visual.icon} size={12} />
              <span>{ingredient}</span>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
