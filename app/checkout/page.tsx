'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiCheck } from 'react-icons/fi'

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gameId: '',
    gameUsername: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)
    clearCart()

    // Redirect to home after 3 seconds
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (cartItems.length === 0 && !isSuccess) {
    return (
      <div className="bg-black min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
            <Link
              href="/products"
              className="inline-block text-primary-400 hover:text-primary-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="bg-black min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-900/50 border border-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheck className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Order Placed Successfully!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for your order. We will process it shortly.
            </p>
            <Link
              href="/"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/cart"
          className="inline-flex items-center text-gray-400 hover:text-primary-400 mb-6"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-white mb-6">Checkout</h1>
            <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-300 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-300 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-300 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Game ID / Account ID *
                </label>
                <input
                  type="text"
                  name="gameId"
                  value={formData.gameId}
                  onChange={handleChange}
                  required
                  placeholder="Enter your game ID"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-300 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Game Username *
                </label>
                <input
                  type="text"
                  name="gameUsername"
                  value={formData.gameUsername}
                  onChange={handleChange}
                  required
                  placeholder="Enter your game username"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-300 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any additional information..."
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-300 placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="text-white">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-800 pt-4 flex justify-between font-bold text-lg">
                <span className="text-white">Total</span>
                <span className="text-primary-400">{formatPrice(getTotalPrice())}</span>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                * Payment gateway integration will be added later
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

