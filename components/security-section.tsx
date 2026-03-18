"use client"

import { useEffect, useRef } from "react"
import { ShieldCheck, Lock, FileCheck, Award, Server, Fingerprint } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "256-bit Encryption",
    description: "All data transmissions protected with military-grade encryption.",
  },
  {
    icon: Server,
    title: "Secure Servers",
    description: "ISO 27001 certified data centers with 99.99% uptime.",
  },
  {
    icon: Fingerprint,
    title: "Multi-Factor Auth",
    description: "Enhanced account security with biometric verification.",
  },
  {
    icon: FileCheck,
    title: "KYC/AML Compliant",
    description: "Full regulatory compliance for all transactions.",
  },
]

const certifications = [
  { name: "ISO 27001", subtitle: "Information Security" },
  { name: "SOC 2", subtitle: "Type II Certified" },
  { name: "LBMA", subtitle: "Good Delivery" },
  { name: "COMEX", subtitle: "Approved" },
]

export function SecuritySection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="reveal inline-block text-sm font-medium text-primary uppercase tracking-widest">
                Security & Compliance
              </span>
              <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                Your Assets,{" "}
                <span className="text-gold-gradient">Protected</span>
              </h2>
            </div>

            <p className="reveal text-lg text-muted-foreground leading-relaxed">
              At NITA Gold Dealers, security isn{"'"}t just a feature—it{"'"}s our foundation. 
              We employ industry-leading security measures to ensure your investments 
              and personal information remain completely safe.
            </p>

            {/* Security Features */}
            <div className="reveal grid grid-cols-2 gap-4">
              {securityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="reveal">
            <div className="glass-gold rounded-2xl p-8 relative">
              {/* Shield Icon */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-primary" />
              </div>

              <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                Industry Certifications
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="bg-background/50 rounded-lg p-4 text-center hover-lift"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-bold text-foreground">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  All certifications are verified and regularly audited by independent third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
