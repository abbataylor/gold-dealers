"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MetalPrice {
  name: string
  symbol: string
  price: number
  change: number
  changePercent: number
  high: number
  low: number
  unit: string
}

const initialPrices: MetalPrice[] = [
  {
    name: "Gold",
    symbol: "XAU",
    price: 2345.67,
    change: 28.45,
    changePercent: 1.24,
    high: 2358.90,
    low: 2312.40,
    unit: "USD/oz",
  },
  {
    name: "Silver",
    symbol: "XAG",
    price: 27.89,
    change: -0.12,
    changePercent: -0.45,
    high: 28.15,
    low: 27.65,
    unit: "USD/oz",
  },
  {
    name: "Platinum",
    symbol: "XPT",
    price: 1023.45,
    change: 9.12,
    changePercent: 0.89,
    high: 1030.20,
    low: 1010.80,
    unit: "USD/oz",
  },
  {
    name: "Palladium",
    symbol: "XPD",
    price: 1156.78,
    change: -14.32,
    changePercent: -1.23,
    high: 1175.60,
    low: 1148.90,
    unit: "USD/oz",
  },
]

export function LivePricesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [prices, setPrices] = useState(initialPrices)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshPrices = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setPrices((prev) =>
        prev.map((item) => {
          const changeAmount = (Math.random() - 0.5) * item.price * 0.002
          const newPrice = item.price + changeAmount
          return {
            ...item,
            price: newPrice,
            change: changeAmount,
            changePercent: (changeAmount / item.price) * 100,
            high: Math.max(item.high, newPrice),
            low: Math.min(item.low, newPrice),
          }
        })
      )
      setLastUpdate(new Date())
      setIsRefreshing(false)
    }, 500)
  }

  // Set initial time on client only to avoid hydration mismatch
  useEffect(() => {
    setLastUpdate(new Date())
  }, [])

  useEffect(() => {
    const interval = setInterval(refreshPrices, 10000)
    return () => clearInterval(interval)
  }, [])

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
    <section ref={sectionRef} id="prices" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.75 0.12 85) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="reveal inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Live Market Data
            </span>
            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Real-Time{" "}
              <span className="text-gold-gradient">Precious Metal Prices</span>
            </h2>
          </div>
          <div className="reveal flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Last updated: {lastUpdate ? lastUpdate.toLocaleTimeString() : "Loading..."}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={refreshPrices}
              disabled={isRefreshing}
              className="border-primary/30 text-foreground hover:bg-primary/10"
            >
              <RefreshCw
                className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </div>
        </div>

        {/* Price Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prices.map((metal, index) => (
            <div
              key={metal.symbol}
              className="reveal glass rounded-xl p-6 hover-lift group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{metal.symbol}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{metal.name}</h3>
                    <p className="text-xs text-muted-foreground">{metal.unit}</p>
                  </div>
                </div>
                {metal.changePercent >= 0 ? (
                  <TrendingUp className="w-5 h-5 text-green-500" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-500" />
                )}
              </div>

              {/* Price */}
              <p className="text-3xl font-bold text-gold-gradient mb-2">
                ${metal.price.toFixed(2)}
              </p>

              {/* Change */}
              <div
                className={`flex items-center gap-2 text-sm font-medium mb-4 ${
                  metal.changePercent >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                <span>
                  {metal.change >= 0 ? "+" : ""}
                  {metal.change.toFixed(2)}
                </span>
                <span>
                  ({metal.changePercent >= 0 ? "+" : ""}
                  {metal.changePercent.toFixed(2)}%)
                </span>
              </div>

              {/* High/Low */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">24h High</p>
                  <p className="text-sm font-medium text-green-500">
                    ${metal.high.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">24h Low</p>
                  <p className="text-sm font-medium text-red-500">
                    ${metal.low.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="reveal text-center text-xs text-muted-foreground mt-8">
          * Prices are indicative and updated periodically. Final transaction prices may vary.
          Contact us for real-time quotes.
        </p>
      </div>
    </section>
  )
}
