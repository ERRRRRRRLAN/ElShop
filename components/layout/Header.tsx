/**
 * Header Component
 * 
 * Main navigation header that appears on all pages. Features:
 * - Sticky header that changes appearance on scroll
 * - Responsive navigation menu (desktop and mobile)
 * - Shopping cart icon with item count badge
 * - Logo with hover effects
 * - Mobile menu toggle
 * 
 * The header becomes more opaque and adds shadow when user scrolls down
 * for better visibility and visual separation.
 * 
 * @module components/layout/Header
 */

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { useCart } from '@/context/CartContext'

/**
 * Header Component
 * 
 * Renders the main navigation header with logo, menu items, and cart.
 * 
 * @returns {JSX.Element} Header component
 */
export default function Header() {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // State for scroll detection (changes header appearance)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Get cart items from context to display count
  const { cartItems } = useCart()
  
  // Calculate total items in cart for badge display
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  /**
   * Scroll Event Handler
   * 
   * Detects when user scrolls past 20px and updates header appearance.
   * Adds scroll event listener on mount and cleans up on unmount.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup: remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl shadow-lg shadow-black/50' 
        : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link 
            href="/" 
            className="relative group"
          >
            <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary-400 via-purple-400 to-primary-600 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 text-shimmer">
              ElShop
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/products', label: 'Products' },
              { href: '/services', label: 'Services' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="relative px-4 py-2 text-gray-300 hover:text-white font-medium no-underline group transition-all duration-300"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-purple-400 group-hover:w-3/4 transition-all duration-300"></div>
              </Link>
            ))}
            
            {/* Enhanced Cart Button */}
            <Link 
              href="/cart" 
              className="relative ml-6 p-3 text-gray-300 hover:text-white hover:bg-primary-500/20 rounded-xl transition-all duration-300 group hover-lift"
            >
              <FiShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-lg animate-pulse-glow">
                  {cartItemCount}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"></div>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-gray-300 hover:text-white hover:bg-primary-500/20 rounded-xl transition-all duration-300 hover-lift"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-xl opacity-0 hover:opacity-100 transition-all duration-300 scale-90 hover:scale-100"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-2 pb-4">
            <Link 
              href="/" 
              className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-primary-900/30 rounded-lg transition-all font-medium no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-primary-900/30 rounded-lg transition-all font-medium no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/services" 
              className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-primary-900/30 rounded-lg transition-all font-medium no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-primary-900/30 rounded-lg transition-all font-medium no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-primary-900/30 rounded-lg transition-all font-medium no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/cart" 
              className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-primary-900/30 rounded-lg transition-all font-medium no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiShoppingCart className="w-5 h-5" />
              <span>Cart {cartItemCount > 0 && `(${cartItemCount})`}</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

