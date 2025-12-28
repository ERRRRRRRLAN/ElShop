/**
 * Products Listing Page
 * 
 * This page displays all available products and services with filtering capabilities.
 * Users can filter products by category and game using dropdown filters.
 * 
 * Features:
 * - Display all products in a responsive grid
 * - Filter by category (Diamond, UC, Boosting, Voucher, etc.)
 * - Filter by game (Mobile Legends, PUBG Mobile, etc.)
 * - Mobile-responsive filter toggle
 * - Product count display
 * - Empty state when no products match filters
 * 
 * @module app/products/page
 */

'use client'

import { useState } from 'react'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import CustomDropdown from '@/components/ui/CustomDropdown'
import { FiFilter, FiX } from 'react-icons/fi'

/**
 * ProductsPage Component
 * 
 * Main component for the products listing page.
 * Manages filter state and renders filtered product list.
 * 
 * @returns {JSX.Element} Products listing page with filters
 */
export default function ProductsPage() {
  // Filter state management
  const [selectedCategory, setSelectedCategory] = useState<string>('all') // Selected category filter
  const [selectedGame, setSelectedGame] = useState<string>('all')       // Selected game filter
  const [showFilters, setShowFilters] = useState(false)                  // Mobile filter visibility

  // Extract unique categories from products array
  // 'all' is added as the first option to show all products
  const categories = ['all', ...Array.from(new Set(products.map((p) => p.category)))]

  // Extract unique games from products array
  // 'all' is added as the first option to show all games
  const games = ['all', ...Array.from(new Set(products.map((p) => p.game)))]

  // Format categories for dropdown component
  // Converts category names to proper case (first letter uppercase)
  const categoryOptions = categories.map((cat) => ({
    value: cat,
    label: cat.charAt(0).toUpperCase() + cat.slice(1),
  }))

  // Format games for dropdown component
  // Converts game names to proper case (first letter uppercase)
  const gameOptions = games.map((game) => ({
    value: game,
    label: game.charAt(0).toUpperCase() + game.slice(1),
  }))

  /**
   * Filter products based on selected category and game
   * 
   * Returns products that match both filters (if not 'all').
   * If a filter is set to 'all', it matches all products for that filter.
   * 
   * @returns {Product[]} Filtered array of products
   */
  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory
    const gameMatch = selectedGame === 'all' || product.game === selectedGame
    return categoryMatch && gameMatch
  })

  return (
    <div className="bg-black min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-950">
        <div className="section-container py-12">
          <div className="content-container">
            <h1 className="text-heading-1 mb-4 text-white">All Products</h1>
            <p className="text-body-large text-gray-400 max-w-2xl">
              Discover the best game items and gaming services for your needs
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Products */}
      <div className="section-container py-12">
        <div className="content-container">
          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden mb-6 flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-800 hover:border-primary-600 transition text-gray-300"
          >
            <FiFilter className="w-5 h-5" />
            <span>Filters</span>
          </button>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block mb-8 card p-6 relative`} style={{ zIndex: 1, overflow: 'visible' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-heading-3 text-white">Filter Products</h2>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedGame('all')
                }}
                className="text-sm text-primary-400 hover:text-primary-300 font-medium"
              >
                Reset
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomDropdown
                label="Category"
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Select category"
              />
              <CustomDropdown
                label="Game"
                options={gameOptions}
                value={selectedGame}
                onChange={setSelectedGame}
                placeholder="Select game"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-body text-gray-400">
              Showing <span className="font-semibold text-white">{filteredProducts.length}</span> products
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 card">
              <p className="text-body-large text-gray-400 mb-2">No products found</p>
              <p className="text-body-small text-gray-500">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

