import Link from 'next/link'
import { FiArrowRight, FiGrid, FiMessageCircle, FiStar } from 'react-icons/fi'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white relative overflow-hidden">
      <div className="section-shadow-top"></div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/10 via-purple-600/5 to-transparent"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Header */}
            <div className="mb-12 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-primary-400/30">
                <FiStar className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold text-shimmer">Ready to Level Up?</span>
              </div>
              
              <h2 className="text-heading-1 mb-8 text-white">
                Ready to Start Your Gaming Journey?
              </h2>
              <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
                Explore our products and services to find the best gaming solutions. 
                <span className="block mt-2 text-primary-200">Join thousands of gamers who have experienced the best!</span>
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/products"
                className="group btn-primary inline-flex items-center justify-center space-x-3 text-lg hover-lift"
              >
                <FiGrid className="w-5 h-5" />
                <span>Browse Products</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group btn-secondary inline-flex items-center justify-center space-x-3 text-lg hover-lift"
              >
                <FiMessageCircle className="w-6 h-6" />
                <span>Contact Us</span>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center group hover-lift">
                <div className="text-3xl font-black text-white mb-2">24/7</div>
                <div className="text-gray-200 group-hover:text-white transition-colors">Customer Support</div>
              </div>
              <div className="text-center group hover-lift">
                <div className="text-3xl font-black text-white mb-2">100%</div>
                <div className="text-gray-200 group-hover:text-white transition-colors">Secure & Safe</div>
              </div>
              <div className="text-center group hover-lift">
                <div className="text-3xl font-black text-white mb-2">1000+</div>
                <div className="text-gray-200 group-hover:text-white transition-colors">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

