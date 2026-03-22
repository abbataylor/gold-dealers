"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#prices", label: "Live Prices" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-gold" />
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10 relative z-10"
                fill="none"
              >
                <path
                  d="M20 4L4 36h32L20 4z"
                  className="fill-primary"
                  strokeWidth="1"
                />
                <path
                  d="M20 12L10 32h20L20 12z"
                  className="fill-background"
                />
                <circle cx="20" cy="22" r="4" className="fill-primary" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-wide text-gold-gradient">
                NITA
              </span>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                Gold Dealers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6" asChild>
              <Link href="/#contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="glass rounded-lg p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <Button className="w-full bg-primary text-primary-foreground" asChild>
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
