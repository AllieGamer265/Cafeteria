import type { Character as CharacterType, Recipe } from '../types'
import { Character } from './Character'
import type { IconName } from './Icon'
import { Icon } from './Icon'

interface OrderTicketProps {
  character: CharacterType
  recipe: Recipe
  orderIndex: number
  day: number
  onStart: () => void
}

export function OrderTicket({ character, recipe, orderIndex, day, onStart }: OrderTicketProps) {
  return (
    <aside className="order-ticket" aria-label={`Pedido de ${character.name}`}>
      <div className="ticket-top">
        <span className="ticket-label">PEDIDO {orderIndex + 1}/5</span>
        <span className="ticket-day">DÍA {day}</span>
      </div>

      <div className="ticket-character">
        <div className="ticket-portrait">
          <Character character={character} size={72} />
        </div>
        <div>
          <h2>{character.name}</h2>
          <p>{character.personality}</p>
        </div>
      </div>

      <div className="ticket-order">
        <div className="ticket-recipe-icon" style={{ backgroundColor: recipe.color }}>
          <Icon name={recipe.icon as IconName} size={32} />
        </div>
        <div>
          <span className="ticket-kicker">PIDIÓ</span>
          <h3>{recipe.name}</h3>
          <p>{recipe.ingredients.join(' · ')}</p>
        </div>
      </div>

      <div className="ticket-ingredients">
        {recipe.ingredients.map((ingredient) => (
          <span className="ingredient-slot" key={ingredient}>
            {ingredient}
          </span>
        ))}
      </div>

      <div className="ticket-mood">
        <span>Ánimo</span>
        <span className="ticket-hearts" aria-label="Ánimo alto">
          <Icon name="heart" size={16} />
          <Icon name="heart" size={16} />
          <Icon name="heart" size={16} />
        </span>
      </div>

      <p className="ticket-note">Sin cronómetro. Tómate tu tiempo.</p>

      <button className="cn-button ticket-start" onClick={onStart}>
        <Icon name="play" size={16} /> Empezar
      </button>
    </aside>
  )
}
