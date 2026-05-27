'use client'

import { CALENDLY_URL } from '@/data/site-content'
import { Reveal } from './reveal'

export function CalendlySection() {
  return (
    <section id="book" className="band py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-10">
            <p className="section-label mono justify-center mb-4">
              <span className="dot" /> Book A Call
            </p>
            <h2 className="display text-3xl sm:text-4xl mb-4">
              Pick a time that{' '}
              <span className="text-brand-red">works for you.</span>
            </h2>
            <p className="text-foreground/40 max-w-lg mx-auto">
              30 minutes. No obligation. We&apos;ll review your current setup and map out
              a clear plan of action.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="rounded-2xl overflow-hidden border border-white/[0.06] bg-white"
            style={{ minHeight: 660 }}
          >
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=0a0a0a&primary_color=c8102e`}
              width="100%"
              height="660"
              frameBorder="0"
              title="Schedule a strategy call with Acefluento"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
