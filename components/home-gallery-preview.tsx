import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Images } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GALLERY_ITEMS } from "@/lib/site-images"

const PREVIEW_COUNT = 8

export function HomeGalleryPreview() {
  const preview = GALLERY_ITEMS.slice(0, PREVIEW_COUNT)

  return (
    <section className="border-y border-border bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary">
              <Images className="size-4" />
              Our gallery
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              See the gold & products{" "}
              <span className="text-gold-gradient">we stand behind</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Full-size photos—no hiding behind tiny thumbnails. Browse the complete gallery for every shot.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/gallery">
              View full gallery
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {preview.map((item, i) => (
            <Link
              key={item.src}
              href="/gallery"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/25 bg-card shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 md:aspect-[3/4]"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <p className="absolute inset-x-0 bottom-0 line-clamp-2 p-3 text-xs font-medium text-white drop-shadow md:text-sm">
                {item.caption}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
