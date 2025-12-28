import Link from 'next/link'
import { FiHome, FiSearch } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-extrabold text-primary-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-2">Page Not Found</h2>
          <p className="text-gray-400 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
          >
            <FiHome className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-gray-900 text-primary-400 px-6 py-3 rounded-xl font-semibold border-2 border-primary-600 hover:bg-primary-900/30 transition"
          >
            <FiSearch className="w-5 h-5 mr-2" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  )
}
