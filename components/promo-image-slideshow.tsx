"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { ArrowLeft, ArrowRight, MessageCircle, Phone } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  SITE_DECOR_IMAGES,
  getPromoTagline,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "@/lib/site-images"

export interface PromoImageSlideshowProps {
  variant?: "hero" | "banner"
  /** Limit how many photos rotate (e.g. mid-page strip). Defaults to all. */
  maxSlides?: number
  className?: string
}

export function PromoImageSlideshow({
  variant = "hero",
  maxSlides,
  className,
}: PromoImageSlideshowProps) {
  const slides = React.useMemo(
    () =>
      maxSlides != null
        ? SITE_DECOR_IMAGES.slice(0, maxSlides)
        : [...SITE_DECOR_IMAGES],
    [maxSlides]
  )
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  React.useEffect(() => {
    if (!api || paused) return
    const id = window.setInterval(() => {
      api.scrollNext()
    }, variant === "banner" ? 3500 : 5000)
    return () => window.clearInterval(id)
  }, [api, paused, variant])

  const isHero = variant === "hero"

  return (
    <div
      className={cn(
        isHero ? "w-full" : "w-full",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className={cn(
          "w-full",
          isHero &&
            "rounded-2xl border border-primary/35 bg-card/40 shadow-2xl shadow-primary/10 ring-1 ring-primary/20"
        )}
        aria-label="Promotional photos — contact us"
      >
        <CarouselContent
          className={cn("-ml-0", !isHero && "rounded-none")}
        >
          {slides.map((src, index) => {
            const active = current === index
            return (
              <CarouselItem
                key={src}
                className={cn("basis-full pl-0", !isHero && "min-h-0")}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    isHero
                      ? "aspect-[3/4] min-h-[300px] sm:aspect-[4/5] sm:min-h-[360px] md:min-h-[min(58vh,580px)] md:max-h-[min(62vh,620px)] rounded-2xl"
                      : "h-72 sm:h-80 md:h-[min(28rem,52vh)]"
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0",
                      active && "animate-ken-burns"
                    )}
                  >
                    <Image
                      src={src}
                      alt={`${getPromoTagline(index)} — NITA Gold Dealers`}
                      fill
                      sizes={
                        isHero
                          ? "(max-width: 768px) 100vw, 50vw"
                          : "100vw"
                      }
                      className="object-cover"
                      priority={variant === "hero" && index === 0}
                    />
                  </div>

                  {/* Bottom band only — keeps photos bright & visible like a showroom site */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-black via-black/35 to-transparent"
                    aria-hidden
                  />

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                    <p
                      className={cn(
                        "font-serif font-bold text-white drop-shadow-md",
                        isHero ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-2xl md:text-3xl"
                      )}
                    >
                      {getPromoTagline(index)}
                    </p>
                    <p className="mt-1 text-sm text-white/85 sm:text-base">
                      Questions? Reach out — we respond fast.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                      <Button
                        size={isHero ? "default" : "sm"}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                        asChild
                      >
                        <Link href="/#contact">
                          <MessageCircle className="mr-2 size-4" />
                          Contact us
                        </Link>
                      </Button>
                      <Button
                        size={isHero ? "default" : "sm"}
                        variant="outline"
                        className="border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                        asChild
                      >
                        <a href={`tel:${SITE_PHONE_TEL}`}>
                          <Phone className="mr-2 size-4" />
                          {SITE_PHONE_DISPLAY}
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm sm:text-xs">
                    Ad {index + 1} / {slides.length}
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="size-9 shrink-0 rounded-full border-primary/40"
            aria-label="Previous photo"
            onClick={() => api?.scrollPrev()}
          >
            <ArrowLeft className="size-4" />
          </Button>
          <span className="min-w-[5.5rem] text-center text-sm tabular-nums text-muted-foreground">
            {current + 1} / {slides.length}
          </span>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="size-9 shrink-0 rounded-full border-primary/40"
            aria-label="Next photo"
            onClick={() => api?.scrollNext()}
          >
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Carousel>
    </div>
  )
}
