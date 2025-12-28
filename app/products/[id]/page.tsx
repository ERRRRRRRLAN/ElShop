'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { getProductById } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { FiShoppingCart, FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'

export default function ProductDetailPage() {
  const params = useParams()
  const product = getProductById(params.id as string)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="bg-black min-h-screen">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Product Not Found</h1>
          <Link href="/products" className="text-primary-400 hover:text-primary-300">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        type: product.type,
      })
    }
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/products"
          className="inline-flex items-center text-gray-400 hover:text-primary-400 mb-6"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative w-full h-96 lg:h-[500px] bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized={true}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1552820728-8b83bb6b773c?w=800&h=600&fit=crop&q=80`;
              }}
            />
          </div>

          {/* Details */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-gray-400">{product.game}</span>
              {product.type === 'service' && (
                <span className="ml-2 text-sm bg-primary-900/50 text-primary-400 px-2 py-1 rounded border border-primary-800">
                  Service
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-primary-400 mb-6">
              {formatPrice(product.price)}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

            <div className="space-y-4 mb-8">
              <div>
                <span className="text-sm font-medium text-gray-400">Category:</span>
                <span className="ml-2 text-gray-300">{product.category}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-400">Game:</span>
                <span className="ml-2 text-gray-300">{product.game}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-400">Stock:</span>
                <span className="ml-2 text-gray-300">
                  {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                </span>
              </div>
            </div>

            {product.stock > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-300">Quantity:</label>
                  <div className="flex items-center border border-gray-700 rounded-lg bg-gray-800">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-700 transition text-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-0 focus:ring-0 bg-gray-800 text-gray-300"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-700 transition text-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center space-x-2"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

