import { contactInfo } from '@/data/site-content'
import { AceMonolith } from './ace-logo'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3">
            <AceMonolith className="w-7 h-auto text-background" />
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-[-0.03em] text-foreground leading-none">
                ACE
              </span>
              <span className="text-[8px] font-medium tracking-[0.35em] text-muted-foreground uppercase leading-none mt-0.5">
                Strategic Growth Partners
              </span>
            </div>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground/60">
          &copy; {year} Acefluento LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
