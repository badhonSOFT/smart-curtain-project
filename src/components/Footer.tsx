import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }, 
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const footerLinks = [
    { label: "About", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" }
  ];

  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand & Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 sm:mb-8">
              <img 
                src="/images/Modern Blue and Gray Smart Curtain Logo.png" 
                alt="SmartCurtain Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-lg text-sm sm:text-base">
              Premium smart curtain systems designed for modern homes. 
              Professional installation, comprehensive warranty, and transparent pricing.
            </p>

            {/* Professional Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Certified Installation</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-700 font-medium text-xs sm:text-sm">2-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-gray-900">Contact Us</h4>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-sm sm:text-base">+880 1XXXXXXXXX</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Sales & Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-sm sm:text-base">hello@smartcurtain.bd</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Business inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-sm sm:text-base">Dhaka, Bangladesh</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Nationwide delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-gray-900">Quick Links</h4>
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {[
                { label: "Demo", href: "#demo" },
                { label: "Features", href: "#features" },
                { label: "FAQ", href: "#faq" },
                { label: "#EffortlessLiving", href: "/effortless-living" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`block transition-colors duration-200 text-sm sm:text-base ${
                    (link.href.startsWith('#') && window.location.hash === link.href) ||
                    (link.href === '/effortless-living' && window.location.pathname === '/effortless-living')
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div>
              <h5 className="font-semibold mb-3 sm:mb-4 text-gray-900 text-sm sm:text-base">Connect With Us</h5>
              <div className="flex space-x-2 sm:space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-11 sm:h-11 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-sm"
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 sm:mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
              <p className="text-gray-600 text-sm sm:text-base">
                © {currentYear} SmartCurtain. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
                {footerLinks.map((link, index) => (
                  <a key={index} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-4 sm:w-8 sm:h-5 bg-green-600 rounded-sm flex items-center justify-center relative overflow-hidden">
                <div className="w-3 h-2 sm:w-4 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-red-500 opacity-20"></div>
              </div>
              <span className="text-gray-600 text-xs sm:text-sm font-medium">Made in Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;