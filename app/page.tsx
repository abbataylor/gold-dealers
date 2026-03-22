import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PriceTicker } from "@/components/price-ticker"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SecuritySection } from "@/components/security-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParallaxDivider } from "@/components/parallax-divider"
import { PromoImageSlideshow } from "@/components/promo-image-slideshow"
import { HomeGalleryPreview } from "@/components/home-gallery-preview"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PriceTicker />
      <section className="border-y border-border bg-charcoal py-6 md:py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
            More from our showroom — auto-plays; use arrows to browse
          </p>
          <PromoImageSlideshow variant="banner" maxSlides={6} />
        </div>
      </section>
      <AboutSection />

      <HomeGalleryPreview />
      
      {/* Parallax Divider 1 - After About */}
      <ParallaxDivider
        image="/images/parallax-1.jpg"
        title="Trusted Since 1998"
        subtitle="Over two decades of excellence in precious metals trading"
      />
      
      <ServicesSection />

      <section
        id="photo-slideshow"
        className="border-y border-border bg-charcoal py-10 md:py-12"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
            Featured photos — slideshow (auto-play, or use arrows)
          </p>
          <PromoImageSlideshow variant="banner" maxSlides={6} startIndex={6} />
        </div>
      </section>
      
      {/* Parallax Divider 2 - After services spotlight */}
      <ParallaxDivider
        image="/images/parallax-2.jpg"
        title="Secure Your Future"
        subtitle="Gold has been a symbol of wealth preservation for millennia"
        height="350px"
      />
      
      <WhyUsSection />
      <TestimonialsSection />
      
      {/* Parallax Divider 3 - After Testimonials */}
      <ParallaxDivider
        image="/images/parallax-3.jpg"
        title="Premium Quality"
        subtitle="Only the finest certified gold products"
        height="300px"
      />
      
      <SecuritySection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
