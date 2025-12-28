import Link from 'next/link'
import { FiCheckCircle, FiArrowRight, FiStar, FiZap, FiShield } from 'react-icons/fi'

const services = [
  {
    name: 'Mobile Legends Rank Boosting',
    icon: FiStar,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400'
  },
  {
    name: 'PUBG Mobile Rank Boosting',
    icon: FiZap,
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400'
  },
  {
    name: 'Genshin Impact Boosting',
    icon: FiShield,
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400'
  },
  {
    name: 'Clash of Clans Boosting',
    icon: FiCheckCircle,
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400'
  },
  {
    name: 'Free Fire Boosting',
    icon: FiZap,
    gradient: 'from-yellow-500/20 to-amber-500/20',
    iconColor: 'text-yellow-400'
  },
  {
    name: 'Valorant Boosting',
    icon: FiStar,
    gradient: 'from-primary-500/20 to-purple-500/20',
    iconColor: 'text-primary-400'
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
      <div className="section-shadow-top"></div>
      <div className="section-shadow-bottom"></div>
      <div className="section-gradient-overlay"></div>
      
      {/* Enhanced Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
      
      <div className="section-container relative z-10">
        <div className="content-container">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-16 animate-fade-in-up">
              <h2 className="text-heading-1 mb-6 text-white">
                Our Premium <span className="text-shimmer">Services</span>
              </h2>
                <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                  We provide various professional gaming boosting services to help you 
                  achieve your gaming goals quickly and safely.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group card card-interactive card-hover p-5 flex items-center gap-4 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <span className="text-gray-200 font-semibold group-hover:text-primary-300 transition-colors text-left leading-tight">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link
                href="/services"
                className="group btn-primary inline-flex items-center space-x-3 text-lg hover-lift"
              >
                <span>View All Services</span>
                <FiArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

