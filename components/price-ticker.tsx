"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

interface PriceItem {
  name: string
  symbol: string
  price: number
  change: number
  unit: string
}

const initialPrices: PriceItem[] = [
  { name: "Gold", symbol: "XAU", price: 2345.67, change: 1.24, unit: "/oz" },
  { name: "Silver", symbol: "XAG", price: 27.89, change: -0.45, unit: "/oz" },
  { name: "Platinum", symbol: "XPT", price: 1023.45, change: 0.89, unit: "/oz" },
  { name: "Palladium", symbol: "XPD", price: 1156.78, change: -1.23, unit: "/oz" },
]

export function PriceTicker() {
  const [prices, setPrices] = useState(initialPrices)

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) =>
        prev.map((item) => ({
          ...item,
          price: item.price + (Math.random() - 0.5) * 2,
          change: item.change + (Math.random() - 0.5) * 0.1,
        }))
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-charcoal border-y border-border overflow-hidden">
      <div className="flex animate-ticker">
        {[...prices, ...prices, ...prices, ...prices].map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className="flex items-center gap-4 px-8 py-3 border-r border-border/50 shrink-0"
          >
            <span className="text-sm font-medium text-foreground">{item.name}</span>
            <span className="text-xs text-muted-foreground">{item.symbol}</span>
            <span className="text-sm font-bold text-primary">
              ${item.price.toFixed(2)}
              <span className="text-xs text-muted-foreground">{item.unit}</span>
            </span>
            <span
              className={`flex items-center gap-1 text-xs font-medium ${
                item.change >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.change >= 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {item.change >= 0 ? "+" : ""}
              {item.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
