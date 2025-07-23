import Image from 'next/image'

export function BusinessLogos() {
  const businessLogos = [
    {
      name: "Site Logo",
      src: "/images/logos/site-logo.png",
      alt: "Site Business Logo"
    },
    {
      name: "Trades Logo", 
      src: "/images/logos/trades-logo.png",
      alt: "Trades Business Logo"
    },
    {
      name: "Dental Logo",
      src: "/images/logos/dental-logo.png", 
      alt: "Dental Business Logo"
    },
    {
      name: "Professional Logo",
      src: "/images/logos/professional-logo.png",
      alt: "Professional Business Logo"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
              Our Businesses
            </h3>
          </div>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {businessLogos.map((logo, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow w-full h-24"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Additional trust indicators */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Protecting 10,000+ tradespeople nationwide • AFSL Licensed • Australian Owned
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}