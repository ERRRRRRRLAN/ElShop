/**
 * Shopping Cart Context
 * 
 * This module provides global state management for the shopping cart functionality.
 * It uses React Context API to share cart state across all components and persists
 * cart data to localStorage so it survives page refreshes.
 * 
 * Features:
 * - Add items to cart
 * - Remove items from cart
 * - Update item quantities
 * - Clear entire cart
 * - Calculate total price
 * - Calculate total items count
 * - Persistent storage using localStorage
 * 
 * @module context/CartContext
 */

'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

/**
 * CartItem Interface
 * 
 * Defines the structure of a single item in the shopping cart.
 * 
 * @interface CartItem
 * @property {string} id - Unique identifier for the product/service
 * @property {string} name - Display name of the item
 * @property {number} price - Price per unit in IDR
 * @property {string} image - URL of the product/service image
 * @property {number} quantity - Number of units in cart
 * @property {'product' | 'service'} type - Type of item (product or service)
 */
export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  type: 'product' | 'service'
}

/**
 * CartContextType Interface
 * 
 * Defines the shape of the cart context value that will be provided
 * to consuming components.
 * 
 * @interface CartContextType
 */
interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

/**
 * CartContext
 * 
 * React Context for shopping cart state management.
 * Initially undefined, will be populated by CartProvider.
 */
const CartContext = createContext<CartContextType | undefined>(undefined)

/**
 * CartProvider Component
 * 
 * Provides cart state and functions to all child components.
 * Manages cart state in memory and syncs with localStorage for persistence.
 * 
 * How it works:
 * 1. On mount, loads cart from localStorage
 * 2. Whenever cart changes, saves to localStorage
 * 3. Provides cart state and functions via Context
 * 
 * @param {ReactNode} children - Child components that need access to cart
 * @returns {JSX.Element} Context Provider wrapping children
 */
export function CartProvider({ children }: { children: ReactNode }) {
  // Cart state - array of CartItem objects
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  /**
   * Load cart from localStorage on component mount
   * 
   * This effect runs once when the component first mounts.
   * It retrieves saved cart data from localStorage and restores it.
   * 
   * localStorage key: 'elshop-cart'
   * Data format: JSON stringified array of CartItem objects
   */
  useEffect(() => {
    const savedCart = localStorage.getItem('elshop-cart')
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        // If parsing fails, start with empty cart
        console.error('Failed to parse cart from localStorage:', error)
        localStorage.removeItem('elshop-cart')
      }
    }
  }, [])

  /**
   * Save cart to localStorage whenever it changes
   * 
   * This effect runs whenever cartItems changes.
   * It automatically saves the current cart state to localStorage
   * so the cart persists across page refreshes and browser sessions.
   */
  useEffect(() => {
    localStorage.setItem('elshop-cart', JSON.stringify(cartItems))
  }, [cartItems])

  /**
   * Add item to cart
   * 
   * If the item already exists in cart, increments its quantity.
   * If it's a new item, adds it with quantity 1.
   * 
   * @param {Omit<CartItem, 'quantity'>} item - Item to add (without quantity)
   */
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart
      const existingItem = prevItems.find((i) => i.id === item.id)
      
      if (existingItem) {
        // Increment quantity if item exists
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      
      // Add new item with quantity 1
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  /**
   * Remove item from cart
   * 
   * Completely removes an item from the cart by filtering it out.
   * 
   * @param {string} id - ID of the item to remove
   */
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id))
  }

  /**
   * Update item quantity in cart
   * 
   * Updates the quantity of a specific item. If quantity is 0 or less,
   * removes the item from cart instead.
   * 
   * @param {string} id - ID of the item to update
   * @param {number} quantity - New quantity (must be > 0)
   */
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      // Remove item if quantity is 0 or negative
      removeFromCart(id)
      return
    }
    
    // Update quantity
    setCartItems((prevItems) =>
      prevItems.map((i) => (i.id === id ? { ...i, quantity } : i))
    )
  }

  /**
   * Clear entire cart
   * 
   * Removes all items from the cart.
   */
  const clearCart = () => {
    setCartItems([])
  }

  /**
   * Calculate total price of all items in cart
   * 
   * Multiplies each item's price by its quantity and sums them up.
   * 
   * @returns {number} Total price in IDR
   */
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  /**
   * Calculate total number of items in cart
   * 
   * Sums up the quantities of all items in cart.
   * 
   * @returns {number} Total number of items
   */
  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }

  // Provide cart state and functions to all children
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/**
 * useCart Hook
 * 
 * Custom hook to access cart context in components.
 * Must be used within a CartProvider component.
 * 
 * @throws {Error} If used outside CartProvider
 * @returns {CartContextType} Cart context value with state and functions
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { cartItems, addToCart } = useCart()
 *   // Use cartItems and addToCart here
 * }
 * ```
 */
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}


