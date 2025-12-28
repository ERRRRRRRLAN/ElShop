import { FiCheckCircle, FiClock, FiShield, FiStar } from 'react-icons/fi'
import Link from 'next/link'

const services = [
  {
    name: 'Mobile Legends Rank Boosting',
    description: 'Mobile Legends rank boosting service from Bronze to Mythic. Experienced pro players will help you rank up quickly and safely.',
    price: 'Starting from Rp 50.000',
    features: ['Pro Player', 'Fast Delivery', '100% Safe', '24/7 Support'],
  },
  {
    name: 'PUBG Mobile Rank Boosting',
    description: 'PUBG Mobile rank boosting service for various tiers. Our professional team will help you reach your desired rank.',
    price: 'Starting from Rp 60.000',
    features: ['Expert Team', 'Guaranteed Rank', 'Secure Account', 'Quick Service'],
  },
  {
    name: 'Genshin Impact Boosting',
    description: 'Genshin Impact boosting service for quests, farming, and daily missions. Save time with our professional boosting service.',
    price: 'Starting from Rp 40.000',
    features: ['Daily Mission', 'Quest Completion', 'Resource Farming', 'Account Safety'],
  },
  {
    name: 'Clash of Clans Boosting',
    description: 'Clash of Clans boosting service for base upgrades and resource farming. Experienced team ready to help develop your base.',
    price: 'Starting from Rp 35.000',
    features: ['Base Upgrade', 'Resource Farming', 'War Participation', 'Secure Service'],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="section-container section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-heading-1 mb-4 text-white">Our Services</h1>
            <p className="text-body-large text-gray-400">
              Professional gaming boosting services to help you achieve your gaming goals quickly and safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="card card-hover p-6"
              >
                <h2 className="text-heading-3 mb-3 text-white">{service.name}</h2>
                <p className="text-body-small text-gray-400 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-primary-400 mb-4">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <FiCheckCircle className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0" />
                      <span className="text-body-small">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className="inline-block w-full text-center btn-primary"
                >
                  <span className="text-white font-semibold">Order Now</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-heading-2 mb-8 text-center text-white">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiClock className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">Fast Delivery</h3>
                <p className="text-body-small text-gray-400">
                  Fast service with efficient processes
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiShield className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">100% Safe</h3>
                <p className="text-body-small text-gray-400">
                  Your account security is our priority
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/50 rounded-2xl mb-4 border border-primary-800">
                  <FiStar className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-2 text-white">Professional Team</h3>
                <p className="text-body-small text-gray-400">
                  Experienced professional team in gaming
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
