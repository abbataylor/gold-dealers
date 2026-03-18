"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  backgroundImage: string
  overlayOpacity?: number
  speed?: number
  className?: string
}

export function ParallaxSection({
  children,
  backgroundImage,
  overlayOpacity = 0.7,
  speed = 0.5,
  className = "",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollPosition = window.scrollY
        const sectionTop = scrollPosition + rect.top
        const relativeScroll = scrollPosition - sectionTop + window.innerHeight
        setOffsetY(relativeScroll * speed)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offsetY}px)`,
          willChange: "transform",
        }}
      />
      
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, oklch(0.08 0 0 / ${overlayOpacity}), oklch(0.08 0 0 / ${overlayOpacity + 0.1}))`,
        }}
      />
      
      {/* Gold Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
