import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#131A46] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Bruce Insurance</h3>
              <p className="text-blue-200 mb-4 leading-relaxed">
                Protecting Australian tradespeople with comprehensive, affordable insurance solutions tailored to your industry.
              </p>
              <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>1300 XXX XXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@bruce.com.au</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Australia Wide</span>
                </div>
              </div>
            </div>

            {/* Insurance Types */}
            <div>
              <h4 className="font-semibold mb-4">Insurance Types</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Public Liability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Professional Indemnity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tools & Equipment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Insurance</a></li>
              </ul>
            </div>

            {/* Trade Types */}
            <div>
              <h4 className="font-semibold mb-4">Trade Coverage</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Electricians</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Plumbers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Builders</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carpenters</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HVAC Technicians</a></li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Claims Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-700/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-blue-200 mb-4 md:mb-0">
              © 2024 Bruce Insurance. All rights reserved. AFSL License #XXXXXX
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="bg-white/10 px-3 py-1 rounded-full">Australian Owned</div>
              <div className="bg-white/10 px-3 py-1 rounded-full">AFSL Licensed</div>
              <div className="bg-white/10 px-3 py-1 rounded-full">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}