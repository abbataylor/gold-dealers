"use client"

import { useEffect, useRef } from "react"
import { Award, Users, Globe, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, value: "10,000+", label: "Active Clients" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: TrendingUp, value: "$2B+", label: "Gold Traded" },
  { icon: Award, value: "15+", label: "Years Experience" },
]

export function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M200 50 L350 350 L50 350 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="reveal inline-block text-sm font-medium text-primary uppercase tracking-widest">
                About NITA
              </span>
              <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                A Legacy of Trust in{" "}
                <span className="text-gold-gradient">Precious Metals</span>
              </h2>
            </div>

            <div className="reveal space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                For over 15 years, NITA Gold Dealers has been the premier destination 
                for discerning investors seeking to safeguard their wealth through 
                precious metals.
              </p>
              <p className="leading-relaxed">
                Our commitment to excellence, transparency, and security has earned 
                us the trust of thousands of clients worldwide. From individual investors 
                to institutional portfolios, we provide tailored solutions that meet 
                the unique needs of each client.
              </p>
            </div>

            {/* Values */}
            <div className="reveal grid grid-cols-2 gap-4">
              {["Integrity First", "Secure Transactions", "Expert Guidance", "Competitive Rates"].map(
                (value) => (
                  <div key={value} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">{value}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="reveal glass p-6 rounded-xl hover-lift group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-gold-gradient mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
