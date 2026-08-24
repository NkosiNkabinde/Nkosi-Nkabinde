import { useEffect, useRef, useState } from 'react'
import './TalkingPhoto.css'

interface MouthRegion {
  /** all values are percentages of the image's width/height */
  top: number
  left: number
  width: number
  height: number
}

interface TalkingPhotoProps {
  src: string
  alt: string
  /** what your photo will say out loud */
  script: string
  /** tweak these numbers until the overlay sits on the real mouth */
  mouth?: MouthRegion
  /** show on-screen sliders so you can dial in the mouth position live, then bake the numbers in and remove this prop */
  calibrate?: boolean
}

const DEFAULT_MOUTH: MouthRegion = { top: 52, left: 42, width: 16, height: 4 }

export default function TalkingPhoto({
  src,
  alt,
  script,
  mouth: initialMouth = DEFAULT_MOUTH,
  calibrate = false,
}: TalkingPhotoProps) {
  const [speaking, setSpeaking] = useState(false)
  const [mouthOpen, setMouthOpen] = useState(0) // 0 = closed, 1 = fully open
  const [mouth, setMouth] = useState(initialMouth)
  const [supported, setSupported] = useState(true)
  const flapTimer = useRef<number | null>(null)
  const hasSpeechBoundaries = useRef(false)

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window)
    return () => {
      if (flapTimer.current) window.clearInterval(flapTimer.current)
      window.speechSynthesis?.cancel()
    }
  }, [])

  const startFlapping = () => {
    // Fallback for browsers that do not emit speech boundary events.
    flapTimer.current = window.setInterval(() => {
      if (!hasSpeechBoundaries.current) {
        setMouthOpen(open => open > 0.55 ? 0.32 : 0.78)
      }
    }, 140)
  }

  const stopFlapping = () => {
    if (flapTimer.current) {
      window.clearInterval(flapTimer.current)
      flapTimer.current = null
    }
    setMouthOpen(0)
  }

  const speak = () => {
    if (!supported || speaking) return
    const utterance = new SpeechSynthesisUtterance(script)
    utterance.rate = 1
    utterance.pitch = 1
    hasSpeechBoundaries.current = false

    // SpeechSynthesis does not expose phonemes, but word boundaries are a much
    // closer visual match than a fully random loop. Vowel-heavy words open wider.
    utterance.onboundary = event => {
      hasSpeechBoundaries.current = true
      const nextWord = script.slice(event.charIndex).split(/\s+/)[0] ?? ''
      const vowelCount = (nextWord.match(/[aeiou]/gi) ?? []).length
      setMouthOpen(vowelCount >= 3 ? 0.92 : vowelCount >= 1 ? 0.68 : 0.38)
    }

    utterance.onstart = () => {
      setSpeaking(true)
      startFlapping()
    }
    utterance.onend = () => {
      setSpeaking(false)
      stopFlapping()
    }
    utterance.onerror = () => {
      setSpeaking(false)
      stopFlapping()
    }

    window.speechSynthesis.cancel() // clear any queued utterances
    window.speechSynthesis.speak(utterance)
  }

  const stop = () => {
    window.speechSynthesis.cancel()
    setSpeaking(false)
    stopFlapping()
  }

  return (
    <div className="talking-photo">
      <div className={`talking-photo__frame ${speaking ? 'is-speaking' : ''}`}>
        <img src={src} alt={alt} className="talking-photo__img" />
        <div
          className="talking-photo__mouth"
          style={{
            top: `${mouth.top}%`,
            left: `${mouth.left}%`,
            width: `${mouth.width}%`,
            height: `${mouth.height}%`,
            transform: `scaleY(${0.2 + mouthOpen * 1.05})`,
            opacity: speaking ? 0.85 : 0,
          }}
        />

        <button
          className="talking-photo__playbtn"
          onClick={speaking ? stop : speak}
          disabled={!supported}
          aria-label={speaking ? 'Pause introduction' : 'Play introduction'}
          title={!supported ? 'Speech not supported in this browser' : speaking ? 'Pause' : 'Play'}
        >
          {speaking ? (
            <span className="talking-photo__icon talking-photo__icon--pause">
              <span />
              <span />
            </span>
          ) : (
            <span className="talking-photo__icon talking-photo__icon--play" />
          )}
        </button>
      </div>

      {calibrate && (
        <div className="talking-photo__calibrate">
          <label>
            Top {mouth.top.toFixed(0)}%
            <input type="range" min={0} max={100} value={mouth.top}
              onChange={e => setMouth(m => ({ ...m, top: +e.target.value }))} />
          </label>
          <label>
            Left {mouth.left.toFixed(0)}%
            <input type="range" min={0} max={100} value={mouth.left}
              onChange={e => setMouth(m => ({ ...m, left: +e.target.value }))} />
          </label>
          <label>
            Width {mouth.width.toFixed(0)}%
            <input type="range" min={1} max={50} value={mouth.width}
              onChange={e => setMouth(m => ({ ...m, width: +e.target.value }))} />
          </label>
          <label>
            Height {mouth.height.toFixed(0)}%
            <input type="range" min={1} max={30} value={mouth.height}
              onChange={e => setMouth(m => ({ ...m, height: +e.target.value }))} />
          </label>
          <p className="talking-photo__calibrate-hint">
            Copy these numbers into the <code>mouth</code> prop, then remove <code>calibrate</code>.
          </p>
        </div>
      )}
    </div>
  )
}
