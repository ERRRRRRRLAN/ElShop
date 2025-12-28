/**
 * Tailwind CSS Configuration
 * 
 * This file configures Tailwind CSS with custom theme extensions including
 * colors, animations, and utilities specific to this project.
 * 
 * Custom Theme Extensions:
 * - Primary color palette (magenta/purple gradient)
 * - Accent color palette
 * - Custom animations (fade-in, fade-in-up, slide-in, etc.)
 * - Custom box shadows
 * 
 * To modify colors:
 * 1. Change the hex values in the color objects below
 * 2. Restart the development server for changes to take effect
 * 
 * @module tailwind.config
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  // Files to scan for Tailwind classes
  // Tailwind will only include CSS for classes found in these files
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom Color Palette
      colors: {
        // Primary color - Magenta/Purple gradient theme
        // Used for buttons, links, accents, and primary UI elements
        primary: {
          50: '#faf5ff',   // Lightest shade
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#e607d1',  // Bright magenta
          500: '#cc06ba',  // Medium magenta
          600: '#b306a2',  // Main primary color (DEFAULT)
          700: '#99058b',  // Darker shade
          800: '#800474',  // Even darker
          900: '#66035d',  // Very dark
          950: '#4d0246',  // Darkest shade
          DEFAULT: '#b306a2', // Default primary color
        },
        // Accent colors - Complementary color palette
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#33022e',
          400: '#190117',
          500: '#000000',  // Pure black
          600: '#e607d1', // Bright accent
          700: '#cc06ba',
          800: '#b306a2',
          900: '#99058b',
        },
      },
      // Custom Animations
      // These can be used with Tailwind's animate-* utilities
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',           // Simple fade in
        'fade-in-up': 'fadeInUp 0.6s ease-out',        // Fade in from bottom
        'slide-in': 'slideIn 0.5s ease-out',            // Slide in from left
        'bounce-slow': 'bounce 3s infinite',             // Slow bounce
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Slow pulse
        'gradient': 'gradient 15s ease infinite',       // Gradient animation
      },
      // Animation Keyframes
      // Define the actual animation sequences
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      // Custom Box Shadows
      // Predefined shadow styles for consistent depth
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 20px rgba(179, 6, 162, 0.3)',           // Primary glow effect
        'glow-purple': '0 0 30px rgba(179, 6, 162, 0.4)',     // Stronger glow
      },
    },
  },
  // Tailwind plugins (none currently used)
  plugins: [],
}

export default config
