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
              Platform terpercaya untuk item game dan jasa joki gaming terbaik di Indonesia.
            </p>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-heading-2 mb-4 text-white">Our Story</h2>
              <p className="text-body text-gray-300 mb-4">
                ElShop didirikan dengan visi untuk menjadi platform terdepan dalam menyediakan 
                produk dan layanan gaming berkualitas tinggi. Kami memahami kebutuhan para gamer 
                yang menginginkan akses mudah, cepat, dan aman untuk item game dan jasa joki.
              </p>
              <p className="text-body text-gray-300 mb-4">
                Dengan tim yang berpengalaman dan berdedikasi, kami berkomitmen untuk memberikan 
                pengalaman terbaik bagi setiap pelanggan. Setiap transaksi dilakukan dengan 
                standar keamanan tinggi dan proses yang transparan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="card p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiAward className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">Kualitas Terjamin</h3>
                <p className="text-body-small text-gray-400">
                  Semua produk dan layanan kami telah melalui proses quality control yang ketat 
                  untuk memastikan kepuasan pelanggan.
                </p>
              </div>

              <div className="card p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiUsers className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">Tim Profesional</h3>
                <p className="text-body-small text-gray-400">
                  Tim kami terdiri dari para profesional berpengalaman di bidang gaming dan 
                  customer service yang siap membantu Anda 24/7.
                </p>
              </div>

              <div className="card p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiTarget className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">Fokus pada Pelanggan</h3>
                <p className="text-body-small text-gray-400">
                  Kepuasan pelanggan adalah prioritas utama kami. Kami selalu berusaha memberikan 
                  layanan terbaik dan solusi yang tepat untuk kebutuhan Anda.
                </p>
              </div>

              <div className="card p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiHeart className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">Terpercaya & Aman</h3>
                <p className="text-body-small text-gray-400">
                  Setiap transaksi dilakukan dengan sistem keamanan terbaik dan proses yang 
                  transparan untuk memberikan rasa aman bagi pelanggan.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-900/30 to-primary-950/30 rounded-2xl p-8 text-center border border-primary-800">
              <h2 className="text-heading-2 mb-4 text-white">Ready to Get Started?</h2>
              <p className="text-body text-gray-300 mb-6">
                Jelajahi produk dan layanan kami untuk menemukan solusi gaming terbaik untuk Anda.
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
