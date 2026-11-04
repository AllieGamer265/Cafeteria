import { Icon } from './Icon'

interface ConfirmDialogProps {
  title: string
  message: string
  confirmLabel: string
  cancelLabel: string
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmDialog({
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <div className="overlay">
      <section className="modal confirm-modal" aria-label={title}>
        <header className="modal-header">
          <div>
            <span className="ticket-kicker">UN MOMENTO</span>
            <h2>{title}</h2>
          </div>
          <button className="icon-button" onClick={onCancel} aria-label="Cerrar">
            <Icon name="close" size={20} />
          </button>
        </header>
        <p className="confirm-message">{message}</p>
        <footer className="modal-footer">
          <button className="cn-button cn-button--secondary" onClick={onCancel}>
            {cancelLabel}
          </button>
          <button className="cn-button" onClick={onConfirm}>
            {confirmLabel}
          </button>
        </footer>
      </section>
    </div>
  )
}
