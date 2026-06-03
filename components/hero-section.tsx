import { trustChecks, CALENDLY_URL } from '@/data/site-content'
import { Check } from 'lucide-react'

function DashboardMockup() {
  return (
    <div className="relative animate-hero-img" style={{ perspective: '1200px' }}>
      <div
        className="dark-island rounded-2xl p-6 space-y-5"
        style={{ transform: 'rotateY(-8deg) rotateX(4deg)' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold">Acquisition Pipeline</h3>
            <span className="mono text-[9px] text-white/40 border border-white/15 rounded-full px-2 py-0.5">
              Example
            </span>
          </div>
          <span className="mono text-teal">Live</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="kpi-box">
            <p className="mono text-white/40 mb-1">Active Inquiries</p>
            <p className="display text-2xl">+24</p>
          </div>
          <div className="kpi-box">
            <p className="mono text-white/40 mb-1">Cost / Lead</p>
            <p className="display text-2xl">$14.30</p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: 'Lead Captured', color: 'bg-teal', time: '2m ago' },
            { label: 'New Booking', color: 'bg-teal-dark', time: '14m ago' },
            { label: 'Strategy Call', color: 'bg-brand-red', time: '1h ago' },
          ].map((e) => (
            <div key={e.label} className="flex items-center gap-3 text-sm">
              <div className={`w-2 h-2 rounded-full ${e.color}`} />
              <span className="text-white/70">{e.label}</span>
              <span className="ml-auto mono text-white/30">{e.time}</span>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-white/30 leading-snug pt-2 border-t border-white/10">
          Illustrative dashboard — actual client data is private.
        </p>
      </div>

      <div className="float-card absolute -bottom-4 -right-4 animate-float-delayed z-20">
        <p className="text-sm font-semibold">Follow-up that happens.</p>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="hero-mesh relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="mono text-muted-foreground mb-6 animate-hero-1">
            Cleveland, OH — Serving Local &amp; Remote
          </p>
          <h1 className="display text-4xl sm:text-5xl lg:text-6xl mb-6 animate-hero-2">
            Websites and lead systems for{' '}
            <span className="text-brand-red">trust-based local brands.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 animate-hero-3">
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
              Explore Services
            </a>
          </div>

          <div className="space-y-2 animate-hero-5">
            {trustChecks.map((check) => (
              <div key={check} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-teal flex-shrink-0" />
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
