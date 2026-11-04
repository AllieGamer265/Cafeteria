import { Icon } from './Icon'

interface TopBarProps {
  day: number
  orderIndex: number
  coins: number
  stars: number
  onCloseDay: () => void
  onSettings: () => void
}

export function TopBar({ day, orderIndex, coins, stars, onCloseDay, onSettings }: TopBarProps) {
  return (
    <header className="top-bar">
      <div className="top-bar__left">
        <span className="day-badge">DÍA {day}</span>
        <span className="order-badge">Pedido {Math.min(orderIndex + 1, 5)}/5</span>
      </div>

      <div className="top-bar__stats">
        <span className="stat-pill">
          <Icon name="coin" size={16} /> {coins}
        </span>
        <span className="stat-pill">
          <Icon name="star" size={16} /> {stars}
        </span>
      </div>

      <div className="top-bar__actions">
        <button className="icon-button" onClick={onCloseDay} aria-label="Cerrar tienda" title="Cerrar tienda">
          <Icon name="moon" size={20} />
        </button>
        <button className="icon-button" onClick={onSettings} aria-label="Ajustes" title="Ajustes">
          <Icon name="gear" size={20} />
        </button>
      </div>
    </header>
  )
}
