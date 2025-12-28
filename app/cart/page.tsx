'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { FiTrash2, FiShoppingBag, FiArrowLeft } from 'react-icons/fi'

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-black min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <FiShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
            <p className="text-gray-400 mb-6">Start adding some products to your cart!</p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition btn-primary"
              style={{ color: '#ffffff', textDecoration: 'none' }}
            >
              Browse Products
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
          href="/products"
          className="inline-flex items-center text-gray-400 hover:text-primary-400 mb-6"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
            <button
              onClick={clearCart}
              className="text-sm text-red-400 hover:text-red-300"
            >
              Clear Cart
            </button>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center space-x-4"
              >
                <div className="relative w-20 h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                    unoptimized={true}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1552820728-8b83bb6b773c?w=800&h=600&fit=crop&q=80`;
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-400">{formatPrice(item.price)}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-700 rounded-lg bg-gray-800">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-700 transition text-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-gray-300">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-700 transition text-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-32 text-right">
                    <p className="font-semibold text-white">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-300 p-2"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax</span>
                <span>Rp 0</span>
              </div>
              <div className="border-t border-gray-800 pt-3 flex justify-between font-bold text-lg">
                <span className="text-white">Total</span>
                <span className="text-primary-400">{formatPrice(getTotalPrice())}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="block w-full py-3 rounded-lg font-semibold transition text-center btn-primary"
              style={{ color: '#ffffff', textDecoration: 'none' }}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

