/**
 * Home Page Component
 * 
 * This is the main landing page of the ElShop website. It consists of multiple
 * sections that showcase the platform's features, products, and services.
 * 
 * Page Structure:
 * 1. Hero - Main banner with call-to-action
 * 2. Features - Key platform features
 * 3. PopularProducts - Featured products display
 * 4. Services - Gaming services overview
 * 5. Testimonials - Customer reviews
 * 6. CTA - Final call-to-action section
 * 
 * @module app/page
 */

import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import PopularProducts from '@/components/home/PopularProducts'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'

/**
 * Home Component
 * 
 * Renders the complete home page with all sections in order.
 * Each section is a separate component for better maintainability.
 * 
 * @returns {JSX.Element} The complete home page
 */
export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero section - First impression, main banner */}
      <Hero />
      
      {/* Features section - Platform highlights */}
      <Features />
      
      {/* Popular products section - Featured items */}
      <PopularProducts />
      
      {/* Services section - Gaming services overview */}
      <Services />
      
      {/* Testimonials section - Customer reviews */}
      <Testimonials />
      
      {/* CTA section - Final call-to-action */}
      <CTA />
    </div>
  )
}
