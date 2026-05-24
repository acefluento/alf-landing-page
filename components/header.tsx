"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

function SpireMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <polygon points="20,2 30,38 10,38" fill="#C8102E" />
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <SpireMark className="h-8 w-auto" />
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-[-0.03em] text-foreground leading-none">ACE</span>
            <span className="text-[9px] font-medium tracking-[0.35em] text-muted-foreground uppercase leading-none mt-0.5">Strategic Growth Partners</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How it Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="sm" className="font-medium">
            Sign in
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-4 py-6">
            <Link href="#features" className="flex h-11 items-center text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="#how-it-works" className="flex h-11 items-center text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              How it Works
            </Link>
            <Link href="#pricing" className="flex h-11 items-center text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="#contact" className="flex h-11 items-center text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Button variant="ghost" size="lg" className="w-full min-h-[48px] font-medium">
                Sign in
              </Button>
              <Button size="lg" className="w-full min-h-[48px] bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
