"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Subtle red accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/20" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground">Introducing ALF Reputation Engine</span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-black tracking-[-0.03em] text-foreground md:text-6xl lg:text-7xl text-balance leading-[1.1]">
            Your reputation is
            <br />
            <span className="text-primary">your revenue.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg font-medium text-muted-foreground md:text-xl leading-relaxed text-pretty">
            ALF Reputation Engine monitors, analyzes, and protects your brand across every digital surface — so you never get blindsided.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="min-h-[52px] px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base">
              Request Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-h-[52px] px-8 border-foreground/20 text-foreground hover:bg-foreground hover:text-background font-semibold text-base">
              Watch Demo
            </Button>
          </div>

          {/* Metrics strip */}
          <div className="mt-20 w-full">
            <div className="border-t border-b border-border py-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { value: "500M+", label: "Data points analyzed daily" },
                  { value: "98.7%", label: "Sentiment accuracy" },
                  { value: "<2s", label: "Alert response time" },
                  { value: "50+", label: "Languages supported" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-black text-foreground md:text-3xl tracking-tight">{stat.value}</div>
                    <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
