'use client'

import { useState, useEffect } from 'react'
import { navLinks, CALENDLY_URL } from '@/data/site-content'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 22,20 2,20" />
            </svg>
          </div>
          <span className="wordmark text-lg text-foreground tracking-tight">
            ACEFLUENTO
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-2.5">
            Book Strategy Call
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 text-muted-foreground hover:text-foreground" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-[280px] sm:w-[320px] px-8 pt-10">
            <SheetTitle className="wordmark text-xl text-foreground mb-10">ACEFLUENTO</SheetTitle>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium text-lg py-3 border-b border-border transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm mt-8"
              >
                Book Strategy Call
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
