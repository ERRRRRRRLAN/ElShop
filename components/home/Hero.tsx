'use client'

import Link from 'next/link'
import { FiArrowRight, FiGrid, FiCheck, FiStar, FiZap, FiShield, FiPackage } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-primary-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(179, 6, 162, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(179, 6, 162, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="content-container pt-16 md:pt-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-primary-500/30 hover-glow animate-fade-in-up">
              <FiStar className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-shimmer">#1 Trusted Gaming Platform</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-display mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="block mb-4 font-black text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-primary-400 via-purple-400 to-primary-600 bg-clip-text text-transparent">ElShop</span>
              <span className="block text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-400 via-purple-400 to-primary-600 bg-clip-text text-transparent">
                Game Items & Boosting Services
              </span>
            </h1>
            
            {/* Description */}
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Trusted platform for game items and premium gaming services. 
                <span className="block mt-2 text-primary-200">Get high-quality gaming products at the best prices with fast processing.</span>
              </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link
                href="/products"
                className="group btn-primary inline-flex items-center justify-center space-x-3 text-lg hover-lift"
              >
                <FiGrid className="w-5 h-5" />
                <span>Browse Products</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group btn-secondary inline-flex items-center justify-center space-x-3 text-lg hover-lift"
              >
                <FiZap className="w-6 h-6" />
                <span>View Services</span>
              </Link>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 border-t border-primary-500/20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center group hover-lift">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <FiCheck className="w-7 h-7 text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2 text-white">1000+</div>
                <div className="text-xs md:text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center group hover-lift">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <FiPackage className="w-7 h-7 text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2 text-white">500+</div>
                <div className="text-xs md:text-sm text-gray-300">Products</div>
              </div>
              <div className="text-center group hover-lift">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <FiZap className="w-7 h-7 text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2 text-white">24/7</div>
                <div className="text-xs md:text-sm text-gray-300">Support</div>
              </div>
              <div className="text-center group hover-lift">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <FiShield className="w-7 h-7 text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2 text-white">100%</div>
                <div className="text-xs md:text-sm text-gray-300">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-shadow-bottom"></div>
    </section>
  )
}

