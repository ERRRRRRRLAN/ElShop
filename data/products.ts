/**
 * Products Data Module
 * 
 * This module contains the product data structure and all product/service
 * information. It also provides helper functions to query products.
 * 
 * To add new products:
 * 1. Add a new object to the products array below
 * 2. Follow the Product interface structure
 * 3. Ensure all required fields are filled
 * 
 * @module data/products
 */

/**
 * Product Interface
 * 
 * Defines the structure of a product or service in the catalog.
 * 
 * @interface Product
 * @property {string} id - Unique identifier (must be unique across all products)
 * @property {string} name - Product/service display name
 * @property {string} description - Detailed description (shown on product page)
 * @property {number} price - Price in IDR (Indonesian Rupiah), no decimals
 * @property {string} image - Full URL to product image (must be accessible)
 * @property {string} category - Product category (e.g., 'Diamond', 'Joki', 'Voucher')
 * @property {string} game - Game name (e.g., 'Mobile Legends', 'PUBG Mobile')
 * @property {number} stock - Available stock quantity (999 for unlimited)
 * @property {'product' | 'service'} type - Item type: 'product' for items, 'service' for services
 */
export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  game: string
  stock: number
  type: 'product' | 'service'
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Mobile Legends',
    description: 'Diamond Mobile Legends dengan harga terbaik. Proses cepat dan aman.',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop&q=80',
    category: 'Diamond',
    game: 'Mobile Legends',
    stock: 999,
    type: 'product',
  },
  {
    id: '2',
    name: 'UC PUBG Mobile',
    description: 'Unknown Cash (UC) untuk PUBG Mobile. Top up dengan mudah dan cepat.',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&q=80',
    category: 'UC',
    game: 'PUBG Mobile',
    stock: 999,
    type: 'product',
  },
  {
    id: '3',
    name: 'Genshin Impact Genesis Crystal',
    description: 'Genesis Crystal untuk Genshin Impact. Top up resmi dan terpercaya.',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1606166188517-4a72cb4108c6?w=800&h=600&fit=crop&q=80',
    category: 'Crystal',
    game: 'Genshin Impact',
    stock: 999,
    type: 'product',
  },
  {
    id: '4',
    name: 'Joki Rank Mobile Legends',
    description: 'Jasa joki rank Mobile Legends dari Bronze hingga Mythic. Pro player berpengalaman.',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&q=80',
    category: 'Joki',
    game: 'Mobile Legends',
    stock: 10,
    type: 'service',
  },
  {
    id: '5',
    name: 'Joki Rank PUBG Mobile',
    description: 'Jasa joki rank PUBG Mobile. Naik rank dengan cepat dan aman.',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop&q=80',
    category: 'Joki',
    game: 'PUBG Mobile',
    stock: 10,
    type: 'service',
  },
  {
    id: '6',
    name: 'Joki Genshin Impact',
    description: 'Jasa joki Genshin Impact untuk quest, farming, dan daily mission.',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1606166188517-4a72cb4108c6?w=800&h=600&fit=crop&q=80',
    category: 'Joki',
    game: 'Genshin Impact',
    stock: 10,
    type: 'service',
  },
  {
    id: '7',
    name: 'Voucher Steam Wallet',
    description: 'Voucher Steam Wallet untuk berbagai game PC. Top up dengan mudah.',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773c?w=800&h=600&fit=crop&q=80',
    category: 'Voucher',
    game: 'Steam',
    stock: 999,
    type: 'product',
  },
  {
    id: '8',
    name: 'Joki Clash of Clans',
    description: 'Jasa joki Clash of Clans untuk upgrade base dan farming resources.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773c?w=800&h=600&fit=crop&q=80',
    category: 'Joki',
    game: 'Clash of Clans',
    stock: 10,
    type: 'service',
  },
]

/**
 * Products Array
 * 
 * Contains all products and services available in the store.
 * Modify this array to add, remove, or update products.
 * 
 * Important Notes:
 * - Each product must have a unique ID
 * - Image URLs must be accessible and added to next.config.js if external
 * - Prices are in IDR (Indonesian Rupiah)
 * - Stock of 999 typically means unlimited stock
 */
export const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Mobile Legends',
    description: 'Diamond Mobile Legends dengan harga terbaik. Proses cepat dan aman.',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop&q=80',
    category: 'Diamond',
    game: 'Mobile Legends',
    stock: 999,
    type: 'product',
  },
  {
    id: '2',
    name: 'UC PUBG Mobile',
    description: 'Unknown Cash (UC) untuk PUBG Mobile. Top up dengan mudah dan cepat.',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&q=80',
    category: 'UC',
    game: 'PUBG Mobile',
    stock: 999,
    type: 'product',
  },
  {
    id: '3',
    name: 'Genshin Impact Genesis Crystal',
    description: 'Genesis Crystal untuk Genshin Impact. Top up resmi dan terpercaya.',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1606166188517-4a72cb4108c6?w=800&h=600&fit=crop&q=80',
    category: 'Crystal',
    game: 'Genshin Impact',
    stock: 999,
    type: 'product',
  },
  {
    id: '4',
    name: 'Joki Rank Mobile Legends',
    description: 'Jasa joki rank Mobile Legends dari Bronze hingga Mythic. Pro player berpengalaman.',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&q=80',
    category: 'Joki',
    game: 'Mobile Legends',
    stock: 10,
    type: 'service',
  },
  {
    id: '5',
    name: 'Joki Rank PUBG Mobile',
    description: 'Jasa joki rank PUBG Mobile. Naik rank dengan cepat dan aman.',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop&q=80',
    category: 'Joki',
    game: 'PUBG Mobile',
    stock: 10,
    type: 'service',
  },
  {
    id: '6',
    name: 'Joki Genshin Impact',
    description: 'Jasa joki Genshin Impact untuk quest, farming, dan daily mission.',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1606166188517-4a72cb4108c6?w=800&h=600&fit=crop&q=80',
    category: 'Joki',
    game: 'Genshin Impact',
    stock: 10,
    type: 'service',
  },
  {
    id: '7',
    name: 'Voucher Steam Wallet',
    description: 'Voucher Steam Wallet untuk berbagai game PC. Top up dengan mudah.',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773c?w=800&h=600&fit=crop&q=80',
    category: 'Voucher',
    game: 'Steam',
    stock: 999,
    type: 'product',
  },
  {
    id: '8',
    name: 'Joki Clash of Clans',
    description: 'Jasa joki Clash of Clans untuk upgrade base dan farming resources.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773c?w=800&h=600&fit=crop&q=80',
    category: 'Joki',
    game: 'Clash of Clans',
    stock: 10,
    type: 'service',
  },
]

/**
 * Get Product by ID
 * 
 * Finds and returns a product with the matching ID.
 * Returns undefined if no product is found.
 * 
 * @param {string} id - Product ID to search for
 * @returns {Product | undefined} Product object or undefined if not found
 * 
 * @example
 * ```tsx
 * const product = getProductById('1')
 * if (product) {
 *   console.log(product.name)
 * }
 * ```
 */
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id)
}

/**
 * Get Products by Category
 * 
 * Filters products by category name and returns all matching products.
 * 
 * @param {string} category - Category name to filter by (case-sensitive)
 * @returns {Product[]} Array of products matching the category
 * 
 * @example
 * ```tsx
 * const diamondProducts = getProductsByCategory('Diamond')
 * ```
 */
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category)
}

/**
 * Get Products by Game
 * 
 * Filters products by game name and returns all matching products.
 * 
 * @param {string} game - Game name to filter by (case-sensitive)
 * @returns {Product[]} Array of products matching the game
 * 
 * @example
 * ```tsx
 * const mlProducts = getProductsByGame('Mobile Legends')
 * ```
 */
export const getProductsByGame = (game: string): Product[] => {
  return products.filter((product) => product.game === game)
}

