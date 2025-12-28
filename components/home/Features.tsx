import { FiShield, FiTruck, FiHeadphones, FiAward } from 'react-icons/fi'

const features = [
  {
    icon: FiShield,
    title: '100% Safe & Trusted',
    description: 'Secure transactions with the best security systems and high-level encryption',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
    glowColor: 'group-hover:shadow-green-500/20',
  },
  {
    icon: FiTruck,
    title: 'Fast Delivery',
    description: 'Items delivered directly to your game account within minutes',
    gradient: 'from-primary-500/20 to-purple-500/20',
    iconColor: 'text-primary-400',
    glowColor: 'group-hover:shadow-primary-500/20',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Support',
    description: 'Professional support team ready to help anytime, every day',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    glowColor: 'group-hover:shadow-purple-500/20',
  },
  {
    icon: FiAward,
    title: 'Quality Guaranteed',
    description: 'High-quality products and services with satisfaction guarantee',
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    glowColor: 'group-hover:shadow-amber-500/20',
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-black relative">
      <div className="section-shadow-top"></div>
      <div className="section-shadow-bottom"></div>
      <div className="section-gradient-overlay"></div>
      <div className="section-container relative z-10">
        <div className="content-container">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-heading-1 mb-6 text-white">
              Why Choose <span className="text-shimmer">ElShop?</span>
            </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                We provide the best experience with high-quality services 
                and commitment to customer satisfaction
              </p>
          </div>
          
          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group card card-interactive card-hover p-6 text-center hover-lift animate-fade-in-up ${feature.glowColor}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-5 group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor} group-hover:scale-110 transition-transform`} />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-primary-300 transition-colors leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

