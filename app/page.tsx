'use client'

import { useEffect, useMemo, useState } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  isLive: boolean
}

function getUpcomingFridayLaunch() {
  const now = new Date()
  const launch = new Date(now)
  const day = now.getDay() // 0 Sun ... 5 Fri
  const diff = (5 - day + 7) % 7
  launch.setDate(now.getDate() + (diff === 0 ? 7 : diff))
  launch.setHours(16, 0, 0, 0)
  return launch
}

function getTimeLeft(target: Date): TimeLeft {
  const delta = target.getTime() - Date.now()

  if (delta <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true }
  }

  return {
    days: Math.floor(delta / (1000 * 60 * 60 * 24)),
    hours: Math.floor((delta / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((delta / (1000 * 60)) % 60),
    seconds: Math.floor((delta / 1000) % 60),
    isLive: false,
  }
}

const acefluentoContent = [
  'AI-powered fluency coach for daily speaking practice and confidence building.',
  'Structured pathways for pronunciation, vocabulary, listening, and conversation feedback.',
  'Progress tracking that helps learners convert consistent practice into measurable outcomes.',
]

const alfEnhancements = [
  'Alf-style launch storytelling and high-converting landing flow.',
  'Single CTA path: Request Access → guided onboarding waitlist.',
  'Unified product journey from marketing site to app experience.',
]

export default function Page() {
  const launchDate = useMemo(() => getUpcomingFridayLaunch(), [])
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(launchDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-neutral-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12">
          <p className="mb-4 inline-flex rounded-full border border-neutral-700 px-4 py-1 text-xs uppercase tracking-[0.18em] text-neutral-400">
            Acefluento + Alf Landing
          </p>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-white md:text-5xl">
            Keep the full Acefluento message, now powered by an Alf launch landing experience.
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-neutral-400 md:text-lg">
            This combined page preserves Acefluento's core value proposition and adds Alf-style launch mechanics with a clear request-access funnel.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#request-access"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Request Access
            </a>
            <a
              href="#launch-countdown"
              className="rounded-lg border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500"
            >
              View Launch Countdown
            </a>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h2 className="mb-4 text-xl font-semibold text-white">Acefluento content (kept)</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-neutral-300">
              {acefluentoContent.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h2 className="mb-4 text-xl font-semibold text-white">Alf landing additions</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-neutral-300">
              {alfEnhancements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section id="launch-countdown" className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Live countdown to launch (this Friday)</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Launch target: {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short'}).format(launchDate)}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ['Days', timeLeft.days],
              ['Hours', timeLeft.hours],
              ['Minutes', timeLeft.minutes],
              ['Seconds', timeLeft.seconds],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-neutral-700 bg-black/50 p-4 text-center">
                <p className="text-3xl font-semibold text-white">{String(value).padStart(2, '0')}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400">{label}</p>
              </div>
            ))}
          </div>

          {timeLeft.isLive ? <p className="mt-4 text-sm font-semibold text-emerald-400">🚀 Launch is live now.</p> : null}
        </section>

        <section id="request-access" className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Request to access</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
            Join the early-access list to get first entry when the combined Acefluento + Alf experience goes live.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:access@acefluento.com?subject=Request%20Access%20-%20Acefluento%20x%20Alf"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Request to Access
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
