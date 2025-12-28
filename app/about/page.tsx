import { FiAward, FiUsers, FiTarget, FiHeart } from 'react-icons/fi'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="section-container section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-heading-1 mb-4 text-white">About ElShop</h1>
            <p className="text-body-large text-gray-400 mb-12">
              Trusted platform for game items and premium gaming services.
            </p>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-heading-2 mb-4 text-white">Our Story</h2>
              <p className="text-body text-gray-300 mb-4">
                ElShop was founded with a vision to become the leading platform in providing 
                high-quality gaming products and services. We understand the needs of gamers 
                who want easy, fast, and secure access to game items and boosting services.
              </p>
              <p className="text-body text-gray-300 mb-4">
                With an experienced and dedicated team, we are committed to providing 
                the best experience for every customer. Every transaction is conducted with 
                high security standards and transparent processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="card p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiAward className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">Quality Guaranteed</h3>
                <p className="text-body-small text-gray-400">
                  All our products and services have gone through strict quality control processes 
                  to ensure customer satisfaction.
                </p>
              </div>

              <div className="card p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiUsers className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">Professional Team</h3>
                <p className="text-body-small text-gray-400">
                  Our team consists of experienced professionals in gaming and 
                  customer service ready to help you 24/7.
                </p>
              </div>

              <div className="card p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiTarget className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">Customer Focused</h3>
                <p className="text-body-small text-gray-400">
                  Customer satisfaction is our top priority. We always strive to provide 
                  the best service and the right solutions for your needs.
                </p>
              </div>

              <div className="card p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiHeart className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">Trusted & Secure</h3>
                <p className="text-body-small text-gray-400">
                  Every transaction is conducted with the best security systems and transparent 
                  processes to provide peace of mind for customers.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-900/30 to-primary-950/30 rounded-2xl p-8 text-center border border-primary-800">
              <h2 className="text-heading-2 mb-4 text-white">Ready to Get Started?</h2>
              <p className="text-body text-gray-300 mb-6">
                Explore our products and services to find the best gaming solutions for you.
              </p>
              <Link
                href="/products"
                className="inline-block btn-primary"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
