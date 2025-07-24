import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function WhyChooseUs() {
  const features = [
    {
      icon: "/images/icons/18leknh-features-icom-1_1000000000000000000028.png",
      title: "Personal & Business Protection",
      description: "Accidents happen but that shouldn't mean the end of your business"
    },
    {
      icon: "/images/icons/1t1hyyl-features-icom_1000000000000000000028.png",
      title: "Tools and Equipment Safety",
      description: "Comprehensive coverage and fast replacement for stolen tools"
    },
    {
      icon: "/images/icons/246np5-features-icom-2_1000000000000000000028.png",
      title: "Peace of Mind on Site",
      description: "With personal and public liability coverage you can get to work in peace"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-bruce-primary mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a tradie, the right insurance is vital. It not only protects your business but also secures your future. Discover how our trade insurance benefits you:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-bruce-orange-100 rounded-full mb-6 mx-auto">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={40}
                    height={40}
                    className="filter"
                  />
                </div>
                <h3 className="text-xl font-semibold text-bruce-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
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