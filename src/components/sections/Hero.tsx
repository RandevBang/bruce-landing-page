import { Button } from "@/components/ui/button"
import { Shield, Clock, CheckCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-bruce-navy-900 to-bruce-navy-800 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Protect your livelihood and tools with ease
          </h1>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl mb-8 text-bruce-navy-100 font-light">
            Our trade insurance offers comprehensive coverage and peace of mind
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-bruce-orange-300" />
              <span className="text-lg">Get covered in less than 2 minutes</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-bruce-orange-300" />
              <span className="text-lg">Comprehensive coverage</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-bruce-orange-300" />
              <span className="text-lg">Instant quotes</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-bruce-secondary hover:bg-bruce-orange-600 text-white border-0 text-lg px-8 py-3 h-auto font-semibold"
            >
              Get Your Quick Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-bruce-navy hover:bg-white/10 hover:text-white text-lg px-8 py-3 h-auto font-semibold"
            >
              Learn More
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-bruce-navy-700/50">
            <p className="text-bruce-navy-200 mb-4">Trusted by thousands of tradespeople across Australia</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              {/* Placeholder for trust badges/logos */}
              <div className="text-sm bg-bruce-navy-800/50 px-4 py-2 rounded-full border border-bruce-navy-600">AFSL Licensed</div>
              <div className="text-sm bg-bruce-navy-800/50 px-4 py-2 rounded-full border border-bruce-navy-600">Australian Owned</div>
              <div className="text-sm bg-bruce-navy-800/50 px-4 py-2 rounded-full border border-bruce-navy-600">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}