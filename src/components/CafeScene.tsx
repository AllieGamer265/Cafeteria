import type { CSSProperties } from 'react'
import type { Character as CharacterType } from '../types'
import { Character } from './Character'

interface CafeSceneProps {
  character: CharacterType
  bubble?: string
  variant?: 'default' | 'title'
}

const petals = [
  { left: 6, delay: 0, duration: 9, size: 7 },
  { left: 14, delay: 2.5, duration: 11, size: 5 },
  { left: 22, delay: 1.2, duration: 10, size: 8 },
  { left: 31, delay: 4.1, duration: 12, size: 6 },
  { left: 39, delay: 0.8, duration: 9.5, size: 5 },
  { left: 47, delay: 3.4, duration: 11.5, size: 7 },
  { left: 55, delay: 1.8, duration: 10.5, size: 6 },
  { left: 63, delay: 5.2, duration: 12.5, size: 8 },
  { left: 71, delay: 0.4, duration: 9.2, size: 5 },
  { left: 79, delay: 2.9, duration: 11.8, size: 7 },
  { left: 87, delay: 4.7, duration: 10.2, size: 6 },
  { left: 94, delay: 1.5, duration: 12.2, size: 5 },
]

export function CafeScene({ character, bubble, variant = 'default' }: CafeSceneProps) {
  return (
    <div className={`cafe-scene ${variant === 'title' ? 'cafe-scene--title' : ''}`}>
      <div className="cafe-wall" />

      <div className="cafe-window">
        <div className="window-sun" />
        <div className="window-branch">
          <svg viewBox="0 0 100 100" width="100%" height="100%" shapeRendering="crispEdges">
            <rect x="8" y="72" width="72" height="6" fill="#6B4F3A" />
            <rect x="42" y="40" width="6" height="36" fill="#6B4F3A" />
            <rect x="30" y="28" width="20" height="6" fill="#6B4F3A" />
            <rect x="22" y="20" width="8" height="8" fill="#FFB7C5" />
            <rect x="50" y="16" width="8" height="8" fill="#FFB7C5" />
            <rect x="64" y="32" width="8" height="8" fill="#FFB7C5" />
            <rect x="28" y="50" width="8" height="8" fill="#FFB7C5" />
            <rect x="54" y="56" width="8" height="8" fill="#FFB7C5" />
            <rect x="72" y="54" width="6" height="6" fill="#FFD1DC" />
            <rect x="16" y="44" width="6" height="6" fill="#FFD1DC" />
          </svg>
        </div>
      </div>

      <div className="cafe-lamp" />
      <div className="lamp-glow" />

      <div className="cafe-shelf shelf-one">
        <span className="shelf-cup cup-rose" />
        <span className="shelf-cup cup-matcha" />
        <span className="shelf-cup cup-cream" />
      </div>
      <div className="cafe-shelf shelf-two">
        <span className="shelf-jar jar-gold" />
        <span className="shelf-jar jar-rose" />
      </div>

      <div className="cafe-counter">
        <div className="counter-top" />
        <div className="counter-front" />
      </div>

      <div className="cafe-character">
        <Character character={character} size={128} />
        {bubble ? <div className="speech-bubble">{bubble}</div> : null}
      </div>

      <div className="cafe-plant">
        <span className="plant-leaf leaf-one" />
        <span className="plant-leaf leaf-two" />
        <span className="plant-leaf leaf-three" />
        <span className="plant-pot" />
      </div>

      <div className="cafe-cup">
        <span className="cup-steam steam-one" />
        <span className="cup-steam steam-two" />
        <span className="cup-handle" />
      </div>

      <div className="petals" aria-hidden="true">
        {petals.map((petal, index) => {
          const style = {
            '--left': `${petal.left}%`,
            '--delay': `${petal.delay}s`,
            '--duration': `${petal.duration}s`,
            '--size': `${petal.size}px`,
          } as CSSProperties
          return <span key={index} className="petal" style={style} />
        })}
      </div>
    </div>
  )
}
