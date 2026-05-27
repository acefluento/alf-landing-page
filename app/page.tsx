'use client'

import { useEffect, useMemo, useState } from 'react'

const launchDate = new Date('2026-05-29T17:00:00Z')

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const productCards = [
  {
    name: 'Acefluento Growth OS',
    summary: 'A revenue system for inbound, outbound, and retention teams that need AI execution with predictable outcomes.',
    points: ['Campaign copilot workflows', 'Conversion analytics by channel', 'Weekly AI sprint operating cadence'],
  },
  {
    name: 'ALF Engine',
    summary: 'The execution layer that turns prompts into governed automations, reusable agents, and production workflows.',
    points: ['Agent templates for every function', 'Human-in-the-loop quality controls', 'Model routing for cost + performance'],
  },
]

const caseStudies = [
  {
    company: 'SaaS GTM Team',
    result: '+38% qualified pipeline in 60 days',
    detail: 'Unified sales + marketing AI playbooks and reduced campaign production from 10 days to 48 hours.',
  },
  {
    company: 'Ecommerce Brand Group',
    result: '+27% repeat revenue',
    detail: 'Automated lifecycle messaging with ALF and launched multilingual merchandising content at scale.',
  },
  {
    company: 'B2B Services Firm',
    result: '3.1x faster proposal turnaround',
    detail: 'Connected discovery notes, knowledge base, and proposal drafting agents into one governed workflow.',
  },
]

function getTimeLeft(target: Date): TimeLeft {
  const totalMs = Math.max(0, target.getTime() - Date.now())

  return {
    days: Math.floor(totalMs / (1000 * 60 * 60 * 24)),
    hours: Math.floor((totalMs / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((totalMs / (1000 * 60)) % 60),
    seconds: Math.floor((totalMs / 1000) % 60),
  }
}

export default function Page() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(launchDate))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(launchDate)), 1000)
    return () => clearInterval(timer)
  }, [])

  const isLive = useMemo(
    () => timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0,
    [timeLeft]
  )

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-neutral-200 md:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-black p-8 md:p-12">
          <p className="inline-flex rounded-full border border-neutral-700 px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Acefluento.com × ALF Engine
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            The profitable AI execution platform for modern teams.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 md:text-lg">
            We combined Acefluento&apos;s GTM system with the ALF engine so your team can attract demand, automate delivery, and grow revenue on one
            operating stack.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#booking" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
              Book growth call
            </a>
            <a
              href="#request-access"
              className="rounded-lg border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              Request ALF access
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {productCards.map((product) => (
            <article key={product.name} className="rounded-3xl border border-neutral-800 bg-neutral-950 p-7">
              <h2 className="text-2xl font-semibold text-white">{product.name}</h2>
              <p className="mt-3 text-neutral-400">{product.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-neutral-300">
                {product.points.map((point) => (
                  <li key={point} className="rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="grid gap-6 rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:grid-cols-[1.1fr_1fr] md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Private launch window</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">ALF goes live this Friday</h3>
            <p className="mt-3 text-neutral-400">Countdown to Friday, May 29, 2026 at 5:00 PM UTC. Priority access is opening in waves.</p>
            <a
              href="mailto:founders@acefluento.com?subject=Request%20to%20Access%20ALF"
              className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Request to access
            </a>
          </div>

          <div className="rounded-2xl border border-neutral-700 bg-black/40 p-6">
            {isLive ? (
              <p className="text-3xl font-semibold text-emerald-400">ALF is live 🚀</p>
            ) : (
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Sec', value: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-neutral-700 bg-neutral-900/70 p-3 text-center">
                    <p className="text-2xl font-semibold text-white">{String(item.value).padStart(2, '0')}</p>
                    <p className="text-xs uppercase tracking-wide text-neutral-400">{item.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="how-it-works" className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-white">How everything works</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              '1) Audit your funnel, sales process, and operations constraints.',
              '2) Deploy Acefluento playbooks mapped to your KPIs and team roles.',
              '3) Activate ALF agents for execution, QA review, and reporting.',
              '4) Run weekly optimization loops until outcomes become repeatable.',
            ].map((step) => (
              <div key={step} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-sm text-neutral-300">
                {step}
              </div>
            ))}
          </div>
        </section>

        <section id="case-studies" className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-white">Case studies</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.company} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                <p className="text-xs uppercase tracking-wide text-neutral-400">{study.company}</p>
                <p className="mt-2 text-lg font-semibold text-white">{study.result}</p>
                <p className="mt-2 text-sm text-neutral-300">{study.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about-us" className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-white">About us</h3>
          <p className="mt-3 max-w-3xl text-neutral-300">
            Acefluento builds profitable AI operating systems for companies that cannot afford slow experiments. We combine strategy, implementation,
            and enablement so every workflow drives measurable business value.
          </p>
        </section>

        <section id="booking" className="rounded-3xl border border-neutral-800 bg-white p-8 text-black md:p-10">
          <h3 className="text-2xl font-semibold">Book a strategy session</h3>
          <p className="mt-2 max-w-2xl text-neutral-700">
            In 30 minutes, we will map your revenue bottlenecks, identify the highest-ROI AI workflows, and propose an implementation path.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="mailto:founders@acefluento.com?subject=Book%20Strategy%20Session" className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white">
              Book now
            </a>
            <a href="#case-studies" className="rounded-lg border border-neutral-400 px-5 py-3 text-sm font-semibold text-black">
              View case studies
            </a>
          </div>
        </section>

        <section id="request-access" className="pb-4 text-center text-sm text-neutral-500">
          Request-to-access queue is open for the Friday launch cohort.
        </section>
      </div>
    </main>
  )
}
