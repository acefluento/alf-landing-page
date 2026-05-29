import { CALENDLY_URL, contactInfo } from '@/data/site-content'
import { Reveal } from './reveal'
import { Phone, Mail } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <p className="mono text-muted-foreground mb-4">Ready To Grow?</p>
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl mb-6">
            Let&apos;s build a system that{' '}
            <span className="text-brand-red">actually converts.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Book a free strategy call. We&apos;ll review your current setup, identify the
            gaps, and map out a clear plan — no obligation, no fluff.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#book"
              className="btn-primary text-base px-10 py-4"
            >
              Book A Strategy Call
            </a>
            <a href="#services" className="btn-ghost text-base px-10 py-4">
              Explore Services
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              {contactInfo.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
