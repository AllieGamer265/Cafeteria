export type SfxKind =
  | 'click'
  | 'pop'
  | 'mix'
  | 'oven'
  | 'success'
  | 'error'
  | 'coin'
  | 'serve'

let ctx: AudioContext | null = null
let sfxEnabled = true
let musicEnabled = true
let musicTimer: number | null = null
let musicStep = 0

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AudioCtor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AudioCtor) return null
    ctx = new AudioCtor()
  }
  if (ctx.state === 'suspended') {
    void ctx.resume()
  }
  return ctx
}

function tone(
  frequency: number,
  duration: number,
  type: OscillatorType = 'sine',
  volume = 0.04,
  when = 0,
) {
  const audio = getCtx()
  if (!audio) return
  const osc = audio.createOscillator()
  const gain = audio.createGain()
  const start = audio.currentTime + when
  osc.type = type
  osc.frequency.setValueAtTime(frequency, start)
  gain.gain.setValueAtTime(0.0001, start)
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration)
  osc.connect(gain)
  gain.connect(audio.destination)
  osc.start(start)
  osc.stop(start + duration + 0.02)
}

export function playSfx(kind: SfxKind) {
  if (!sfxEnabled) return
  switch (kind) {
    case 'click':
      tone(420, 0.05, 'square', 0.02)
      break
    case 'pop':
      tone(660, 0.08, 'sine', 0.035)
      break
    case 'mix':
      tone(300, 0.06, 'triangle', 0.03)
      break
    case 'oven':
      tone(520, 0.08, 'triangle', 0.03)
      break
    case 'success':
      tone(523.25, 0.1, 'triangle', 0.035)
      tone(659.25, 0.1, 'triangle', 0.035, 0.1)
      tone(783.99, 0.16, 'triangle', 0.035, 0.2)
      break
    case 'error':
      tone(180, 0.12, 'square', 0.025)
      break
    case 'coin':
      tone(880, 0.08, 'sine', 0.03)
      tone(1318.51, 0.12, 'sine', 0.03, 0.08)
      break
    case 'serve':
      tone(783.99, 0.1, 'triangle', 0.035)
      tone(1046.5, 0.18, 'triangle', 0.035, 0.1)
      break
    default:
      break
  }
}

const melody = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 698.46]

function musicTick() {
  if (!musicEnabled) return
  const note = melody[musicStep % melody.length]
  tone(note, 0.35, 'triangle', 0.011)
  if (musicStep % 4 === 0) {
    tone(note / 2, 0.55, 'sine', 0.008)
  }
  musicStep += 1
}

export function startMusic() {
  if (!musicEnabled || musicTimer !== null) return
  const audio = getCtx()
  if (!audio) return
  musicStep = 0
  musicTick()
  musicTimer = window.setInterval(musicTick, 620)
}

export function stopMusic() {
  if (musicTimer !== null) {
    window.clearInterval(musicTimer)
    musicTimer = null
  }
}

export function setAudioSettings(settings: { music: boolean; sfx: boolean }) {
  sfxEnabled = settings.sfx
  musicEnabled = settings.music
  if (!musicEnabled) {
    stopMusic()
  }
}
