import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { BusinessLogos } from "@/components/sections/BusinessLogos"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { InsuranceTypes } from "@/components/sections/InsuranceTypes"
import { TrustedByTradies } from "@/components/sections/TrustedByTradies"
import { CTASection } from "@/components/sections/CTASection"
import { Testimonials } from "@/components/sections/Testimonials"
import { RiskCoverage } from "@/components/sections/RiskCoverage"
import { FAQ } from "@/components/sections/FAQ"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BusinessLogos />
      <WhyChooseUs />
      <ProcessSection />
      <InsuranceTypes />
      <CTASection />
      <Testimonials />
      <TrustedByTradies />
      <RiskCoverage />
      <FAQ />
      <Footer />
    </main>
  )
}