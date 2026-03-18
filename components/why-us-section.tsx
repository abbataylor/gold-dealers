"use client"

import { useEffect, useRef } from "react"
import { Shield, Zap, BadgeCheck, Headphones, Scale, Eye } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "Your investments are protected with military-grade encryption and fully insured storage facilities.",
  },
  {
    icon: Scale,
    title: "Transparent Pricing",
    description:
      "No hidden fees. Clear, competitive rates based on real-time market data with full cost breakdown.",
  },
  {
    icon: Zap,
    title: "Fast Transactions",
    description:
      "Same-day settlement for sales. Quick processing for purchases with real-time confirmation.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Products",
    description:
      "Every piece verified for authenticity. We deal exclusively in certified, investment-grade precious metals.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Dedicated account managers and 24/7 customer support to assist with all your needs.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Track your portfolio in real-time. Complete visibility into your holdings and transaction history.",
  },
]

export function WhyUsSection() {
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
    <section ref={sectionRef} id="why-us" className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            The NITA{" "}
            <span className="text-gold-gradient">Advantage</span>
          </h2>
          <p className="reveal text-lg text-muted-foreground">
            We combine industry expertise with cutting-edge technology to deliver 
            an unmatched gold trading experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="reveal text-center group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
