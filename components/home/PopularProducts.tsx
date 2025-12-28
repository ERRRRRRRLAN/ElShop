import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import { FiArrowRight } from 'react-icons/fi'

export default function PopularProducts() {
  const popularProducts = products.slice(0, 4)

  return (
    <section className="section-padding bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
      <div className="section-shadow-top"></div>
      <div className="section-shadow-bottom"></div>
      <div className="section-gradient-overlay"></div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="content-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 animate-fade-in-up">
            <div className="max-w-2xl">
              <h2 className="text-heading-1 mb-6 text-white">
                Popular <span className="text-shimmer">Products</span>
              </h2>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Produk terlaris dan paling diminati oleh para gamers di seluruh Indonesia
                </p>
            </div>
            <Link
              href="/products"
              className="group btn-secondary mt-6 md:mt-0 inline-flex items-center space-x-3 hover-lift animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <span>View All Products</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product, index) => (
              <div 
                key={product.id}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

