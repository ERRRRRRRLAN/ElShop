/**
 * Root Layout Component
 * 
 * This is the root layout for the entire Next.js application. It wraps all pages
 * and provides the basic HTML structure, global styles, and context providers.
 * 
 * Key Features:
 * - Sets up the HTML document structure
 * - Applies global styles and fonts
 * - Provides CartContext to all child components
 * - Includes Header and Footer on every page
 * - Sets SEO metadata
 * 
 * @module app/layout
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/context/CartContext'

/**
 * Inter font configuration
 * Loads the Inter font from Google Fonts with Latin subset
 * This font is applied to the entire application
 */
const inter = Inter({ subsets: ['latin'] })

/**
 * SEO Metadata
 * These metadata values are used for:
 * - Page title (shown in browser tab)
 * - Meta description (for search engines)
 * - Social media sharing previews
 */
export const metadata: Metadata = {
  title: 'ElShop - Game Items & Boosting Services',
  description: 'ElShop - Trusted platform for game items and premium gaming services',
}

/**
 * RootLayout Component
 * 
 * This component wraps all pages in the application. It provides:
 * - HTML structure with lang attribute
 * - Body with font and background styling
 * - CartProvider for shopping cart state management
 * - Header component (navigation)
 * - Main content area where page content is rendered
 * - Footer component
 * 
 * @param {React.ReactNode} children - The page content to be rendered
 * @returns {JSX.Element} The root layout structure
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} bg-black`}>
        {/* CartProvider wraps the entire app to provide cart state to all components */}
        <CartProvider>
          {/* Header component - appears on all pages */}
          <Header />
          
          {/* Main content area - page-specific content is rendered here */}
          <main className="min-h-screen bg-black">
            {children}
          </main>
          
          {/* Footer component - appears on all pages */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
