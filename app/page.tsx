import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PriceTicker } from "@/components/price-ticker"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { LivePricesSection } from "@/components/live-prices-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SecuritySection } from "@/components/security-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParallaxDivider } from "@/components/parallax-divider"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PriceTicker />
      <AboutSection />
      
      {/* Parallax Divider 1 - After About */}
      <ParallaxDivider
        image="/images/parallax-1.jpg"
        title="Trusted Since 1998"
        subtitle="Over two decades of excellence in precious metals trading"
      />
      
      <ServicesSection />
      <LivePricesSection />
      
      {/* Parallax Divider 2 - After Live Prices */}
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
