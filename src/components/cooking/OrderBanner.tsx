import { getIngredientName } from '../../data/ingredients'
import type { Character as CharacterType, Recipe } from '../../types'
import { Character } from '../Character'
import type { IconName } from '../Icon'
import { Icon } from '../Icon'
import { getIngredientVisual } from './ingredientVisuals'

interface OrderBannerProps {
  character: CharacterType
  recipe: Recipe
  completed: string[]
  ownedIngredients: string[]
  onBack: () => void
}

export function OrderBanner({
  character,
  recipe,
  completed,
  ownedIngredients,
  onBack,
}: OrderBannerProps) {
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
        {recipe.ingredients.map((id) => {
          const visual = getIngredientVisual(id)
          const name = getIngredientName(id)
          const done = completed.includes(id)
          const locked = !ownedIngredients.includes(id)
          return (
            <li
              key={id}
              className={`order-banner__chip ${done ? 'is-done' : ''} ${
                locked ? 'is-locked' : ''
              }`}
              aria-label={`${name}${
                locked ? ', falta comprar en la tienda' : done ? ', listo' : ', pendiente'
              }`}
            >
              <Icon
                name={locked ? 'lock' : done ? 'check' : visual.icon}
                size={12}
              />
              <span>{name}</span>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
