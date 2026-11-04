import type { Character as CharacterType, Mood } from '../types'

interface CharacterProps {
  character: CharacterType
  size?: number
  mood?: Mood
  className?: string
}

export function Character({ character, size = 96, mood = 'happy', className = '' }: CharacterProps) {
  const { body, accent, blush, outline } = character.colors
  const isPanda = character.species === 'panda'
  const isBird = character.species === 'bird'
  const isFrog = character.species === 'frog'
  const eyeY = mood === 'sad' ? 17 : 15
  const eyeHeight = mood === 'sad' ? 2 : 3

  const ears = (() => {
    switch (character.species) {
      case 'cat':
      case 'fox':
        return (
          <>
            <polygon points="7,10 9,2 14,8" fill={body} stroke={outline} strokeWidth="1" />
            <polygon points="18,8 23,2 25,10" fill={body} stroke={outline} strokeWidth="1" />
            <polygon points="9,8 10,4 12,8" fill={blush} />
            <polygon points="20,8 22,4 23,8" fill={blush} />
          </>
        )
      case 'dog':
        return (
          <>
            <rect x="3" y="10" width="4" height="10" fill={body} stroke={outline} strokeWidth="1" />
            <rect x="25" y="10" width="4" height="10" fill={body} stroke={outline} strokeWidth="1" />
          </>
        )
      case 'bunny':
        return (
          <>
            <rect x="9" y="0" width="4" height="10" fill={body} stroke={outline} strokeWidth="1" />
            <rect x="19" y="0" width="4" height="10" fill={body} stroke={outline} strokeWidth="1" />
            <rect x="10" y="2" width="2" height="6" fill={blush} />
            <rect x="20" y="2" width="2" height="6" fill={blush} />
          </>
        )
      case 'bear':
      case 'panda':
        return (
          <>
            <rect x="5" y="4" width="7" height="7" fill={isPanda ? accent : body} stroke={outline} strokeWidth="1" />
            <rect x="20" y="4" width="7" height="7" fill={isPanda ? accent : body} stroke={outline} strokeWidth="1" />
            <rect x="7" y="6" width="3" height="3" fill={isPanda ? blush : accent} />
            <rect x="22" y="6" width="3" height="3" fill={isPanda ? blush : accent} />
          </>
        )
      case 'frog':
        return (
          <>
            <rect x="8" y="4" width="6" height="6" fill={body} stroke={outline} strokeWidth="1" />
            <rect x="18" y="4" width="6" height="6" fill={body} stroke={outline} strokeWidth="1" />
            <rect x="10" y="6" width="2" height="2" fill={outline} />
            <rect x="20" y="6" width="2" height="2" fill={outline} />
          </>
        )
      case 'bird':
        return (
          <>
            <rect x="14" y="4" width="4" height="4" fill={accent} stroke={outline} strokeWidth="1" />
            <rect x="15" y="5" width="2" height="2" fill={blush} />
          </>
        )
      case 'hamster':
        return (
          <>
            <rect x="6" y="6" width="5" height="5" fill={body} stroke={outline} strokeWidth="1" />
            <rect x="21" y="6" width="5" height="5" fill={body} stroke={outline} strokeWidth="1" />
            <rect x="8" y="8" width="2" height="2" fill={blush} />
            <rect x="22" y="8" width="2" height="2" fill={blush} />
          </>
        )
      case 'capybara':
        return (
          <>
            <rect x="7" y="7" width="4" height="4" fill={body} stroke={outline} strokeWidth="1" />
            <rect x="21" y="7" width="4" height="4" fill={body} stroke={outline} strokeWidth="1" />
          </>
        )
      default:
        return null
    }
  })()

  const mouth = (() => {
    if (isBird) {
      return (
        <polygon points="14,19 18,19 16,22" fill="#F2C14E" stroke={outline} strokeWidth="1" />
      )
    }
    if (mood === 'sad') {
      return (
        <>
          <rect x="14" y="21" width="4" height="1" fill={outline} />
          <rect x="13" y="20" width="1" height="1" fill={outline} />
          <rect x="18" y="20" width="1" height="1" fill={outline} />
        </>
      )
    }
    if (mood === 'waiting') {
      return <rect x="15" y="20" width="2" height="1" fill={outline} />
    }
    return (
      <>
        <rect x="14" y="20" width="4" height="1" fill={outline} />
        <rect x="13" y="19" width="1" height="1" fill={outline} />
        <rect x="18" y="19" width="1" height="1" fill={outline} />
      </>
    )
  })()

  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={`character-svg ${className}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={`${character.name}, ${character.species}`}
    >
      <rect x="7" y="24" width="18" height="7" fill={accent} stroke={outline} strokeWidth="1" />
      {ears}
      <rect x="6" y="8" width="20" height="17" fill={body} stroke={outline} strokeWidth="1" />
      {isPanda ? (
        <>
          <rect x="9" y="14" width="5" height="5" fill={accent} />
          <rect x="18" y="14" width="5" height="5" fill={accent} />
        </>
      ) : null}
      <rect x="11" y={eyeY} width="3" height={eyeHeight} fill={outline} />
      <rect x="18" y={eyeY} width="3" height={eyeHeight} fill={outline} />
      <rect x="12" y={eyeY} width="1" height="1" fill="#FFFFFF" />
      <rect x="19" y={eyeY} width="1" height="1" fill="#FFFFFF" />
      <rect x="7" y="18" width="3" height="2" fill={blush} opacity="0.85" />
      <rect x="22" y="18" width="3" height="2" fill={blush} opacity="0.85" />
      {character.species === 'cat' || character.species === 'fox' || character.species === 'hamster' ? (
        <>
          <rect x="2" y="17" width="5" height="1" fill={outline} opacity="0.45" />
          <rect x="2" y="20" width="5" height="1" fill={outline} opacity="0.45" />
          <rect x="25" y="17" width="5" height="1" fill={outline} opacity="0.45" />
          <rect x="25" y="20" width="5" height="1" fill={outline} opacity="0.45" />
        </>
      ) : null}
      {mood === 'sad' ? <rect x="19" y="19" width="1" height="2" fill="#8FB8DE" /> : null}
      {mouth}
      <rect x="8" y="24" width="16" height="3" fill={accent} stroke={outline} strokeWidth="1" />
      {isFrog ? (
        <>
          <rect x="7" y="20" width="2" height="2" fill={accent} opacity="0.8" />
          <rect x="23" y="20" width="2" height="2" fill={accent} opacity="0.8" />
        </>
      ) : null}
    </svg>
  )
}
