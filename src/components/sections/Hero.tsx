'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function Hero() {
  const [activeTab, setActiveTab] = useState('public')
  
  const insuranceTypes = [
    { id: 'public', label: 'Public Liability', active: true },
    { id: 'tools', label: 'Tools Insurance', active: false },
    { id: 'personal', label: 'Personal Accident', active: false }
  ]

  return (
    <section className="bg-white py-8 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content & Form */}
          <div className="order-1 lg:order-1">
            <h1 className="text-3xl lg:text-5xl font-bold text-bruce-primary mb-4 leading-tight">
              Instant Trades Insurance. Get covered in less than 2 minutes, all from just{" "}
              <span className="text-bruce-secondary">$35 per month.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Protect your livelihood and tools with ease. Our trade insurance offers comprehensive coverage and peace of mind.
            </p>
            
            <p className="text-base text-gray-700 mb-8 font-medium">
              Get your personalised quote today.
            </p>

            {/* Quote Form Iframe */}
            <div id="quote-form" className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden min-h-[500px]" style={{scrollMarginTop: '300px'}}>
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

          {/* Right Column - Hero Image */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/hero-tradesman.png"
                alt="Happy tradesman"
                width={600}
                height={700}
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}