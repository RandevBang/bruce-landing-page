import Image from 'next/image'

export function TrustedByTradies() {
  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-bruce-secondary">Trusted by</span>{" "}
            <span className="text-bruce-primary">tradies Australia wide</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            For over 30 years the team at Trades Insurance have worked with hundreds of Australian businesses and tradies to help them focus on work and not worry about insurance.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Reviews Count */}
            <div className="text-center">
              <div className="font-bold text-bruce-primary mb-2" style={{fontSize: '36px'}}>
                208
              </div>
              <div className="text-gray-600 font-medium" style={{lineHeight: '40px'}}>
                Reviews
              </div>
            </div>

            {/* Rating */}
            <div className="text-center">
              <div className="font-bold text-bruce-primary mb-2" style={{fontSize: '36px'}}>
                4.9/5
              </div>
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/images/rating-stars.png"
                  alt="4.9 out of 5 star rating"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-gray-600 font-medium" style={{lineHeight: '40px'}}>Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}