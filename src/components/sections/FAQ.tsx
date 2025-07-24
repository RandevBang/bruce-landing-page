'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What are the different types of insurance?",
      answer: "We offer several types of trade insurance including Public Liability Insurance, Professional Indemnity Insurance, Tools and Equipment Insurance, Personal Accident Insurance, Motor Insurance, and specialized coverage for various trades like electricians, plumbers, and builders."
    },
    {
      question: "Why do I need trade insurance?",
      answer: "Trade insurance protects your business, livelihood, and personal assets from unexpected claims, accidents, and damages. It's often required by law for many trades and provides peace of mind knowing you're covered against liability claims, equipment theft, and work-related injuries."
    },
    {
      question: "How do I choose the right insurance company?",
      answer: "Look for insurers with experience in trade insurance, competitive pricing, excellent customer service, fast claims processing, and coverage that matches your specific trade needs. We work with leading Australian insurers to provide you with the best options."
    },
    {
      question: "How does trade insurance benefit businesses?",
      answer: "Trade insurance protects your business revenue, covers legal costs, replaces stolen or damaged tools, provides income protection during recovery from accidents, and helps maintain your professional reputation by ensuring you can fulfill your obligations to clients."
    },
    {
      question: "What types of risks does trade insurance cover?",
      answer: "Trade insurance typically covers public liability claims, professional indemnity issues, tool theft and damage, workplace accidents, vehicle damage, equipment breakdown, and business interruption. Specific coverage depends on your policy and trade type."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-bruce-secondary">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Your guide to understanding trade insurance. Get the answers you need to make informed decisions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}