import { Icon } from './Icon'

interface HelpModalProps {
  onClose: () => void
}

export function HelpModal({ onClose }: HelpModalProps) {
  return (
    <div className="overlay">
      <section className="modal help-modal" aria-label="Cómo jugar">
        <header className="modal-header">
          <div>
            <span className="ticket-kicker">BIENVENIDA</span>
            <h2>Cómo jugar</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Cerrar ayuda">
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className="help-list">
          <div className="help-step">
            <span className="help-number">1</span>
            <div>
              <strong>Recibe 5 pedidos al día</strong>
              <p>Cada animalito entra con un antojo distinto. No hay cronómetro.</p>
            </div>
          </div>
          <div className="help-step">
            <span className="help-number">2</span>
            <div>
              <strong>Elige la receta</strong>
              <p>Abre el recetario y cocina el pedido actual.</p>
            </div>
          </div>
          <div className="help-step">
            <span className="help-number">3</span>
            <div>
              <strong>Mezcla, hornea y emplata</strong>
              <p>La precisión y los detalles suben la calidad y las estrellas.</p>
            </div>
          </div>
          <div className="help-step">
            <span className="help-number">4</span>
            <div>
              <strong>Cierra la tienda</strong>
              <p>Revisa ganancias, compra ingredientes nuevos y duerme.</p>
            </div>
          </div>
        </div>

        <footer className="modal-footer">
          <button className="cn-button" onClick={onClose}>
            Entendido
          </button>
        </footer>
      </section>
    </div>
  )
}
