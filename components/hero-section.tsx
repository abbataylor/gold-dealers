"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, TrendingUp, Clock } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { width, height, left, top } = heroRef.current.getBoundingClientRect()
      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5
      
      heroRef.current.style.setProperty("--mouse-x", `${x * 20}px`)
      heroRef.current.style.setProperty("--mouse-y", `${y * 20}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ "--mouse-x": "0px", "--mouse-y": "0px" } as React.CSSProperties}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.75 0.12 85) 1px, transparent 1px),
                              linear-gradient(90deg, oklch(0.75 0.12 85) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
        
        {/* Radial Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.12 85 / 0.3) 0%, transparent 70%)",
            transform: `translate(calc(-50% + var(--mouse-x)), calc(-50% + var(--mouse-y)))`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-40 right-40 w-16 h-16 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-primary">Trusted by 10,000+ Investors Worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Secure Your </span>
            <span className="text-gold-gradient">Wealth</span>
            <br />
            <span className="text-foreground">With </span>
            <span className="text-gold-gradient">Premium Gold</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Experience unparalleled excellence in gold trading. Buy, sell, and store 
            precious metals with complete confidence and transparency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="group bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-medium"
            >
              Start Trading Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
            >
              View Live Prices
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="glass px-6 py-4 rounded-lg flex items-center gap-4 hover-lift">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Fully Insured</p>
                <p className="font-semibold text-foreground">100% Secure</p>
              </div>
            </div>

            <div className="glass px-6 py-4 rounded-lg flex items-center gap-4 hover-lift">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Best Rates</p>
                <p className="font-semibold text-foreground">Guaranteed</p>
              </div>
            </div>

            <div className="glass px-6 py-4 rounded-lg flex items-center gap-4 hover-lift">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Fast Settlement</p>
                <p className="font-semibold text-foreground">Same Day</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
