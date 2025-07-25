import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Image
              src="/images/logos/trades-logo.png"
              alt="Trades Insurance Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="https://www.bruce.com.au/about/our-team/" target="_blank" className="text-gray-700 hover:text-bruce-primary">Our Team</a>
            <a href="https://www.bruce.com.au/contact-us/?brand-id=183" target="_blank" className="text-gray-700 hover:text-bruce-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </header>
  )
}