import { etsGuide } from '@/data/site-content'
import { CountdownTimer } from './countdown-timer'
import { PreorderForm } from './preorder-form'

export function EtsLaunchBanner() {
  return (
    <section
      id="ets-launch"
      className="relative overflow-hidden border-y border-border"
      style={{
        background:
          'linear-gradient(135deg, #0A1628 0%, #0F1F38 45%, #1A1A2E 100%)',
      }}
    >
      {/* Crimson glow — left side */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(175, 34, 46, 0.35) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Teal accent glow — right side */}
      <div
        className="absolute -right-24 -bottom-24 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1.5 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <span className="mono text-teal">Live Launch</span>
          </div>

          <h2 className="display text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {etsGuide.title}
          </h2>
          <p className="text-white/70 text-lg mb-2">{etsGuide.subtitle}</p>
          <p className="text-white/55 mb-6">
            A practical digital download that helps beginners and intermediates set up
            devices, stay safe online, organize digital accounts, and use modern tools with
            confidence. No jargon. No guessing.
          </p>
          <p className="text-white/40 text-sm mb-6 italic">
            Works great for churches, senior-focused nonprofits, and anyone helping
            others navigate everyday technology.
          </p>
          <PreorderForm variant="banner" />
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <CountdownTimer />
          <p className="mono text-white/50 text-center md:text-right">
            Launching This Friday at 10:00 AM ET
          </p>
        </div>
      </div>
    </section>
  )
}
