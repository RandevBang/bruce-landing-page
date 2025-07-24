import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-bruce-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Bruce Insurance</h3>
              <p className="text-bruce-navy-200 mb-4 leading-relaxed">
              Protect your livelihood and tools with ease. Our trade insurance offers comprehensive coverage and peace of mind.
              </p>
              <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:0893825600" target="_blank">(08) 9382 5600</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:enquiry@bruce.com.au" target="_blank">enquiry@bruce.com.au</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Australia Wide</span>
                </div>
              </div>
            </div>

            {/* Legal & Support */}
            <div className="text-right">
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-bruce-navy-200">
                <li><a href="https://www.bruce.com.au/financial-services-guide" target="_blank" className="hover:text-white transition-colors">Financial Services Guide</a></li>
                <li><a href="https://www.bruce.com.au/privacy-policy" target="_blank" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="https://www.bruce.com.au/insurance-brokers-code-of-practice/" target="_blank" className="hover:text-white transition-colors">Code of Practice</a></li>
                <li><a href="https://www.bruce.com.au/contact-us/" target="_blank" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="https://www.bruce.com.au/complaints/" target="_blank" className="hover:text-white transition-colors">Complaints</a></li>
                <li><a href="https://www.bruce.com.au/important-notices" target="_blank" className="hover:text-white transition-colors">Important Notices</a></li>
                <li><a href="https://www.bruce.com.au/brubest-finance/" target="_blank" className="hover:text-white transition-colors">Brubest Finance</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Text Bar */}
          <div className="border-t border-bruce-navy-700/30 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
            <div className="text-sm text-blue-200 mb-4 md:mb-0 text-justify">
            General advice on this website has been prepared without taking into account your objectives, financial situation or needs. Before acting on the advice, consider its appropriateness. Consider our disclosure documents, which include our Financial Services Guide (FSG) and the Product Disclosure Statements (PDS) for some products. © Bruce Insurance, Dental Essentials, Professional Essentials, Trades Insurance, Machine Insurance are trading names of Bruce Insurance Pty Ltd. (Licensed insurance brokers) AFS Licence: 238917 ACN: 009 048 677.
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white-50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-blue-200 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bruce Insurance. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="bg-white/10 px-3 py-1 rounded-full">Australian Owned</div>
              <div className="bg-white/10 px-3 py-1 rounded-full">AFS Licensed</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}