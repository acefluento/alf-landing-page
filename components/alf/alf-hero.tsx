import { CALENDLY_URL } from '@/data/site-content'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '500M+', label: 'Data points analyzed daily' },
  { value: '98.7%', label: 'Sentiment accuracy' },
  { value: '<2s', label: 'Alert response time' },
  { value: '50+', label: 'Languages supported' },
]

export function AlfHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-red/20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            <span className="text-sm font-medium text-muted-foreground">
              Introducing ALF Reputation Engine
            </span>
          </div>

          <h1 className="display max-w-4xl text-4xl sm:text-5xl lg:text-7xl">
            Your reputation is
            <br />
            <span className="text-brand-red">your revenue.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            ALF Reputation Engine monitors, analyzes, and protects your brand across every
            digital surface — so you never get blindsided.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3.5 text-base">
              Request Early Access
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </a>
            <a href="#how-it-works" className="btn-ghost px-8 py-3.5 text-base">
              Watch Demo
            </a>
          </div>

          <div className="mt-20 w-full border-t border-b border-border py-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="display text-2xl md:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
