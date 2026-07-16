import { trustChecks, clientLogos, heroTestimonial, CALENDLY_URL } from '@/data/site-content'
import { Check, Star } from 'lucide-react'

function DashboardMockup() {
  return (
    <div className="relative animate-hero-img" style={{ perspective: '1200px' }}>
      <div
        className="dark-island rounded-2xl p-6 space-y-5"
        style={{ transform: 'rotateY(-8deg) rotateX(4deg)' }}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Acquisition Pipeline</h3>
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
      </div>

      <div className="float-card absolute -bottom-4 -right-4 animate-float-delayed z-20">
        <p className="text-sm font-semibold">Live. Updated every hour.</p>
      </div>

      <div className="hidden lg:block absolute -top-6 -left-10 max-w-[220px] z-20 animate-float">
        <div className="bg-card border-2 border-border rounded-2xl p-4 shadow-2xl">
          <div className="flex gap-0.5 mb-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <p className="text-sm text-foreground/90 leading-snug mb-3">
            &ldquo;{heroTestimonial.quote}&rdquo;
          </p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-red to-teal" />
            <div>
              <p className="text-xs font-semibold text-foreground leading-tight">
                {heroTestimonial.name}
              </p>
              <p className="text-[10px] text-muted-foreground leading-tight">
                {heroTestimonial.title}
              </p>
            </div>
          </div>
        </div>
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
            Assisted-living facilities book family tours at{' '}
            <span className="text-brand-red">$14.30 a lead.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-6 animate-hero-3">
            Not a promise. Last month&rsquo;s number. We build the Google Ads, landing pages,
            and automated follow-up that produce it — then hand you a live dashboard so you
            can watch it happen.
          </p>

          {/* Mobile-only proof bar — dashboard is hidden on small screens */}
          <div className="flex gap-4 mb-8 md:hidden animate-hero-3">
            <div className="kpi-box flex-1 text-center">
              <p className="mono text-white/40 text-xs mb-1">Cost / Lead</p>
              <p className="display text-2xl">$14.30</p>
            </div>
            <div className="kpi-box flex-1 text-center">
              <p className="mono text-white/40 text-xs mb-1">Active Inquiries</p>
              <p className="display text-2xl">+24</p>
            </div>
          </div>

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
              <div key={check} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-teal flex-shrink-0" />
                {check}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-border animate-hero-5">
            <p className="mono text-muted-foreground/60 mb-4">Trusted By Local Brands</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 opacity-60">
              {clientLogos.map((logo) => (
                <span
                  key={logo}
                  className="font-bold text-sm md:text-base tracking-tight text-muted-foreground"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
