import { etsGuide } from '@/data/site-content'
import { CountdownTimer } from './countdown-timer'

export function EtsLaunchBanner() {
  return (
    <section
      id="ets-launch"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #9F0C24 0%, #C8102E 50%, #E0122F 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mono text-white/60 mb-4">Digital Product Drop</p>
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {etsGuide.title}
          </h2>
          <p className="text-white/70 text-lg mb-2">{etsGuide.subtitle}</p>
          <p className="text-white/50 mb-6">
            A practical digital download that helps beginners and intermediates set up
            devices, stay safe online, organize digital accounts, and use modern tools with
            confidence. No jargon. No guessing.
          </p>
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white font-semibold rounded-full text-sm transition-all hover:bg-black/80"
          >
            Pre-Order The Guide
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <CountdownTimer />
          <p className="mono text-white/50 text-center md:text-right">
            Launching This Friday at 10:00 AM
          </p>
        </div>
      </div>
    </section>
  )
}
