import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function RiskCoverage() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src="/images/risk-coverage-image.png"
                  alt="Professional trade insurance consultation"
                  width={400}
                  height={500}
                  className="max-w-full"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-bruce-primary mb-6 leading-tight">
                Where there's risk, we make sure you're covered.
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With trade insurance, nothing but rock-solid will do. Access to over 60 insurance providers covering small, boutique providers through to multi-national insurance companies gives us great flexibility to offer you very specific solutions at the best possible price.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fine-toothing every potential loophole in your insurance strategy is a given—it's simply in our DNA to do so. We invest time to get to know you and your business to get everything detailed, secured and sealed.
              </p>

              <a href="#quote-form">
                <Button 
                  size="lg"
                  className="bg-bruce-primary hover:bg-bruce-navy-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Get Your Quote Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}