"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/30 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Introducing ALF Reputation Engine</span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Build trust.
            <br />
            <span className="text-primary">Protect your brand.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed text-pretty">
            ALF Reputation Engine is an AI-powered platform for monitoring, analyzing, and enhancing your brand&apos;s reputation across every digital touchpoint.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="min-h-[48px] px-8">
              Request Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-h-[48px] px-8">
              Watch Demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["TechCorp", "DataFlow", "Nexus AI", "CloudScale", "QuantumLabs"].map((company) => (
                <span key={company} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
