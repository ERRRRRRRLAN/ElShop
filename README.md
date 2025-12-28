# ElShop - Game Items & Joki Services Platform

ElShop adalah platform e-commerce modern yang dirancang khusus untuk menjual item game dan menyediakan jasa joki gaming. Website ini menggabungkan fungsi company profile dengan sistem e-commerce lengkap, memberikan pengalaman berbelanja yang seamless untuk para gamer Indonesia.

Platform ini dibangun menggunakan teknologi web modern dengan fokus pada performa, user experience, dan desain yang menarik. ElShop mendukung berbagai produk gaming seperti diamond Mobile Legends, UC PUBG Mobile, Genesis Crystal Genshin Impact, voucher Steam Wallet, serta berbagai jasa joki rank untuk berbagai game populer.

## Fitur Utama

### Company Profile
- Halaman beranda dengan hero section yang menarik dan animasi modern
- Halaman tentang perusahaan yang informatif
- Halaman layanan yang menjelaskan berbagai jasa yang ditawarkan
- Halaman kontak dengan form untuk komunikasi

### E-commerce
- Katalog produk lengkap dengan sistem filtering berdasarkan kategori dan game
- Halaman detail produk yang informatif
- Shopping cart yang persisten menggunakan localStorage
- Halaman checkout yang siap untuk integrasi payment gateway
- Desain responsif yang optimal untuk mobile dan desktop

### Teknologi & Performa
- Server-side rendering dengan Next.js untuk performa optimal
- Type safety dengan TypeScript untuk mengurangi bug
- Styling modern dengan Tailwind CSS
- State management dengan React Context API
- Animasi dan transisi yang smooth untuk pengalaman pengguna yang lebih baik

## Tech Stack

- **Next.js 14** - React framework dengan App Router untuk routing dan server-side rendering
- **TypeScript** - Type safety dan developer experience yang lebih baik
- **Tailwind CSS** - Utility-first CSS framework untuk styling yang cepat dan konsisten
- **React Icons** - Library icon yang komprehensif
- **React Context API** - State management untuk shopping cart

## Getting Started

### Prerequisites

- Node.js 18 atau lebih tinggi
- npm atau yarn package manager

### Installation

Clone repository ini dan install dependencies:

```bash
git clone https://github.com/yourusername/elshop.git
cd elshop
npm install
```

### Development

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat website.

### Production Build

Untuk membuat production build:

```bash
npm run build
npm start
```

## Struktur Project

```
├── app/                    # Next.js App Router pages
│   ├── about/             # Halaman tentang
│   ├── cart/              # Halaman shopping cart
│   ├── checkout/          # Halaman checkout
│   ├── contact/           # Halaman kontak
│   ├── products/          # Listing dan detail produk
│   ├── services/          # Halaman layanan
│   ├── layout.tsx         # Root layout dengan Header dan Footer
│   ├── page.tsx           # Halaman beranda
│   └── globals.css        # Global styles dan custom animations
├── components/            # React components
│   ├── home/             # Komponen untuk halaman beranda
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── PopularProducts.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── layout/           # Komponen layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── products/         # Komponen produk
│   │   └── ProductCard.tsx
│   └── ui/               # Komponen UI reusable
│       └── CustomDropdown.tsx
├── context/              # React Context providers
│   └── CartContext.tsx   # State management untuk shopping cart
└── data/                 # Data files
    └── products.ts       # Data produk dan helper functions
```

## Fitur yang Akan Ditambahkan

- Integrasi payment gateway (Midtrans, Stripe, atau lainnya)
- Sistem autentikasi pengguna
- Riwayat pesanan
- Review dan rating produk
- Dashboard admin untuk manajemen produk
- Fitur pencarian produk
- Wishlist untuk menyimpan produk favorit
- Notifikasi real-time untuk status pesanan

## Customization

Website ini dirancang sebagai template yang mudah dikustomisasi. Anda dapat:

- Mengubah data produk di `data/products.ts`
- Menyesuaikan warna dan tema di `tailwind.config.ts`
- Memodifikasi komponen di folder `components/`
- Menambahkan halaman baru di folder `app/`

## Browser Support

Website ini mendukung semua browser modern termasuk:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - bebas digunakan untuk proyek personal maupun komersial.

## Kontribusi

Kontribusi sangat diterima. Silakan buat issue atau pull request jika Anda ingin berkontribusi pada project ini.
