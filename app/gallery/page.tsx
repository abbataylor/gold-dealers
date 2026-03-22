import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GalleryShowcase } from "@/components/gallery-showcase"
import { Button } from "@/components/ui/button"
import { GALLERY_ITEMS } from "@/lib/site-images"

export const metadata: Metadata = {
  title: "Gallery | NITA Gold Dealers",
  description:
    `Browse ${GALLERY_ITEMS.length} full-size photos of our gold, operations, and products. Click any image to enlarge.`,
  openGraph: {
    title: "Gallery | NITA Gold Dealers",
    description: "Explore our full photo gallery — premium gold and precious metals.",
    type: "website",
  },
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-charcoal pt-28 pb-14 md:pt-32 md:pb-16">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Photo gallery
            </p>
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Our <span className="text-gold-gradient">showcase</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Large, clear images—similar to how leading dealers present inventory. Click any
              photo to view it full size, use arrow keys to browse, then reach out when you are
              ready.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contact">Contact us</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/40">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <GalleryShowcase />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
