import { Icon } from './Icon'

interface ToastProps {
  message: string
}

export function Toast({ message }: ToastProps) {
  return (
    <div className="toast" role="status" aria-live="polite">
      <Icon name="sparkle" size={14} />
      <span>{message}</span>
    </div>
  )
}
