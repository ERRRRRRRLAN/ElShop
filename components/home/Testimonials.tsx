import { FiStar, FiUser } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Ahmad Rizki',
    role: 'Mobile Legends Player',
    content: 'Very fast and professional service. Items went directly to my account within minutes. Highly recommended!',
    rating: 5,
    avatar: 'AR',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'PUBG Mobile Player',
    content: 'Their rank boosting service is excellent. Account is safe and rank increased as promised. Thank you ElShop!',
    rating: 5,
    avatar: 'SN',
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    name: 'Budi Santoso',
    role: 'Genshin Impact Player',
    content: 'Competitive prices and easy transaction process. Support is also very responsive. Will order again!',
    rating: 5,
    avatar: 'BS',
    gradient: 'from-purple-500/20 to-indigo-500/20',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
      <div className="section-shadow-top"></div>
      <div className="section-shadow-bottom"></div>
      <div className="section-gradient-overlay"></div>
      
      {/* Background Elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-primary-600/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="content-container">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-heading-1 mb-6 text-white">
              What Our <span className="text-shimmer">Customers Say?</span>
            </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Thousands of satisfied customers with our services worldwide
              </p>
          </div>

          {/* Enhanced Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group card card-interactive card-hover p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-base text-gray-200 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors italic min-h-[4rem]">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Customer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-700/50">
                  <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform flex-shrink-0`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white group-hover:text-primary-300 transition-colors text-sm truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

