import { useState } from 'react'
import { playSfx } from '../services/audio'
import type { Settings } from '../types'
import { Icon } from './Icon'

interface SettingsModalProps {
  settings: Settings
  onToggle: (key: keyof Settings) => void
  onClose: () => void
  onReset: () => void
}

const rows: { key: keyof Settings; label: string; description: string; icon: 'music' | 'sound' | 'motion' | 'text' }[] = [
  { key: 'music', label: 'Música', description: 'Melodía suave de fondo.', icon: 'music' },
  { key: 'sfx', label: 'Efectos de sonido', description: 'Sonidos de botones y cocina.', icon: 'sound' },
  { key: 'reducedMotion', label: 'Reducir movimiento', description: 'Menos partículas y animaciones.', icon: 'motion' },
  { key: 'largeText', label: 'Texto grande', description: 'Aumenta el tamaño de la interfaz.', icon: 'text' },
]

export function SettingsModal({ settings, onToggle, onClose, onReset }: SettingsModalProps) {
  const [confirmReset, setConfirmReset] = useState(false)

  return (
    <div className="overlay">
      <section className="modal settings-modal" aria-label="Ajustes">
        <header className="modal-header">
          <div>
            <span className="ticket-kicker">PREFERENCIAS</span>
            <h2>Ajustes</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Cerrar ajustes">
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className="settings-list">
          {rows.map((row) => (
            <button
              className="settings-row"
              key={row.key}
              onClick={() => {
                playSfx('click')
                onToggle(row.key)
              }}
              role="switch"
              aria-checked={settings[row.key]}
            >
              <span className="settings-row-icon">
                <Icon name={row.icon} size={20} />
              </span>
              <span className="settings-row-text">
                <strong>{row.label}</strong>
                <small>{row.description}</small>
              </span>
              <span className={`toggle ${settings[row.key] ? 'is-on' : ''}`} aria-hidden="true" />
            </button>
          ))}
        </div>

        <p className="settings-note">Los cambios se guardan automáticamente en este dispositivo.</p>

        <footer className="modal-footer">
          <button
            className="cn-button cn-button--danger cn-button--sm"
            onClick={() => {
              playSfx('click')
              if (confirmReset) {
                onReset()
              } else {
                setConfirmReset(true)
              }
            }}
          >
            {confirmReset ? '¿Seguro? Borrar partida' : 'Borrar partida'}
          </button>
          <button className="cn-button" onClick={onClose}>
            Cerrar
          </button>
        </footer>
      </section>
    </div>
  )
}
