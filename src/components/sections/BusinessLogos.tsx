export function BusinessLogos() {
  // Placeholder business names - these would be replaced with actual partner businesses
  const businesses = [
    "TradeMasters",
    "BuildPro",
    "ElectriConnect", 
    "PlumbSure",
    "ToolCraft",
    "SafeBuild"
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
              Trusted by leading trade businesses across Australia
            </h3>
          </div>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {businesses.map((business, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  {/* Placeholder logo - in production, these would be actual logo images */}
                  <div className="w-16 h-12 bg-gradient-to-r from-[#131A46] to-gray-400 rounded-md flex items-center justify-center mb-2">
                    <span className="text-white text-xs font-bold">
                      {business.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">
                    {business}
                  </span>
                </div>
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