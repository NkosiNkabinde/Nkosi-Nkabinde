import { useMemo } from 'react'
import './FloatingLogos.css'

// Point each entry at a file in /public/logos/. Add or remove freely —
// the component just needs at least one entry to render.
const DEFAULT_LOGOS = [
  { src: '/logos/1.png'},
  { src: '/logos/2.png'},
  { src: '/logos/3.png' },
  { src: '/logos/4.png' },
  { src: '/logos/5.png' },
  { src: '/logos/6.png' },
  { src: '/logos/7.png' },
  { src: '/logos/8.png' },

  { src: '/logos/9.png' },
  { src: '/logos/10.png' },
  { src: '/logos/11.png' },
  { src: '/logos/12.png' },
  { src: '/logos/13.png' },
  { src: '/logos/14.png' },
  { src: '/logos/15.jpg' },
  { src: '/logos/16.png' },
  { src: '/logos/17.png' },
  { src: '/logos/18.png' },
  { src: '/logos/19.png' },
  { src: '/logos/20.png' },
  { src: '/logos/21.png' },
  { src: '/logos/22.png' },
  { src: '/logos/23.png' },
  { src: '/logos/24.jpg' },
  { src: '/logos/25.jpg' },
  { src: '/logos/26.jpg' },
  { src: '/logos/27.jpg' },
  { src: '/logos/28.png' },
  { src: '/logos/29.jpg' },
  { src: '/logos/30.jpg' },
  { src: '/logos/31.jpg' },
  { src: '/logos/32.png' },
  { src: '/logos/33.png' },
  { src: '/logos/34.png' },
  { src: '/logos/35.jpg' },
  { src: '/logos/36.png' },
  { src: '/logos/37.jpg' },
  { src: '/logos/38.png' },
  { src: '/logos/39.png' },
  { src: '/logos/40.png' },
  { src: '/logos/41.jpg' },
]

interface Logo {
  src: string
  alt: string
}

interface Particle {
  id: number
  logo: Logo
  size: number         // px
  duration: number     // seconds
  delay: number         // seconds (negative = already mid-flight on load)
  opacity: number
  startX: number
  startY: number
  midX: string
  midY: string
  endX: number
  endY: number
  spin: number
}

function randomViewportPosition() {
  const direction = Math.floor(Math.random() * 4)
  const crossStart = Math.random() * 100
  const crossEnd = Math.max(-10, Math.min(110, crossStart + (Math.random() - 0.5) * 80))

  if (direction === 0) return { startX: -18, startY: crossStart, endX: 118, endY: crossEnd }
  if (direction === 1) return { startX: 118, startY: crossStart, endX: -18, endY: crossEnd }
  if (direction === 2) return { startX: crossStart, startY: -18, endX: crossEnd, endY: 118 }
  return { startX: crossStart, startY: 118, endX: crossEnd, endY: -18 }
}

function makeParticles(logos: Logo[], count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => {
    const path = randomViewportPosition()
    const midX = `${(path.startX + path.endX) / 2 + (Math.random() - 0.5) * 18}vw`
    const midY = `${(path.startY + path.endY) / 2 + (Math.random() - 0.5) * 18}vh`

    return {
      id,
      logo: logos[Math.floor(Math.random() * logos.length)],
      size: 76 + Math.random() * 54,
      duration: 20 + Math.random() * 24,
      delay: -Math.random() * 44,
      opacity: 0.38 + Math.random() * 0.20,
      ...path,
      midX,
      midY,
      spin: (Math.random() - 0.5) * 100,
    }
  })
}

interface FloatingLogosProps {
  logos?: Logo[]
  count?: number
}

export default function FloatingLogos({ logos = DEFAULT_LOGOS, count = 16 }: FloatingLogosProps) {
  // stable across re-renders, regenerated only if inputs change
  const particles = useMemo(() => makeParticles(logos, count), [logos, count])

  return (
    <div className="floating-logos" aria-hidden="true">
      {particles.map(p => (
        <img
          key={p.id}
          src={p.logo.src}
          alt=""
          className="floating-logos__item"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ['--peak-opacity' as string]: p.opacity,
            ['--start-x' as string]: `${p.startX}vw`,
            ['--start-y' as string]: `${p.startY}vh`,
            ['--mid-x' as string]: p.midX,
            ['--mid-y' as string]: p.midY,
            ['--end-x' as string]: `${p.endX}vw`,
            ['--end-y' as string]: `${p.endY}vh`,
            ['--spin' as string]: `${p.spin}deg`,
          }}
        />
      ))}
    </div>
  )
}
