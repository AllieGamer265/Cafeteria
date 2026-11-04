import { characters } from '../data/characters'
import { playSfx } from '../services/audio'
import { CafeScene } from './CafeScene'
import { Icon } from './Icon'

interface TitleScreenProps {
  hasSave: boolean
  onStart: () => void
  onContinue: () => void
  onSettings: () => void
  onHelp: () => void
}

export function TitleScreen({ hasSave, onStart, onContinue, onSettings, onHelp }: TitleScreenProps) {
  const mochi = characters[0]

  const withClick = (action: () => void) => () => {
    playSfx('click')
    action()
  }

  return (
    <div className="title-screen">
      <div className="title-bg">
        <CafeScene character={mochi} variant="title" />
      </div>

      <div className="title-overlay">
        <div className="title-logo">
          <div className="title-badge">
            <Icon name="coffee" size={28} />
            <span>Buen café, gran café</span>
          </div>
          <h1>CAFÉ NIDO</h1>
          <p>Un pequeño refugio para animalitos con antojo.</p>
        </div>

        <div className="title-menu">
          {hasSave ? (
            <button className="cn-button cn-button--lg" onClick={withClick(onContinue)}>
              <Icon name="play" size={18} /> Continuar
            </button>
          ) : null}
          <button
            className={`cn-button cn-button--lg ${hasSave ? 'cn-button--secondary' : ''}`}
            onClick={withClick(onStart)}
          >
            <Icon name="sparkle" size={18} /> Nueva partida
          </button>
          <button className="cn-button cn-button--secondary" onClick={withClick(onHelp)}>
            <Icon name="book" size={18} /> Cómo jugar
          </button>
          <button className="cn-button cn-button--secondary" onClick={withClick(onSettings)}>
            <Icon name="gear" size={18} /> Ajustes
          </button>
        </div>

        <div className="title-footer">v0.1 · prototipo de interfaz</div>
      </div>
    </div>
  )
}
