import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function InsuranceTypes() {
  const insuranceTypes = [
    {
      title: "Public Liability Insurance",
      description: "Safeguard your trade against liability claims. Our Public Liability Insurance offers robust protection for accidents and damages, ensuring peace of mind in your daily operations.",
      icon: "/images/icons/public-liability.png"
    },
    {
      title: "Personal Accident Insurance", 
      description: "Stay protected against unforeseen accidents. Our Personal Accident Insurance covers serious injuries and illnesses, ensuring you're financially supported during recovery.",
      icon: "/images/icons/personal-accident.png"
    },
    {
      title: "Machinery and Equipment Insurance",
      description: "Guard against equipment failures and damages. Our Machinery and Equipment Insurance covers critical machinery, keeping your operations uninterrupted and profitable.",
      icon: "/images/icons/machinery-equipment.png"
    },
    {
      title: "Tools of Trade Insurance",
      description: "Secure your essential tools against theft and damage. Our Tools of the Trade Insurance minimises downtime, swiftly replacing your vital equipment to keep your business running smoothly.",
      icon: "/images/icons/tools-trade.png"
    },
    {
      title: "Motor Insurance",
      description: "Keep your business on the move with our Motor Insurance. Tailored for light to heavy vehicles, we ensure your transport lifeline is always protected.",
      icon: "/images/icons/motor-insurance.png"
    },
    {
      title: "Electrician Insurance",
      description: "Specialised cover for electrical trades. Our Electrician Insurance provides comprehensive protection for your tools, liabilities, and unforeseen work-related incidents.",
      icon: "/images/icons/electrician.png"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Tailored insurance solutions for every trade need. Explore our range of specialised coverages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-bruce-primary rounded-full mb-6 mx-auto">
                  <Image
                    src={type.icon}
                    alt={`${type.title} icon`}
                    width={32}
                    height={32}
                    className="filter invert brightness-0 contrast-100"
                  />
                </div>
                <h3 className="text-xl font-semibold text-bruce-primary mb-4 text-center">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
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
    </section>
  )
}