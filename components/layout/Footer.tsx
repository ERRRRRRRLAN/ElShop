import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-black mb-2 text-shimmer">
                ElShop
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full"></div>
            </div>
            <p className="text-gray-200 leading-relaxed mb-6">
              Trusted platform for game items and premium gaming services. 
              We provide various high-quality gaming products and services.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-purple-500/20 backdrop-blur-sm border border-primary-500/30 rounded-2xl flex items-center justify-center hover-lift hover-glow transition-all group"
              >
                <FiFacebook className="w-5 h-5 text-primary-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-purple-500/20 backdrop-blur-sm border border-primary-500/30 rounded-2xl flex items-center justify-center hover-lift hover-glow transition-all group"
              >
                <FiTwitter className="w-5 h-5 text-primary-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-purple-500/20 backdrop-blur-sm border border-primary-500/30 rounded-2xl flex items-center justify-center hover-lift hover-glow transition-all group"
              >
                <FiInstagram className="w-5 h-5 text-primary-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <div className="mb-6">
              <h4 className="font-bold text-xl text-white mb-2">Quick Links</h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/products', label: 'Products' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary-300 transition-all flex items-center space-x-3 group no-underline hover-lift">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all transform scale-0 group-hover:scale-100"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Support */}
          <div>
            <div className="mb-6">
              <h4 className="font-bold text-xl text-white mb-2">Support</h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {[
                { href: '/contact', label: 'Contact Us' },
                { href: '/faq', label: 'FAQ' },
                { href: '/terms', label: 'Terms & Conditions' },
                { href: '/privacy', label: 'Privacy Policy' }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary-300 transition-all flex items-center space-x-3 group no-underline hover-lift">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all transform scale-0 group-hover:scale-100"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact */}
          <div>
            <div className="mb-6">
              <h4 className="font-bold text-xl text-white mb-2">Contact</h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full"></div>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4 text-gray-400 group hover-lift">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FiMail className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Email</span>
                  <span className="hover:text-primary-300 transition-colors cursor-pointer">support@elshop.com</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 text-gray-400 group hover-lift">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FiPhone className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Phone</span>
                  <span className="hover:text-primary-300 transition-colors cursor-pointer">+62 812-3456-7890</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 text-gray-400 group hover-lift">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FiMapPin className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Location</span>
                  <span className="hover:text-primary-300 transition-colors cursor-pointer">Jakarta, Indonesia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">
                &copy; {new Date().getFullYear()} ElShop. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Trusted by <span className="text-primary-400 font-semibold">1000+</span> gamers worldwide
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500 mb-2">
                Made with <span className="text-red-500 animate-pulse">♥</span> for gamers
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-2 text-xs text-gray-600">
                <span>Powered by</span>
                <span className="text-primary-400 font-semibold">Next.js</span>
                <span>•</span>
                <span className="text-primary-400 font-semibold">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

