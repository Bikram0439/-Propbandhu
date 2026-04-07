# Propbandhu - Real Estate Platform 🚀

[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green.svg)](https://mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-blue.svg)](https://tailwindcss.com/)

Propbandhu is a **full-stack real estate platform** built with Node.js, Express, MongoDB, and EJS. It supports multiple user roles (Admin, Seller, Buyer, Broker) with comprehensive property management, bookings, payments, notifications, and value-added services like home loans, valuations, legal support, and investment tools.

## 🌟 Key Features

### User Roles & Dashboards
- **Admin**: User/property management, commissions, broker assignments, reports, approvals
- **Seller**: Add/edit properties, documents upload, analytics, cart management, notifications
- **Buyer**: Property search/browse, cart, bookings, schedule visits, notifications
- **Broker**: Property management, commissions tracking, visits scheduling, documents

### Core Functionality
- Property listing with approval workflow, live/not-in-cart filtering
- Advanced search (city, areas, budget, furnishing, status)
- Shopping cart & booking system with auto-cleanup
- Document upload (Cloudinary integration)
- Real-time notifications
- Commission tracking & analytics
- Role-based authentication & sessions (MongoDB store)

### Value-Added Services (Partials)
- **Buyers**: Home loans, legal support, valuations, Vastu, property management
- **Sellers**: Property valuation, management, sell/stay options, guides
- **Tenants**: Find flats, rent agreements, moving services, flatmate finder, emergency support
- **Investors**: Under-construction/pre-launch, ROI calculator, developing areas, EMI projects

### Public Pages
- Home with featured properties
- Property details & search
- Blog (buying/selling guides, investments, legal)
- Careers (job listings & applications)

## 📁 Project Structure

```
propbandhu/
├── controllers/       # Role-specific controllers
│   ├── adminController.js
│   ├── authController.js
│   ├── brokerController.js
│   ├── buyerController.js
│   └── sellerController.js
├── middleware/        # Auth & upload middleware
│   ├── auth.js
│   └── documentUpload.js
├── models/            # Mongoose schemas
│   ├── user.js
│   ├── Property.js
│   ├── Cart.js
│   ├── Booking.js
│   ├── Inquiry.js
│   ├── Notification.js
│   ├── Commission.js
│   └── Rule.js
├── routes/            # API & view routes
│   ├── admin.js
│   ├── adminViewRoutes.js
│   ├── auth.js
│   ├── broker.js
│   ├── buyer.js
│   ├── index.js
│   ├── needs.js
│   ├── notifications.js
│   └── seller.js
├── services/          # Background services
│   ├── cartCleanupService.js
│   └── simpleCleanupService.js
├── public/            # Static assets
│   ├── assets/        # Images, PDFs (properties, documents)
│   ├── css/           # Tailwind + custom (role dashboards)
│   └── js/
├── views/             # EJS templates
│   ├── admin/, buyer/, broker/, seller/  # Role dashboards
│   ├── auth/
│   ├── partials/      # Reusable (navbar, footer, services)
│   └── public pages (index, blog, careers, etc.)
├── server.js          # Express app entrypoint
├── package.json       # Dependencies
└── .env               # Environment vars
```

## 🛠 Quick Setup

1. **Clone & Install**
   ```bash
   git clone <repo-url>
   cd propbandhu
   npm install
   ```

2. **Environment Variables** (`.env`)
   ```
   MONGODB_URI=mongodb://localhost:27017/propbandhu
   SESSION_SECRET=your-secret-key
   PORT=3000
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   JWT_SECRET=your-jwt-secret
   ```

3. **Database**
   - MongoDB required (local or Atlas)
   - Run `npm run dev` (uses nodemon)

4. **Run**
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```
   Server: http://localhost:3000

## 🚀 Role-Based Access

| Role   | Register/Login | Dashboard URL          | Key Features |
|--------|----------------|-----------------------|--------------|
| Admin  | `/register` (role=admin) | `/admin/dashboard` | Manage users, properties, commissions, reports |
| Seller | `/register` (role=seller)| `/seller/dashboard` | List properties, analytics, documents |
| Buyer  | `/register` (role=buyer) | `/buyer/dashboard`  | Browse, cart, book, visits |
| Broker | `/register` (role=broker)| `/broker/dashboard` | Commissions, visits, properties |

## 🔗 Key Endpoints

- **Public**: `/` (home), `/properties`, `/properties/:id`, `/search`, `/blog`, `/careers`
- **API Search**: `GET /api/properties/search?city=...&budget=...`
- **Auth**: `POST /api/login`, `POST /api/register`, `/logout`
- **Role Routes**: `/seller/*`, `/buyer/*`, `/broker/*`, `/admin/api/*`

## 📱 Public Assets Highlights
- Property images: JM-Aroma, SG-Vista, Ultima-107, Windsor Majesty, etc.
- Services: Home loan video, PDF docs (Idcrade.pdf), banners
- Documents: Uploaded PDFs in `public/assets/documents/`

## 🧪 Testing & Development

- Sessions stored in MongoDB (`sessions` collection)
- Cleanup services run automatically (carts/bookings)
- TailwindCSS for responsive UI
- Cloudinary for document/property images

## 🤝 Contributing

1. Fork & PR
2. Follow existing code style
3. Add tests for new features
4. Update README for new services/pages

## 📄 License

MIT License - See [LICENSE](LICENSE) file.

---

**Propbandhu** - Your trusted partner in real estate! 🏠✨

*Built with ❤️ for modern real estate solutions*

