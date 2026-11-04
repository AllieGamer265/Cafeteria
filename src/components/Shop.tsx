import { useState } from 'react'
import { shopItems } from '../data/shop'
import { playSfx } from '../services/audio'
import type { ShopCategory, ShopItem } from '../types'
import type { IconName } from './Icon'
import { Icon } from './Icon'

interface ShopProps {
  day: number
  coins: number
  ownedItems: string[]
  onBuy: (itemId: string) => void
  onBack: () => void
  onSleep: () => void
}

type Tab = 'todos' | ShopCategory

const tabs: { id: Tab; label: string }[] = [
  { id: 'todos', label: 'Todo' },
  { id: 'ingredientes', label: 'Ingredientes' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'decoracion', label: 'Decoración' },
]

export function Shop({ day, coins, ownedItems, onBuy, onBack, onSleep }: ShopProps) {
  const [tab, setTab] = useState<Tab>('todos')
  const visibleItems = shopItems.filter((item) => tab === 'todos' || item.category === tab)

  const buy = (item: ShopItem) => {
    if (ownedItems.includes(item.id) || coins < item.price) {
      playSfx('error')
      onBuy(item.id)
      return
    }
    playSfx('coin')
    onBuy(item.id)
  }

  return (
    <div className="shop-screen">
      <header className="shop-header">
        <div>
          <span className="ticket-kicker">DESPUÉS DEL CIERRE</span>
          <h1>Tienda del Nido</h1>
          <p>Día {day} · Compra ingredientes, equipo y decoración.</p>
        </div>
        <div className="shop-wallet">
          <Icon name="coin" size={22} />
          <span>{coins}</span>
        </div>
      </header>

      <div className="shop-tabs" role="tablist" aria-label="Categorías de la tienda">
        {tabs.map((entry) => (
          <button
            key={entry.id}
            className={`book-tab ${tab === entry.id ? 'is-active' : ''}`}
            onClick={() => {
              playSfx('click')
              setTab(entry.id)
            }}
            role="tab"
            aria-selected={tab === entry.id}
          >
            {entry.label}
          </button>
        ))}
      </div>

      <div className="shop-grid">
        {visibleItems.map((item) => {
          const owned = ownedItems.includes(item.id)
          const canAfford = coins >= item.price
          return (
            <article className={`shop-card ${owned ? 'is-owned' : ''}`} key={item.id}>
              <div className="shop-icon" style={{ backgroundColor: item.color }}>
                <Icon name={item.icon as IconName} size={38} />
              </div>
              <div className="shop-card-body">
                <span className="shop-category">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="shop-card-footer">
                <span className="shop-price">
                  <Icon name="coin" size={14} /> {item.price}
                </span>
                <button
                  className={`cn-button cn-button--sm ${owned ? 'cn-button--secondary' : ''}`}
                  onClick={() => buy(item)}
                  disabled={owned}
                >
                  {owned ? (
                    <>
                      <Icon name="check" size={12} /> Comprado
                    </>
                  ) : canAfford ? (
                    'Comprar'
                  ) : (
                    'Faltan monedas'
                  )}
                </button>
              </div>
            </article>
          )
        })}
      </div>

      <footer className="shop-footer">
        <button className="cn-button cn-button--secondary" onClick={onBack}>
          <Icon name="arrow" size={16} /> Volver al resumen
        </button>
        <button className="cn-button" onClick={onSleep}>
          <Icon name="moon" size={16} /> Dormir y empezar el día {day + 1}
        </button>
      </footer>
    </div>
  )
}
