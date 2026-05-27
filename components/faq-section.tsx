'use client'

import { faqs } from '@/data/site-content'
import { Reveal } from './reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FaqSection() {
  return (
    <section id="faqs" className="band py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="section-label mono justify-center mb-4">
              <span className="dot" /> FAQs
            </p>
            <h2 className="display text-3xl sm:text-4xl">
              Common questions,{' '}
              <span className="text-brand-red">straight answers.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-brand-red/30"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
