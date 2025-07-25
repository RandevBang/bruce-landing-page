'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sandra S.",
      image: "/images/testimonials/sandra-s.small.png",
      content: "I highly recommend Trades Insurance to any person in business today. Some [people think they can do insurance without using a broker, I don't have the time and energy for this. Trades Insurance makes every process seamlessly simple and my claims are processed quickly with refunds I am very happy with. They are a very honest company that I trust."
    },
    {
      name: "Phil W.",
      image: "/images/testimonials/phil-w.small.png", 
      content: "IQPC have been using Trades Insurance since 1994. They have saved us hundreds of hours and MANY thousands of dollars finding the best deals, and handling the claims that inevitably arise when you are in business for such a long time. I have dealt with many of their staff over the years. They have always been highly professional and unfailingly competent. I cannot recommend them highly enough!"
    },
    {
      name: "Andrew A.",
      image: "/images/testimonials/andrew-a.small.png",
      content: "Bebe has assisted me in defining the appropriate insurance for my new business venture. Especially beneficial was an enquiry I made post accepting the insurance and paying the premium ... wherein I needed to check coverage in a particular instance. Bebe extracted the relevant clauses from the policy and responded along with a brief explanation that addressed my concerns. Thank you Bebe!"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-bruce-primary mb-6">
              What Clients Say About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our main measure of success is the happiness of our clients. Hear some of their stories about how we have helped them get peace of mind with trade insurance.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              {/* Testimonial Content */}
              <div className="max-w-4xl mx-auto px-12">
                <div className="text-center">
                  <div className="mb-6">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full mx-auto border-4 border-gray-200"
                    />
                  </div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <cite className="text-xl font-semibold text-bruce-primary not-italic">
                    {testimonials[currentTestimonial].name}
                  </cite>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-bruce-secondary'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}