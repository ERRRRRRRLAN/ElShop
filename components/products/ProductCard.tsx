/**
 * Product Card Component
 * 
 * Displays a single product or service in a card format with:
 * - Product image with hover effects
 * - Product name and description
 * - Price display
 * - Add to cart button
 * - Stock and service badges
 * - Rating display
 * - Link to product detail page
 * 
 * Features:
 * - Hover animations and effects
 * - Image error handling with fallback
 * - Loading state when adding to cart
 * - Responsive design
 * - Accessible markup
 * 
 * @module components/products/ProductCard
 */

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { Product } from '@/data/products'
import { FiShoppingCart, FiStar } from 'react-icons/fi'
import { useState } from 'react'

/**
 * ProductCardProps Interface
 * 
 * @interface ProductCardProps
 * @property {Product} product - Product object to display
 */
interface ProductCardProps {
  product: Product
}

/**
 * ProductCard Component
 * 
 * Renders a card displaying product information with interactive features.
 * 
 * @param {ProductCardProps} props - Component props
 * @param {Product} props.product - Product data to display
 * @returns {JSX.Element} Product card component
 */
export default function ProductCard({ product }: ProductCardProps) {
  // Get addToCart function from cart context
  const { addToCart } = useCart()
  
  // State for hover effects
  const [isHovered, setIsHovered] = useState(false)
  
  // State for loading indicator when adding to cart
  const [isAdding, setIsAdding] = useState(false)
  
  // State for image error handling
  const [imageError, setImageError] = useState(false)
  
  // Fallback image URL
  const fallbackImage = 'https://images.unsplash.com/photo-1552820728-8b83bb6b773c?w=800&h=600&fit=crop&q=80'

  /**
   * Handle Add to Cart Click
   * 
   * Prevents navigation to product page and adds item to cart.
   * Shows loading state for 500ms for better UX.
   * 
   * @param {React.MouseEvent} e - Click event
   */
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()      // Prevent link navigation
    e.stopPropagation()      // Prevent event bubbling
    setIsAdding(true)       // Show loading state
    
    // Add product to cart
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type,
    })

    // Hide loading state after 500ms
    setTimeout(() => setIsAdding(false), 500)
  }

  /**
   * Format Price
   * 
   * Formats a number as Indonesian Rupiah (IDR) currency.
   * 
   * @param {number} price - Price in IDR
   * @returns {string} Formatted price string (e.g., "Rp 10.000")
   */
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0, // No decimal places
    }).format(price)
  }

  return (
    <div 
      className="group card card-interactive card-hover overflow-hidden hover-lift animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-56 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
          {imageError ? (
            // Use regular img tag for fallback to avoid Next.js Image optimization issues
            <img
              src={fallbackImage}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-110' : 'scale-100'}`}
            />
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-110' : 'scale-100'}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              onError={() => {
                // Set error state to use fallback image immediately
                setImageError(true)
              }}
              unoptimized={true}
              onLoadingComplete={() => {
                // Image loaded successfully, do nothing
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Badges Container - Fixed spacing */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
            {/* Left side - Stock badge */}
            {product.stock < 50 && product.stock > 0 && (
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20 animate-pulse">
                Limited Stock
              </div>
            )}
            
            {/* Right side - Service badge */}
            {product.type === 'service' && (
              <div className="bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20 flex items-center gap-1.5 animate-pulse-glow ml-auto">
                <FiStar className="w-3.5 h-3.5" />
                <span>Premium Service</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-4 gap-3">
            <span className="text-xs font-bold text-primary-300 bg-gradient-to-r from-primary-500/20 to-purple-500/20 px-3 py-1.5 rounded-full border border-primary-500/30 backdrop-blur-sm whitespace-nowrap">
              {product.game}
            </span>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold text-yellow-400">4.8</span>
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-primary-300 transition-colors duration-300 leading-tight">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-300 mb-5 line-clamp-2 min-h-[2.5rem] group-hover:text-gray-200 transition-colors leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-700/50 gap-4">
            <div className="flex-shrink-0">
              <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                {formatPrice(product.price)}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`relative btn-primary p-3 rounded-xl hover-lift disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 ${
                isAdding ? 'animate-pulse' : ''
              }`}
              title="Add to cart"
            >
              {isAdding ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <FiShoppingCart className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

