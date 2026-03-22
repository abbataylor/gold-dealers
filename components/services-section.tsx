"use client"

import { useEffect, useRef } from "react"
import { Coins, Banknote, Lock, LineChart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Coins,
    title: "Buy Gold",
    description:
      "Purchase certified gold bars and coins at competitive market rates. Wide selection of investment-grade products from renowned mints worldwide.",
    features: ["Certified Products", "Market Rates", "Secure Delivery"],
  },
  {
    icon: Banknote,
    title: "Sell Gold",
    description:
      "Get the best value for your gold with our transparent pricing. Same-day settlements and instant quotes for all precious metals.",
    features: ["Instant Quotes", "Same-Day Settlement", "Best Prices"],
  },
  {
    icon: Lock,
    title: "Secure Storage",
    description:
      "State-of-the-art vault facilities with full insurance coverage. 24/7 monitoring and allocated storage options for your peace of mind.",
    features: ["Full Insurance", "Allocated Storage", "24/7 Security"],
  },
  {
    icon: LineChart,
    title: "Investment Advisory",
    description:
      "Expert guidance from seasoned professionals. Portfolio diversification strategies and market insights to maximize your returns.",
    features: ["Expert Advice", "Portfolio Strategy", "Market Analysis"],
  },
]

export function ServicesSection() {
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
    <section ref={sectionRef} id="services" className="relative overflow-hidden py-24 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Comprehensive Gold{" "}
            <span className="text-gold-gradient">Trading Solutions</span>
          </h2>
          <p className="reveal text-lg text-muted-foreground">
            From acquisition to storage, we provide end-to-end services tailored 
            to meet the needs of both individual and institutional investors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal glass-gold rounded-2xl p-8 group hover-lift"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto text-primary hover:bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
