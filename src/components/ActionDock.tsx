import { Icon } from './Icon'

interface ActionDockProps {
  onRecipe: () => void
  onCook: () => void
  onTalk: () => void
  onCloseDay: () => void
}

export function ActionDock({ onRecipe, onCook, onTalk, onCloseDay }: ActionDockProps) {
  return (
    <nav className="action-dock" aria-label="Acciones de la cafetería">
      <button className="dock-button" onClick={onRecipe}>
        <Icon name="book" size={22} />
        <span>Recetario</span>
      </button>
      <button className="dock-button dock-button--primary" onClick={onCook}>
        <Icon name="bowl" size={22} />
        <span>Cocina</span>
      </button>
      <button className="dock-button" onClick={onTalk}>
        <Icon name="chat" size={22} />
        <span>Hablar</span>
      </button>
      <button className="dock-button" onClick={onCloseDay}>
        <Icon name="moon" size={22} />
        <span>Cerrar</span>
      </button>
    </nav>
  )
}
