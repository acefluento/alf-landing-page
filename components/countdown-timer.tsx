'use client'

import { useState, useEffect } from 'react'

const TARGET = new Date('2026-05-29T10:00:00-04:00').getTime()

function calcRemaining() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="display text-2xl sm:text-4xl tabular-nums countdown-glow">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mono text-[9px] text-white/50">{label}</span>
    </div>
  )
}

export function CountdownTimer({ compact = false }: { compact?: boolean }) {
  const [mounted, setMounted] = useState(false)
  const [remaining, setRemaining] = useState(calcRemaining)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setRemaining(calcRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) {
    return <div className={compact ? 'h-10' : 'h-20'} />
  }

  if (!remaining) {
    return (
      <p className={`display countdown-glow ${compact ? 'text-lg' : 'text-2xl'}`}>
        Available Now!
      </p>
    )
  }

  const digits = [
    { value: remaining.days, label: 'Days' },
    { value: remaining.hours, label: 'Hrs' },
    { value: remaining.minutes, label: 'Min' },
    { value: remaining.seconds, label: 'Sec' },
  ]

  if (compact) {
    return (
      <div className="flex items-center gap-3">
        {digits.map((d) => (
          <div key={d.label} className="flex items-baseline gap-1">
            <span className="display text-lg tabular-nums text-amber-500">
              {String(d.value).padStart(2, '0')}
            </span>
            <span className="mono text-[8px] text-muted-foreground">{d.label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-4 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-sm px-6 py-4">
      {digits.map((d, i) => (
        <div key={d.label} className="flex items-center gap-4">
          <Digit value={d.value} label={d.label} />
          {i < digits.length - 1 && (
            <span className="display text-2xl sm:text-3xl text-amber-500/40">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
