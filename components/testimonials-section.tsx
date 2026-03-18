"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Jonathan Sterling",
    role: "Private Investor",
    location: "New York, USA",
    image: "/testimonials/client-1.jpg",
    rating: 5,
    text: "Zenith Gold Dealers has transformed the way I invest in precious metals. Their transparent pricing and exceptional customer service make them stand out in the industry. I've been a client for 5 years and couldn't be happier.",
  },
  {
    id: 2,
    name: "Elizabeth Chen",
    role: "Portfolio Manager",
    location: "Singapore",
    image: "/testimonials/client-2.jpg",
    rating: 5,
    text: "As a portfolio manager handling significant precious metal allocations, I need a partner I can trust. Zenith delivers on every front - competitive rates, fast execution, and secure storage options. Simply the best in the business.",
  },
  {
    id: 3,
    name: "Marcus von Hohenberg",
    role: "Family Office Director",
    location: "Zurich, Switzerland",
    image: "/testimonials/client-3.jpg",
    rating: 5,
    text: "The level of professionalism and attention to detail at Zenith is remarkable. They understand the unique needs of high-net-worth families and provide tailored solutions that give us complete peace of mind.",
  },
  {
    id: 4,
    name: "Sarah Al-Rashid",
    role: "Corporate Treasurer",
    location: "Dubai, UAE",
    image: "/testimonials/client-4.jpg",
    rating: 5,
    text: "We chose Zenith for our corporate gold reserves and it was the right decision. Their institutional-grade services, combined with unbeatable security measures, make them the obvious choice for serious investors.",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
    <section ref={sectionRef} id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Client Testimonials
          </span>
          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="text-gold-gradient">Industry Leaders</span>
          </h2>
          <p className="reveal text-lg text-muted-foreground">
            Hear what our clients have to say about their experience with Zenith Gold Dealers.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="reveal max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                {`"${testimonials[currentIndex].text}"`}
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="reveal text-center text-xs text-muted-foreground mt-8">
          * Testimonials are from verified clients. Names and details shared with permission.
        </p>
      </div>
    </section>
  )
}
