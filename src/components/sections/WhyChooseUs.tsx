import { Shield, Clock, Award, Users, Phone, CheckCircle } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Public liability, professional indemnity, and tools coverage tailored for your trade."
    },
    {
      icon: Clock,
      title: "2-Minute Process",
      description: "Quick application process with instant quotes and immediate policy documents."
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Specialized insurance solutions designed specifically for Australian tradespeople."
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join thousands of satisfied tradespeople who trust us with their insurance needs."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support when you need help with claims or questions."
    },
    {
      icon: CheckCircle,
      title: "Competitive Pricing",
      description: "Get the best value with our competitive rates and flexible payment options."
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-bruce-primary mb-6">
              Why Choose Our Trade Insurance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges tradespeople face. Our insurance solutions 
              are designed to protect what matters most to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-bruce-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-bruce-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-bruce-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Process Steps */}
          <div className="mt-20">
            <h3 className="text-2xl lg:text-3xl font-bold text-bruce-primary text-center mb-12">
              Simple 3-Step Process
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-bruce-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="text-lg font-semibold mb-2 text-bruce-primary">Fill Out Form</h4>
                <p className="text-gray-600">Complete our quick form with your trade details and coverage needs.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-bruce-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="text-lg font-semibold mb-2 text-bruce-primary">Get Instant Quote</h4>
                <p className="text-gray-600">Receive your personalized quote immediately with competitive pricing.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-bruce-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="text-lg font-semibold mb-2 text-bruce-primary">Get Covered</h4>
                <p className="text-gray-600">Complete your purchase and receive your policy documents instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}