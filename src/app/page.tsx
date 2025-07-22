import { Hero } from "@/components/sections/Hero"
import { BusinessLogos } from "@/components/sections/BusinessLogos"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { QuoteForm } from "@/components/sections/QuoteForm"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BusinessLogos />
      <WhyChooseUs />
      <QuoteForm />
      <Footer />
    </main>
  )
}