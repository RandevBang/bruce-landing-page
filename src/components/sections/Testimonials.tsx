'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Gaven C.",
      image: "/images/testimonials/gaven.png",
      content: "Extremely smooth process and accommodating service from Paul @ Bruce insurance. Competitive pricing and the best for our company."
    },
    {
      name: "Rachel G.",
      image: "/images/testimonials/rachel.png", 
      content: "I deal With Sasha Gilby at Bruce insurance and she could not be more personable, and thoughtful when it comes to meeting my business insurance needs. I have been consistently using these guys for years now and I have not had any major issues."
    },
    {
      name: "Jennifer B.",
      image: "/images/testimonials/jen.png",
      content: "Their teamwork is seamless and intuitive, thanks to Sabrina, Erin, and Nick for their outstanding support. Bruce Insurance is dedicated to finding the right insurance coverage tailored to our business needs. They consistently search for the most competitive pricing and handle every query with impressive efficiency. It's like they're on autopilot. Cheers"
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