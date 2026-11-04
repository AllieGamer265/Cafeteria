import { Children, type ReactNode } from 'react'

interface KitchenCameraProps {
  index: number
  instant: boolean
  children: ReactNode
}

export function KitchenCamera({ index, instant, children }: KitchenCameraProps) {
  const zones = Children.toArray(children)

  return (
    <div className={`kitchen-camera ${instant ? 'is-instant' : ''}`}>
      <div
        className="kitchen-camera__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {zones.map((zone, zoneIndex) => (
          <section
            key={zoneIndex}
            className={`kitchen-camera__zone ${zoneIndex === index ? 'is-active' : ''}`}
            aria-hidden={zoneIndex !== index}
          >
            {zone}
          </section>
        ))}
      </div>
    </div>
  )
}
