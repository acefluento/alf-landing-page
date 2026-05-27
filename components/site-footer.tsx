import { contactInfo } from '@/data/site-content'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="wordmark text-lg text-foreground tracking-tight">
              ACEFLUENTO
            </span>
            <span className="text-sm text-foreground/30">Strategic Growth Partners</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/40">
            <a
              href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
              className="hover:text-foreground transition-colors"
            >
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-foreground transition-colors"
            >
              {contactInfo.email}
            </a>
            <span>{contactInfo.location}</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-xs text-foreground/20">
          &copy; {year} Acefluento LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
