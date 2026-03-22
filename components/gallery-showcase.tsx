"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { GALLERY_ITEMS } from "@/lib/site-images"
import { cn } from "@/lib/utils"

export function GalleryShowcase() {
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  const openAt = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  const go = (delta: number) => {
    setIndex((i) => (i + delta + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)
  }

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)
      }
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % GALLERY_ITEMS.length)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const current = GALLERY_ITEMS[index]

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => openAt(i)}
            className={cn(
              "group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-primary/25 bg-card text-left shadow-md transition-all",
              "hover:border-primary/55 hover:shadow-xl hover:shadow-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 p-4">
              <span className="line-clamp-2 text-sm font-medium text-white drop-shadow md:text-base">
                {item.caption}
              </span>
              <span className="mt-1 block text-xs text-white/75">Click to enlarge</span>
            </span>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-h-[95vh] w-[min(100vw-1rem,1200px)] max-w-[95vw] border-primary/30 bg-background p-0"
        >
          <DialogTitle className="sr-only">
            {current ? current.caption : "Gallery image"}
          </DialogTitle>
          {current && (
            <div className="relative flex flex-col">
              <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
                <p className="min-w-0 flex-1 truncate font-serif text-base font-semibold text-foreground md:text-lg">
                  {current.caption}
                </p>
                <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                  {index + 1} / {GALLERY_ITEMS.length}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="shrink-0"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  <X className="size-5" />
                </Button>
              </div>
              <div className="relative aspect-[4/3] w-full bg-black md:aspect-video lg:max-h-[min(75vh,800px)]">
                <Image
                  src={current.src}
                  alt={current.caption}
                  fill
                  className="object-contain"
                  sizes="95vw"
                  priority
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-4">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="shrink-0 rounded-full"
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/#contact">Contact us about this</Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="shrink-0 rounded-full"
                  onClick={() => go(1)}
                  aria-label="Next image"
                >
                  <ChevronRight className="size-5" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
