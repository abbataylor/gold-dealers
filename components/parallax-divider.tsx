"use client"

import { useEffect, useRef, useState } from "react"

interface ParallaxDividerProps {
  image: string
  height?: string
  title?: string
  subtitle?: string
}

export function ParallaxDivider({
  image,
  height = "400px",
  title,
  subtitle,
}: ParallaxDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (dividerRef.current) {
        const rect = dividerRef.current.getBoundingClientRect()
        const scrollPosition = window.scrollY
        const sectionTop = scrollPosition + rect.top
        const relativeScroll = scrollPosition - sectionTop + window.innerHeight
        setOffsetY(relativeScroll * 0.3)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (dividerRef.current) {
      observer.observe(dividerRef.current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={dividerRef}
      className="relative overflow-hidden"
      style={{ height }}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-[140%] -top-[20%] bg-cover bg-center bg-no-repeat transition-transform duration-100"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Content */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {title && (
            <h3
              className={`text-3xl md:text-5xl font-serif font-bold text-gold-gradient mb-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-2xl transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Decorative Elements */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/20 rounded-full transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/10 rounded-full transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />
    </div>
  )
}
