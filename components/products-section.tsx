import { etsGuide, alfEngine, instructorClasses } from '@/data/site-content'
import { CountdownTimer } from './countdown-timer'
import { Reveal } from './reveal'
import { Check, BookOpen, Shield, Monitor } from 'lucide-react'

function EtsCard() {
  return (
    <div className="feature-card md:col-span-2 relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <span className="mono text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
          Pre-Order
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-brand-red" />
            <p className="mono text-foreground/40">Digital Product</p>
          </div>
          <h3 className="display text-2xl sm:text-3xl mb-3">{etsGuide.title}</h3>
          <p className="text-foreground/50 mb-2">{etsGuide.subtitle}</p>
          <p className="text-sm text-foreground/30 mb-6">
            {etsGuide.taglineTop} &mdash; {etsGuide.taglineBottom}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {etsGuide.topics.map((topic) => (
              <span key={topic} className="pill text-xs">
                {topic}
              </span>
            ))}
          </div>

          <div className="space-y-2 mb-6">
            {etsGuide.valueProps.map((prop) => (
              <div key={prop} className="flex items-center gap-2 text-sm text-foreground/50">
                <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                {prop}
              </div>
            ))}
          </div>

          <a href="#ets-launch" className="btn-primary text-sm">
            Pre-Order Now
          </a>
        </div>

        <div className="flex flex-col items-center gap-4">
          <CountdownTimer compact />
          <p className="mono text-foreground/30">Drops This Friday</p>
          <p className="text-xs text-foreground/20 text-center max-w-xs">
            {etsGuide.footer}
          </p>
        </div>
      </div>
    </div>
  )
}

function AlfCard() {
  return (
    <div className="feature-card flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <Shield className="w-5 h-5 text-brand-red" />
        <p className="mono text-foreground/40">SaaS Product</p>
      </div>
      <h3 className="text-xl font-bold mb-3">{alfEngine.title}</h3>
      <p className="text-sm text-foreground/50 mb-5 flex-1">{alfEngine.description}</p>
      <div className="space-y-2 mb-6">
        {alfEngine.features.map((f) => (
          <div key={f} className="flex items-start gap-2 text-sm text-foreground/50">
            <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
            {f}
          </div>
        ))}
      </div>
      <p className="text-sm text-foreground/30 mb-4">
        Starting at <span className="text-foreground font-semibold">{alfEngine.startingPrice}</span>
      </p>
      <a href="#services" className="btn-ghost text-sm mt-auto">
        Learn More
      </a>
    </div>
  )
}

function ClassesCard() {
  return (
    <div className="feature-card flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <Monitor className="w-5 h-5 text-brand-red" />
        <p className="mono text-foreground/40">Live Training</p>
      </div>
      <h3 className="text-xl font-bold mb-3">{instructorClasses.title}</h3>
      <p className="text-sm text-foreground/50 mb-5 flex-1">
        {instructorClasses.description}
      </p>
      <div className="space-y-2 mb-6">
        {instructorClasses.features.map((f) => (
          <div key={f} className="flex items-start gap-2 text-sm text-foreground/50">
            <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
            {f}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {instructorClasses.topics.map((t) => (
          <span key={t} className="pill text-xs">{t}</span>
        ))}
      </div>
      <a href="#services" className="btn-ghost text-sm mt-auto">
        Inquire About Classes
      </a>
    </div>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-14">
            <p className="section-label mono mb-4">
              <span className="dot" /> Products &amp; Tools
            </p>
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl max-w-2xl">
              Systems you can{' '}
              <span className="text-brand-red">buy, deploy, and grow with.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          <Reveal className="fade-up md:col-span-2">
            <EtsCard />
          </Reveal>
          <Reveal className="fade-left">
            <AlfCard />
          </Reveal>
          <Reveal className="fade-right">
            <ClassesCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
