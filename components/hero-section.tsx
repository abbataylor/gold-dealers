"use client"

import Link from "next/link"
import { useEffect, useRef, type CSSProperties } from "react"
import { Button } from "@/components/ui/button"
import { PromoImageSlideshow } from "@/components/promo-image-slideshow"
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
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ "--mouse-x": "0px", "--mouse-y": "0px" } as CSSProperties}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.75 0.12 85) 1px, transparent 1px),
                              linear-gradient(90deg, oklch(0.75 0.12 85) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        <div
          className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.12 85 / 0.3) 0%, transparent 70%)",
            transform: `translate(calc(-50% + var(--mouse-x)), calc(-50% + var(--mouse-y)))`,
            transition: "transform 0.3s ease-out",
          }}
        />

        <div
          className="absolute top-20 left-10 h-32 w-32 animate-float rounded-full bg-primary/5"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute right-20 bottom-40 h-24 w-24 animate-float rounded-full bg-primary/10"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-40 right-40 h-16 w-16 animate-float rounded-full bg-primary/5"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="container mx-auto flex flex-1 flex-col justify-center px-4 pt-24 pb-8 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Copy */}
            <div className="text-center lg:text-left">
              <div className="mb-8 inline-flex animate-fade-in-up items-center gap-2 rounded-full glass-gold px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm text-primary">Trusted by 10,000+ Investors Worldwide</span>
              </div>

              <h1
                className="animate-fade-in-up mb-6 font-serif text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="text-foreground">Secure Your </span>
                <span className="text-gold-gradient">Wealth</span>
                <br />
                <span className="text-foreground">With </span>
                <span className="text-gold-gradient">Premium Gold</span>
              </h1>

              <p
                className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl lg:mx-0"
                style={{ animationDelay: "0.2s" }}
              >
                Experience unparalleled excellence in gold trading. Buy, sell, and store precious
                metals with complete confidence and transparency.
              </p>

              <div
                className="animate-fade-in-up mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  size="lg"
                  className="group bg-primary px-8 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href="#contact">
                    Start Trading Today
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 px-8 py-6 text-lg text-foreground hover:border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <Link href="#prices">View Live Prices</Link>
                </Button>
              </div>

              <div
                className="animate-fade-in-up mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3 lg:mx-0"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="glass hover-lift flex items-center gap-4 rounded-lg px-6 py-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Fully Insured</p>
                    <p className="font-semibold text-foreground">100% Secure</p>
                  </div>
                </div>

                <div className="glass hover-lift flex items-center gap-4 rounded-lg px-6 py-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Best Rates</p>
                    <p className="font-semibold text-foreground">Guaranteed</p>
                  </div>
                </div>

                <div className="glass hover-lift flex items-center gap-4 rounded-lg px-6 py-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Fast Settlement</p>
                    <p className="font-semibold text-foreground">Same Day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advertising slideshow — full visibility */}
            <div className="mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-primary lg:text-left">
                See what we offer
              </p>
              <PromoImageSlideshow variant="hero" />
            </div>
          </div>
        </div>

        <div
          className="animate-fade-in-up flex flex-col items-center gap-2 pb-10"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="text-xs tracking-widest text-muted-foreground uppercase">Scroll to Explore</span>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary/30 pt-2">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
