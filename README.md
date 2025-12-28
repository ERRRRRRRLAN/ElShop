# ElShop - Game Items & Joki Services Platform

A modern, full-featured e-commerce platform built with Next.js 14, designed specifically for selling gaming items and gaming services (joki/boosting). This project combines a company profile website with a complete e-commerce system, providing a seamless shopping experience for gamers.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Customization Guide](#customization-guide)
- [Adding Products](#adding-products)
- [Styling & Theming](#styling--theming)
- [Building Components](#building-components)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

### Company Profile Pages
- **Home Page**: Beautiful hero section with modern animations, features showcase, popular products, services, testimonials, and call-to-action sections
- **About Page**: Informative company/about page
- **Services Page**: Detailed services page explaining various gaming services offered
- **Contact Page**: Contact form for customer communication

### E-commerce Functionality
- **Product Catalog**: Complete product listing with filtering by category and game
- **Product Details**: Detailed product pages with full information
- **Shopping Cart**: Persistent shopping cart using localStorage (cart persists even after browser close)
- **Checkout Page**: Ready-to-integrate checkout page (payment gateway integration can be added)
- **Responsive Design**: Fully responsive design optimized for mobile, tablet, and desktop devices

### Technical Features
- **Server-Side Rendering**: Next.js 14 App Router for optimal performance and SEO
- **Type Safety**: TypeScript for reduced bugs and better developer experience
- **Modern Styling**: Tailwind CSS with custom design system
- **State Management**: React Context API for shopping cart state
- **Smooth Animations**: Custom animations and transitions for better UX
- **Image Optimization**: Next.js Image component for optimized image loading

## Tech Stack

- **Next.js 14** - React framework with App Router for routing and server-side rendering
- **TypeScript** - Type safety and enhanced developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Icons** - Comprehensive icon library (Feather Icons)
- **React Context API** - State management for shopping cart

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.0.0 or higher ([Download Node.js](https://nodejs.org/))
- **npm**: Comes with Node.js, or use **yarn** as an alternative package manager
- **Git**: For cloning the repository ([Download Git](https://git-scm.com/))

### Verifying Installation

Open your terminal/command prompt and run:

```bash
node --version  # Should show v18.0.0 or higher
npm --version   # Should show version number
git --version   # Should show version number
```

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/ERRRRRRRLAN/ElShop.git
cd ElShop
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`. The installation may take a few minutes depending on your internet connection.

### Step 3: Verify Installation

After installation completes, verify that `node_modules` folder exists and contains packages. You should see no errors in the terminal.

## Getting Started

### Development Mode

To start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

**Important Notes:**
- The server will automatically reload when you make changes to the code
- Check the terminal for any compilation errors
- Open your browser's developer console (F12) to see any runtime errors

### Production Build

To create an optimized production build:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

To start the production server:

```bash
npm start
```

The production server will run on [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
ElShop/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   │   └── page.tsx
│   ├── cart/                     # Shopping cart page
│   │   └── page.tsx
│   ├── checkout/                 # Checkout page
│   │   └── page.tsx
│   ├── contact/                  # Contact page
│   │   └── page.tsx
│   ├── products/                 # Products pages
│   │   ├── [id]/                # Dynamic product detail page
│   │   │   └── page.tsx
│   │   └── page.tsx             # Products listing page
│   ├── services/                 # Services page
│   │   └── page.tsx
│   ├── layout.tsx               # Root layout (Header, Footer, CartProvider)
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles and custom CSS
│   ├── error.tsx                # Error boundary component
│   ├── not-found.tsx            # 404 page
│   └── global-error.tsx         # Global error boundary
│
├── components/                   # React components
│   ├── home/                    # Home page components
│   │   ├── Hero.tsx            # Hero section with animations
│   │   ├── Features.tsx        # Features showcase
│   │   ├── PopularProducts.tsx # Popular products section
│   │   ├── Services.tsx        # Services preview
│   │   ├── Testimonials.tsx    # Customer testimonials
│   │   └── CTA.tsx             # Call-to-action section
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Footer component
│   ├── products/                # Product-related components
│   │   └── ProductCard.tsx     # Product card component
│   └── ui/                      # Reusable UI components
│       └── CustomDropdown.tsx   # Custom dropdown component
│
├── context/                      # React Context providers
│   └── CartContext.tsx         # Shopping cart state management
│
├── data/                         # Data files
│   └── products.ts              # Product data and helper functions
│
├── public/                       # Static assets (images, icons, etc.)
│
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## Configuration

### Environment Variables

Currently, no environment variables are required. However, if you plan to add features like:
- Payment gateway integration
- Email service
- Database connection
- API keys

Create a `.env.local` file in the root directory:

```env
# Example environment variables (add as needed)
NEXT_PUBLIC_API_URL=https://api.example.com
PAYMENT_GATEWAY_KEY=your_key_here
```

### Next.js Configuration

The `next.config.js` file contains image domain configurations. If you need to load images from additional domains, add them to the `remotePatterns` array:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-domain.com',
    },
  ],
}
```

### TypeScript Configuration

The `tsconfig.json` file is configured with:
- Path aliases (`@/*` points to root directory)
- Strict type checking enabled
- Next.js plugin for optimal TypeScript support

## Customization Guide

### Adding Products

Products are stored in `data/products.ts`. To add a new product:

1. Open `data/products.ts`
2. Add a new object to the `products` array:

```typescript
{
  id: '9', // Unique ID (string)
  name: 'Your Product Name',
  description: 'Product description here',
  price: 30000, // Price in IDR (number, no decimals)
  image: 'https://your-image-url.com/image.jpg', // Image URL
  category: 'Diamond', // Category name
  game: 'Mobile Legends', // Game name
  stock: 100, // Available stock
  type: 'product', // 'product' or 'service'
}
```

**Product Types:**
- `'product'`: Physical or digital products (e.g., diamonds, vouchers)
- `'service'`: Services (e.g., joki/boosting services)

**Important:** Make sure image URLs are accessible and added to `next.config.js` if from external domains.

### Modifying Colors and Theme

Colors are configured in `tailwind.config.ts`. The primary color scheme uses a magenta/purple gradient:

```typescript
primary: {
  600: '#b306a2', // Main primary color
  // ... other shades
}
```

To change the theme:
1. Open `tailwind.config.ts`
2. Modify the `primary` color values
3. Update `globals.css` if you need to change CSS variables

### Customizing Components

All components are in the `components/` directory. Each component is self-contained and can be modified independently.

**Example: Modifying the Header**
1. Open `components/layout/Header.tsx`
2. Modify the navigation links, styling, or add new features
3. Changes will reflect immediately in development mode

### Adding New Pages

To add a new page:

1. Create a new folder in `app/` directory (e.g., `app/new-page/`)
2. Create `page.tsx` inside that folder:

```typescript
export default function NewPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="section-container py-12">
        <div className="content-container">
          <h1 className="text-heading-1 text-white">New Page</h1>
          {/* Your content here */}
        </div>
      </div>
    </div>
  )
}
```

3. Add navigation link in `components/layout/Header.tsx`

### Styling Guidelines

The project uses Tailwind CSS with custom utility classes:

- `.section-container` - Container with max-width and padding
- `.content-container` - Content wrapper with max-width
- `.card` - Card component with glassmorphism effect
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.text-heading-1`, `.text-heading-2`, `.text-heading-3` - Typography scales
- `.animate-fade-in-up` - Fade in animation

See `app/globals.css` for all custom classes and animations.

## Building Components

### Creating a New Component

1. Create a new file in the appropriate `components/` subdirectory
2. Use TypeScript for type safety:

```typescript
'use client' // Required if using hooks or client-side features

import { useState } from 'react'

interface MyComponentProps {
  title: string
  description?: string
}

export default function MyComponent({ title, description }: MyComponentProps) {
  const [state, setState] = useState(false)
  
  return (
    <div className="card">
      <h2 className="text-heading-2 text-white">{title}</h2>
      {description && <p className="text-body text-gray-400">{description}</p>}
    </div>
  )
}
```

3. Import and use in your pages:

```typescript
import MyComponent from '@/components/my-component'

export default function Page() {
  return <MyComponent title="Hello" description="World" />
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure settings
5. Click "Deploy"

### Other Platforms

**Netlify:**
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables if needed

**Self-Hosting:**
1. Run `npm run build`
2. Run `npm start`
3. Configure your server to run Node.js
4. Set up reverse proxy (nginx/Apache) if needed

## Troubleshooting

### Common Issues

**Issue: `npm install` fails**
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Check Node.js version: `node --version` (should be 18+)

**Issue: Port 3000 already in use**
- **Solution**: Kill the process using port 3000 or change port:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  
  # Mac/Linux
  lsof -ti:3000 | xargs kill
  ```

**Issue: Images not loading**
- **Solution**: Check if image URLs are added to `next.config.js` `remotePatterns`
- Verify image URLs are accessible

**Issue: TypeScript errors**
- **Solution**: Run `npm run build` to see detailed error messages
- Check that all imports are correct
- Verify TypeScript version compatibility

**Issue: Cart not persisting**
- **Solution**: Check browser localStorage is enabled
- Clear browser cache and try again
- Check browser console for errors

**Issue: Styling not applying**
- **Solution**: Restart development server
- Clear `.next` folder and rebuild
- Check Tailwind classes are spelled correctly

### Getting Help

If you encounter issues not listed here:
1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. Open an issue on GitHub with:
   - Description of the problem
   - Steps to reproduce
   - Error messages (if any)
   - Your environment (OS, Node.js version)

## Features to Add (Future Development)

- Payment gateway integration (Midtrans, Stripe, etc.)
- User authentication system
- Order history page
- Product reviews and ratings
- Admin dashboard for product management
- Product search functionality
- Wishlist feature
- Real-time order status notifications
- Email notifications
- Multi-language support
- Dark/light theme toggle

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Guidelines:**
- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed
- Test your changes thoroughly

## Browser Support

This website supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For questions, issues, or contributions:
- Open an issue on [GitHub](https://github.com/ERRRRRRRLAN/ElShop/issues)
- Check existing issues before creating new ones

---

**Made with ❤️ for the gaming community**
