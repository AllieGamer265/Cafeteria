import type { ReactNode } from 'react'

export type IconName =
  | 'coin'
  | 'star'
  | 'heart'
  | 'heartOutline'
  | 'book'
  | 'bowl'
  | 'chat'
  | 'moon'
  | 'sun'
  | 'gear'
  | 'pause'
  | 'close'
  | 'check'
  | 'lock'
  | 'arrow'
  | 'sound'
  | 'soundOff'
  | 'music'
  | 'motion'
  | 'text'
  | 'play'
  | 'home'
  | 'cart'
  | 'shop'
  | 'sparkle'
  | 'plus'
  | 'minus'
  | 'paw'
  | 'plate'
  | 'coffee'
  | 'donut'
  | 'bread'
  | 'cookie'
  | 'hotchoc'
  | 'matcha'
  | 'tea'
  | 'muffin'
  | 'nut'
  | 'berry'
  | 'leaf'
  | 'honey'
  | 'sakura'
  | 'cinnamon'
  | 'whisk'
  | 'oven'
  | 'plant'
  | 'lamp'
  | 'frame'

interface IconProps {
  name: IconName
  size?: number
  className?: string
  title?: string
}

const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
} as const

const icons: Record<IconName, ReactNode> = {
  coin: (
    <>
      <circle cx="12" cy="12" r="8" {...line} />
      <path d="M12 8l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" fill="currentColor" />
    </>
  ),
  star: (
    <path
      d="M12 2l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.8 6 20.4l1.3-6.7-5-4.7 6.8-.8z"
      fill="currentColor"
    />
  ),
  heart: (
    <path
      d="M12 21s-7-4.4-9.2-8.2C1.2 9.7 2.8 6 6.4 6c2 0 3.4 1.1 4.3 2.4l1.3 1.8 1.3-1.8C14.2 7.1 15.6 6 17.6 6c3.6 0 5.2 3.7 3.6 6.8C19 16.6 12 21 12 21z"
      fill="currentColor"
    />
  ),
  heartOutline: (
    <path
      d="M12 21s-7-4.4-9.2-8.2C1.2 9.7 2.8 6 6.4 6c2 0 3.4 1.1 4.3 2.4l1.3 1.8 1.3-1.8C14.2 7.1 15.6 6 17.6 6c3.6 0 5.2 3.7 3.6 6.8C19 16.6 12 21 12 21z"
      {...line}
    />
  ),
  book: (
    <>
      <path d="M4 4h7a2 2 0 0 1 2 2v14a3 3 0 0 0-3-3H4z" {...line} />
      <path d="M20 4h-7a2 2 0 0 0-2 2v14a3 3 0 0 1 3-3h6z" {...line} />
    </>
  ),
  bowl: (
    <>
      <path d="M4 11h16a8 8 0 0 1-16 0z" {...line} />
      <path d="M8 11V8a4 4 0 0 1 8 0v3M9 4c0 1 1 1 1 2M14 3c0 1 1 1 1 2" {...line} />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4z" {...line} />
      <path d="M8 9h8M8 12h5" {...line} />
    </>
  ),
  moon: (
    <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5z" fill="currentColor" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" {...line} />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" {...line} />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="4" {...line} />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" {...line} />
    </>
  ),
  pause: (
    <>
      <rect x="6" y="5" width="4" height="14" fill="currentColor" />
      <rect x="14" y="5" width="4" height="14" fill="currentColor" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6L6 18" {...line} />,
  check: <path d="M4 12l5 5L20 6" {...line} />,
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" {...line} />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" {...line} />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" {...line} />,
  sound: (
    <>
      <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
      <path d="M16 8a6 6 0 0 1 0 8M18.5 5.5a10 10 0 0 1 0 13" {...line} />
    </>
  ),
  soundOff: (
    <>
      <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
      <path d="M16 9l5 6M21 9l-5 6" {...line} />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l10-2v13" {...line} />
      <circle cx="6" cy="18" r="3" {...line} />
      <circle cx="16" cy="16" r="3" {...line} />
    </>
  ),
  motion: <path d="M4 12h16M7 7l-3 5 3 5M17 7l3 5-3 5" {...line} />,
  text: <path d="M4 6h16M4 12h10M4 18h7" {...line} />,
  play: <path d="M8 5l11 7-11 7z" fill="currentColor" />,
  home: <path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z" {...line} />,
  cart: (
    <>
      <path d="M3 4h2l2 12h12l2-8H6" {...line} />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    </>
  ),
  shop: (
    <>
      <path d="M4 9l2-5h12l2 5v11H4z" {...line} />
      <path d="M4 9h16M9 20v-6h6v6" {...line} />
      <path d="M8 4l-1 5M12 4v5M16 4l1 5" {...line} />
    </>
  ),
  sparkle: (
    <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z" fill="currentColor" />
  ),
  plus: <path d="M12 5v14M5 12h14" {...line} />,
  minus: <path d="M5 12h14" {...line} />,
  paw: (
    <>
      <circle cx="12" cy="15" r="4" fill="currentColor" />
      <circle cx="6" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="6" r="2" fill="currentColor" />
      <circle cx="14" cy="6" r="2" fill="currentColor" />
      <circle cx="18" cy="10" r="2" fill="currentColor" />
    </>
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="8" {...line} />
      <circle cx="12" cy="12" r="5" {...line} />
    </>
  ),
  coffee: (
    <>
      <path d="M5 10h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z" {...line} />
      <path d="M17 11h2a3 3 0 0 1 0 6h-2M8 6c0-1 1-1 1-2M12 6c0-1 1-1 1-2" {...line} />
    </>
  ),
  donut: (
    <>
      <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.28" />
      <circle cx="12" cy="12" r="8" {...line} />
      <circle cx="12" cy="12" r="3" {...line} />
      <path d="M8 7l1 1M15 6l1 1M18 12l1 1M6 14l1 1" {...line} />
    </>
  ),
  bread: (
    <>
      <path d="M5 12a7 7 0 0 1 14 0v7H5z" {...line} />
      <path d="M8 11c0-1 1-2 2-2M12 10c0-1 1-2 2-2" {...line} />
    </>
  ),
  cookie: (
    <>
      <circle cx="12" cy="12" r="8" {...line} />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="14" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="14" r="1" fill="currentColor" />
      <circle cx="10" cy="15" r="1" fill="currentColor" />
    </>
  ),
  hotchoc: (
    <>
      <path d="M5 10h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z" {...line} />
      <path d="M17 11h2a3 3 0 0 1 0 6h-2M8 6c0-1 1-1 1-2M12 6c0-1 1-1 1-2" {...line} />
      <path d="M8 14h6" {...line} />
    </>
  ),
  matcha: (
    <>
      <path d="M5 10h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z" {...line} />
      <path d="M17 11h2a3 3 0 0 1 0 6h-2M9 8c2-2 5-2 7 0" {...line} />
    </>
  ),
  tea: (
    <>
      <path d="M5 10h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z" {...line} />
      <path d="M17 11h2a3 3 0 0 1 0 6h-2M10 5l4 4" {...line} />
    </>
  ),
  muffin: (
    <>
      <path d="M6 12h12l-2 8H8z" {...line} />
      <path d="M6 12a6 6 0 0 1 12 0" {...line} />
      <path d="M9 16h6" {...line} />
    </>
  ),
  nut: (
    <>
      <path d="M7 9a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z" {...line} />
      <path d="M9 9c1-1 2-1 3 0s2 1 3 0M8 13h8" {...line} />
    </>
  ),
  berry: (
    <>
      <path d="M12 21c-4-2-6-5-6-9a6 6 0 0 1 12 0c0 4-2 7-6 9z" {...line} />
      <path d="M12 6V3M10 4l2-1 2 1" {...line} />
      <circle cx="10" cy="12" r="1" fill="currentColor" />
      <circle cx="14" cy="14" r="1" fill="currentColor" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 9 12 4 20 4c0 8-5 15-15 15z" {...line} />
      <path d="M5 19c4-4 7-7 12-10" {...line} />
    </>
  ),
  honey: (
    <>
      <path d="M7 8h10v11H7z" {...line} />
      <path d="M6 8h12M9 5h6v3M10 12h4" {...line} />
    </>
  ),
  sakura: (
    <>
      <circle cx="12" cy="7" r="3" {...line} />
      <circle cx="17" cy="11" r="3" {...line} />
      <circle cx="15" cy="17" r="3" {...line} />
      <circle cx="9" cy="17" r="3" {...line} />
      <circle cx="7" cy="11" r="3" {...line} />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  cinnamon: (
    <>
      <path d="M8 5h5v14H8zM13 8h5v11h-5z" {...line} />
      <path d="M9 8h3M9 12h3M9 16h3" {...line} />
    </>
  ),
  whisk: (
    <>
      <path d="M12 21V11" {...line} />
      <path d="M8 11c0-4 8-4 8 0M9 8c0-3 6-3 6 0M10 5c0-2 4-2 4 0" {...line} />
    </>
  ),
  oven: (
    <>
      <rect x="4" y="4" width="16" height="16" {...line} />
      <rect x="7" y="10" width="10" height="7" {...line} />
      <path d="M7 7h3M15 7h2" {...line} />
      <path d="M9 13h6" {...line} />
    </>
  ),
  plant: (
    <>
      <path d="M8 14h8l-1 7H9z" {...line} />
      <path d="M12 14V8M12 10c-3 0-5-2-5-5 3 0 5 2 5 5zM12 10c3 0 5-2 5-5-3 0-5 2-5 5z" {...line} />
    </>
  ),
  lamp: (
    <>
      <path d="M8 4h8l2 7H6z" {...line} />
      <path d="M12 11v9M9 20h6" {...line} />
    </>
  ),
  frame: (
    <>
      <rect x="4" y="5" width="16" height="14" {...line} />
      <path d="M4 16l5-5 3 3 3-3 5 5" {...line} />
    </>
  ),
}

export function Icon({ name, size = 20, className, title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {icons[name]}
    </svg>
  )
}
