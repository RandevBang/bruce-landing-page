'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { FileText, Shield, Clock } from "lucide-react"

export function QuoteForm() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-bruce-primary mb-6">
              Get Your Quote Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete our simple form to get an instant quote for your trade insurance. 
              It takes less than 2 minutes and you'll have comprehensive coverage options tailored to your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Benefits */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-bruce-primary mb-6">
                Why Choose Our Trade Insurance?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-bruce-orange-100 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-bruce-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Quick & Easy Process</h4>
                    <p className="text-gray-600">Get covered in less than 2 minutes with our streamlined application process.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-bruce-orange-100 p-3 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-bruce-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Comprehensive Coverage</h4>
                    <p className="text-gray-600">Public liability, professional indemnity, and tools coverage all in one package.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-bruce-orange-100 p-3 rounded-lg flex-shrink-0">
                    <FileText className="w-6 h-6 text-bruce-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Instant Quotes</h4>
                    <p className="text-gray-600">Receive your personalized quote immediately with competitive pricing.</p>
                  </div>
                </div>
              </div>

              {/* Insurance Types */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 text-bruce-primary">Specialized Coverage For:</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-bruce-secondary rounded-full"></div>
                    <span>Electricians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-bruce-secondary rounded-full"></div>
                    <span>Plumbers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-bruce-secondary rounded-full"></div>
                    <span>Builders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-bruce-secondary rounded-full"></div>
                    <span>Carpenters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-bruce-secondary rounded-full"></div>
                    <span>HVAC Technicians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-bruce-secondary rounded-full"></div>
                    <span>And many more...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form (Iframe placeholder) */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-bruce-primary mb-2">
                  Get Your Free Quote
                </h3>
                <p className="text-gray-600">Fill out the form below for an instant quote</p>
              </div>

              {/* Trade Insurance Quote Form */}
              <div className="rounded-lg overflow-hidden min-h-[500px]">
                <iframe 
                  src="https://tradesinsurance.insurenet.net.au/index.php/Bruce/iframe" 
                  width="100%" 
                  height="500"
                  frameBorder="0"
                  title="Trade Insurance Quote Form"
                  className="border-0 w-full"
                  loading="lazy"
                >
                  <p>Your browser does not support iframes. Please visit the form directly at: 
                    <a href="https://tradesinsurance.insurenet.net.au/index.php/Bruce/iframe" target="_blank" rel="noopener noreferrer">
                      Trade Insurance Quote Form
                    </a>
                  </p>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}