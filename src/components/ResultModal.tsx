import type { Character as CharacterType, Reward } from '../types'
import { Character } from './Character'
import { Icon } from './Icon'

interface ResultModalProps {
  character: CharacterType
  reward: Reward
  isLast: boolean
  onNext: () => void
}

export function ResultModal({ character, reward, isLast, onNext }: ResultModalProps) {
  return (
    <div className="overlay">
      <section className="modal result-modal" aria-label="Pedido servido">
        <div className="result-character">
          <Character character={character} size={96} mood="happy" />
        </div>
        <span className="ticket-kicker">PEDIDO SERVIDO</span>
        <h2>¡Quedó delicioso!</h2>
        <p>{reward.message}</p>

        <div className="result-stats">
          <span>
            <Icon name="coin" size={18} /> +{reward.coins}
          </span>
          <span>
            <Icon name="star" size={18} /> +{reward.stars}
          </span>
        </div>

        <button className="cn-button cn-button--lg" onClick={onNext}>
          {isLast ? 'Cerrar la tienda' : 'Siguiente pedido'}
        </button>
      </section>
    </div>
  )
}
