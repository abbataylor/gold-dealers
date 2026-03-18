"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible")
              }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to Start Your{" "}
            <span className="text-gold-gradient">Gold Investment Journey?</span>
          </h2>

          <p className="reveal text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied investors who trust NITA Gold Dealers 
            for their precious metal needs. Get started today with a free consultation.
          </p>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-medium animate-pulse-gold"
            >
              Start Investing Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
            >
              <Phone className="mr-2 w-5 h-5" />
              Schedule a Call
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="reveal flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-gold-gradient">$0</p>
              <p className="text-sm text-muted-foreground">Consultation Fee</p>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-gold-gradient">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-gold-gradient">100%</p>
              <p className="text-sm text-muted-foreground">Secure & Insured</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
