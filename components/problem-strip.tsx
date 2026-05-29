import { problemPills, CALENDLY_URL } from '@/data/site-content'
import { Reveal } from './reveal'

export function ProblemStrip() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <p className="section-label mono justify-center mb-4">
            <span className="dot" /> The Problem
          </p>
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto mb-6">
            Most local brands lose leads{' '}
            <span className="text-brand-red">before the first conversation.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Unclear messaging, weak conversion points, and zero follow-up. You&apos;re
            paying for attention and letting it walk away.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {problemPills.map((pill) => (
              <span key={pill} className="pill">
                {pill}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Fix Your Funnel — Book A Call
          </a>
        </Reveal>
      </div>
    </section>
  )
}
