import { useState } from 'react'
import { getIngredientName } from '../data/ingredients'
import { recipes } from '../data/recipes'
import { playSfx } from '../services/audio'
import type { RecipeCategory } from '../types'
import type { IconName } from './Icon'
import { Icon } from './Icon'

interface RecipeBookProps {
  day: number
  currentRecipeId: string | null
  onClose: () => void
  onCook: () => void
}

type Tab = 'todas' | RecipeCategory

const tabs: { id: Tab; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'panaderia', label: 'Panadería' },
  { id: 'postres', label: 'Postres' },
]

export function RecipeBook({ day, currentRecipeId, onClose, onCook }: RecipeBookProps) {
  const [tab, setTab] = useState<Tab>('todas')
  const currentRecipe = recipes.find((recipe) => recipe.id === currentRecipeId)
  const visibleRecipes = recipes.filter((recipe) => tab === 'todas' || recipe.category === tab)

  const close = () => {
    playSfx('click')
    onClose()
  }

  const cook = () => {
    playSfx('click')
    onCook()
  }

  return (
    <div className="overlay">
      <section className="book-panel" aria-label="Recetario">
        <header className="book-header">
          <div>
            <span className="ticket-kicker">LIBRO DEL NIDO</span>
            <h2>Recetario</h2>
          </div>
          <button className="icon-button" onClick={close} aria-label="Cerrar recetario">
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className="book-tabs" role="tablist" aria-label="Categorías de recetas">
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

        <div className="recipe-grid">
          {visibleRecipes.map((recipe) => {
            const locked = recipe.unlockDay > day
            const isCurrent = recipe.id === currentRecipeId
            return (
              <article
                key={recipe.id}
                className={`recipe-card ${locked ? 'is-locked' : ''} ${isCurrent ? 'is-current' : ''}`}
              >
                <div className="recipe-icon" style={{ backgroundColor: recipe.color }}>
                  <Icon name={recipe.icon as IconName} size={38} />
                </div>
                <div className="recipe-card-body">
                  <h3>{recipe.name}</h3>
                  <p>{recipe.ingredients.map(getIngredientName).join(' · ')}</p>
                  <span className="recipe-meta">
                    Día {recipe.unlockDay} · {recipe.stations.length} pasos
                  </span>
                </div>
                <div className="recipe-card-footer">
                  {locked ? (
                    <span className="badge badge--locked">
                      <Icon name="lock" size={12} /> Bloqueada
                    </span>
                  ) : isCurrent ? (
                    <button className="cn-button cn-button--sm" onClick={cook}>
                      <Icon name="play" size={12} /> Cocinar
                    </button>
                  ) : (
                    <span className="badge">Disponible</span>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <footer className="book-footer">
          <div>
            <span className="ticket-kicker">PEDIDO ACTUAL</span>
            <p>{currentRecipe ? currentRecipe.name : 'Abre el ticket para empezar un pedido.'}</p>
          </div>
          <button className="cn-button" onClick={cook} disabled={!currentRecipeId}>
            <Icon name="bowl" size={16} /> Cocinar pedido actual
          </button>
        </footer>
      </section>
    </div>
  )
}
