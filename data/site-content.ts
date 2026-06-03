export const CALENDLY_URL = 'https://calendly.com/acefluento/growth-strategy-call-with-nolan'

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'ETS Guide', href: '#ets-launch' },
  { label: 'FAQs', href: '#faqs' },
] as const

export const trustChecks = [
  'Built for trust-first businesses',
  'Designed to convert, not just look nice',
  'Backed by strategy, automation, and conversion thinking',
] as const

export interface ServiceCard {
  title: string
  description: string
  startingAt: string
}

export const serviceCards: ServiceCard[] = [
  {
    title: 'Assisted Living & Care Brands',
    description:
      'Families research you online before they ever call. We build trust-first marketing experiences and deploy our ALF Reputation Engine to ensure reviews work for you.',
    startingAt: 'Scoped per facility — book a call',
  },
  {
    title: 'Churches & Organizations',
    description:
      'Community-driven brands often have the most loyal audiences but no real follow-up. We craft websites that welcome new visitors to your location, members, and mission.',
    startingAt: 'Scoped per congregation — book a call',
  },
  {
    title: 'Local Service Businesses',
    description:
      'Painters, roofers, contractors — businesses that need lead flow, not just a nice website. We build high-converting landing pages and pair them with automated follow-up systems.',
    startingAt: 'Scoped per business — book a call',
  },
  {
    title: 'Select Digital Brands',
    description:
      'We support a limited number of info products, SaaS products, and digital brands with proven conversion-first UX patterns. Clean UI, strong copy, and frictionless mechanics.',
    startingAt: 'Custom scope — book a call',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'Do you only work with assisted living and churches?',
    answer:
      "No. Those are strong fits because trust is the #1 conversion driver in their categories, but we also work with select local service businesses and digital brands that need strategic, conversion-focused growth systems.",
  },
  {
    question: 'Do you only build websites?',
    answer:
      "A website is just the foundation. We focus on the full system — messaging, page structure, follow-up flow, automated pipeline, and ongoing performance monitoring to support top-of-funnel visibility and conversion.",
  },
  {
    question: 'Do you offer monthly support?',
    answer:
      "Yes. For clients who want week-over-week refinement, we offer ongoing monthly retainers that include site updates, messaging refinements, campaign support, and ongoing performance monitoring.",
  },
  {
    question: 'Can we start with one project first?',
    answer:
      "Absolutely. Most clients start with a single engagement — like a landing page, brand audit, or reputation setup — and then expand after seeing results. There's no pressure to commit to the full system before you see the work in action.",
  },
  {
    question: 'What happens at the strategy call?',
    answer:
      "We look at your current digital presence, identify what's working and where the breakdowns are — whether that's messaging, conversion flow, or follow-up gaps — and outline a clear plan of action.",
  },
]

export const problemPills = [
  'Weak messaging',
  'Poor conversion flow',
  'No follow-up system',
  'Inconsistent branding',
  'Outdated tech stack',
] as const

export const contactInfo = {
  phone: '216-490-8383',
  email: 'hello@acefluento.com',
  location: 'Cleveland, OH',
} as const

export const etsGuide = {
  title: 'The Everyday Technology Survival Guide',
  subtitle: 'A Beginner-to-Intermediate Guide to Modern Technology',
  taglineTop: 'Simple. Practical. Empowering.',
  taglineBottom: 'Learn. Apply. Thrive.',
  footer: 'Practical Skills for Everyday Life — Stay Connected. Stay Safe. Stay Confident.',
  topics: ['Phones', 'Computers', 'Internet', 'Safety', 'AI & More'],
  valueProps: ['Practical Skills', 'Stay Safe Online', 'Use Tech with Confidence'],
  launchDate: '2026-06-05T10:00:00-04:00',
} as const

export const alfEngine = {
  title: 'ALF Reputation Engine',
  description:
    'Automated reputation management built specifically for assisted living facilities. Monitor reviews, get instant alerts, and respond with AI-drafted replies.',
  features: [
    'Auto-Monitoring across Google, Yelp, Facebook & ALC',
    'Negative Review Alerts — instant staff notifications',
    'AI-Drafted Responses in your facility\'s voice',
    'Review Request Campaigns via SMS & email drip',
  ],
  startingPrice: '$297/mo',
} as const

export const instructorClasses = {
  title: 'Instructor-Led Technology Classes',
  description:
    'Hands-on, beginner-friendly classes covering the same essential tech topics as the ETS Guide — led live by an instructor, online or in person.',
  topics: ['Phones', 'Computers', 'Internet', 'Safety', 'AI & More'],
  features: [
    'Beginner-friendly curriculum',
    'Small-group format with live Q&A',
    'Online & in-person options',
    'Hands-on guided exercises',
  ],
} as const
