import { trustChecks, CALENDLY_URL } from '@/data/site-content'
import { Check } from 'lucide-react'

function DashboardMockup() {
  return (
    <div className="relative animate-hero-img" style={{ perspective: '1200px' }}>
      <div
        className="bg-brand-charcoal border border-white/[0.08] rounded-2xl p-6 space-y-5"
        style={{ transform: 'rotateY(-8deg) rotateX(4deg)' }}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Acquisition Pipeline</h3>
          <span className="mono text-brand-green">Live</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="kpi-box">
            <p className="mono text-foreground/40 mb-1">Active Inquiries</p>
            <p className="display text-2xl text-foreground">+24</p>
          </div>
          <div className="kpi-box">
            <p className="mono text-foreground/40 mb-1">Cost / Lead</p>
            <p className="display text-2xl text-foreground">$14.30</p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: 'Lead Captured', color: 'bg-brand-green', time: '2m ago' },
            { label: 'New Booking', color: 'bg-brand-blue', time: '14m ago' },
            { label: 'Strategy Call', color: 'bg-brand-red', time: '1h ago' },
          ].map((e) => (
            <div key={e.label} className="flex items-center gap-3 text-sm">
              <div className={`w-2 h-2 rounded-full ${e.color}`} />
              <span className="text-foreground/70">{e.label}</span>
              <span className="ml-auto mono text-foreground/30">{e.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="float-card absolute -bottom-4 -right-4 animate-float-delayed">
        <p className="text-sm font-semibold">Follow-up that happens.</p>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="mono text-foreground/40 mb-6 animate-hero-1">
            Cleveland, OH — Serving Local & Remote
          </p>
          <h1 className="display text-4xl sm:text-5xl lg:text-6xl mb-6 animate-hero-2">
            Websites and lead systems for{' '}
            <span className="text-brand-red">trust-based local brands.</span>
          </h1>
          <p className="text-lg text-foreground/50 max-w-lg mb-8 animate-hero-3">
            We help assisted-living facilities, churches, and service brands turn attention
            into calls, inquiries, and clients. You need clear messaging, strong conversion
            points, and follow-up that actually happens.
          </p>

          <div className="flex flex-wrap gap-3 mb-8 animate-hero-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book A Strategy Call
            </a>
            <a href="#services" className="btn-ghost">
              See Our Work
            </a>
          </div>

          <div className="space-y-2 animate-hero-5">
            {trustChecks.map((check) => (
              <div key={check} className="flex items-center gap-2 text-sm text-foreground/40">
                <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                {check}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
