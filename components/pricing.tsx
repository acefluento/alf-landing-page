"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small businesses and startups.",
    features: [
      "Up to 10,000 mentions/month",
      "3 social platforms",
      "Basic sentiment analysis",
      "Email alerts",
      "Weekly reports",
      "1 user seat",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$799",
    period: "/month",
    description: "For growing companies with serious reputation needs.",
    features: [
      "Up to 100,000 mentions/month",
      "Unlimited platforms",
      "Advanced AI analysis",
      "Real-time alerts",
      "Custom dashboards",
      "5 user seats",
      "API access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex requirements.",
    features: [
      "Unlimited mentions",
      "White-label options",
      "Custom AI models",
      "Dedicated account manager",
      "SLA guarantees",
      "Unlimited users",
      "On-premise deployment",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Pricing</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-foreground md:text-5xl text-balance leading-[1.1]">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg font-medium text-muted-foreground leading-relaxed">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border p-8 md:p-10 ${
                plan.highlighted
                  ? "border-primary bg-foreground text-background"
                  : "border-border bg-background"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-8 bg-primary px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className={`text-lg font-bold tracking-tight ${plan.highlighted ? "text-background" : "text-foreground"}`}>{plan.name}</h3>
                <p className={`mt-2 text-sm ${plan.highlighted ? "text-background/60" : "text-muted-foreground"}`}>{plan.description}</p>
              </div>
              <div className="mt-6">
                <span className={`text-4xl font-black tracking-tight ${plan.highlighted ? "text-background" : "text-foreground"}`}>{plan.price}</span>
                <span className={plan.highlighted ? "text-background/60" : "text-muted-foreground"}>{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 ${plan.highlighted ? "text-primary" : "text-primary"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-background/80" : "text-muted-foreground"}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full min-h-[52px] font-semibold ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
