import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-bruce-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="text-bruce-secondary">get started?</span>
          </h2>
          <p className="text-xl text-bruce-navy-100 mb-8 leading-relaxed">
            Want to make sure that you, your business and your livelihood are comprehensively safeguarded? Click the button below, fill out the 30-second form and our team will get in touch to provide a quote.
          </p>
          <a href="#quote-form">
            <Button 
              size="lg"
              className="bg-white text-bruce-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}