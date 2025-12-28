'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="section-container section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-heading-1 mb-4 text-center text-white">Contact Us</h1>
            <p className="text-body-large text-gray-400 mb-12 text-center">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="card p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-900/50 rounded-xl flex items-center justify-center border border-primary-800">
                      <FiMail className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-sm text-gray-400">support@elshop.com</p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-900/50 rounded-xl flex items-center justify-center border border-primary-800">
                      <FiPhone className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-sm text-gray-400">+62 812-3456-7890</p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-900/50 rounded-xl flex items-center justify-center border border-primary-800">
                      <FiMapPin className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Address</h3>
                      <p className="text-sm text-gray-400">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="card p-6 space-y-6">
              {isSubmitted && (
                <div className="bg-green-900/30 border border-green-800 text-green-400 px-4 py-3 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-300 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-300 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-300 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-300 placeholder-gray-500"
                  />
              </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <FiSend className="w-5 h-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
