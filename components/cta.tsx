"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-3xl font-black tracking-[-0.03em] text-primary-foreground md:text-5xl text-balance leading-[1.1]">
            Ready to take control of your reputation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-primary-foreground/70 leading-relaxed">
            Join hundreds of leading brands using ALF to monitor and enhance their reputation. Start your free trial today.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="min-h-[52px] px-8 bg-background text-foreground hover:bg-background/90 font-semibold text-base">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-h-[52px] px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm font-medium text-primary-foreground/50">
            No credit card required  &#183;  14-day free trial  &#183;  Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
