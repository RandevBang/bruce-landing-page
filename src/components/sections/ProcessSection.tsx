import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Complete the quote form",
      description: "",
      icon: "/images/process/step1-form.png"
    },
    {
      number: "2", 
      title: "Get your personalised quote",
      description: "",
      icon: "/images/process/step2-quote.png"
    },
    {
      number: "3",
      title: "Get covered in minutes",
      description: "",
      icon: "/images/process/step3-covered.png"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-bruce-primary mb-6">
              The Trades Insurance process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Things happen in a hurry as a tradie – that's why you can rely on us to get you covered fast.
            </p>
          </div>

          {/* Process Steps with Connecting Lines */}
          <div className="relative">            
            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {/* Connecting Line After Step 1 */}
                  {index === 0 && (
                    <div className="hidden md:block absolute top-10 w-20 h-3 bg-bruce-secondary z-0 rounded-lg" style={{top: '80px', right: '-3.3rem'}}></div>
                  )}
                  
                  {/* Connecting Line After Step 2 */}
                  {index === 1 && (
                    <div className="hidden md:block absolute top-10 w-20 h-3 bg-bruce-secondary z-0 rounded-lg" style={{top: '80px', right: '-3.3rem'}}></div>
                  )}
                  
                  {/* Oval Container with Icon */}
                  <div className="relative mx-auto mb-6">
                    <Image
                      src={step.icon}
                      alt={`Step ${step.number} - ${step.title}`}
                      width={128}
                      height={80}
                      className="mx-auto"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-bruce-secondary mb-2">
                    #{step.number}
                  </h3>
                  <h4 className="text-lg font-semibold text-bruce-primary mb-2">
                    {step.title}
                  </h4>
                  {step.description && (
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
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