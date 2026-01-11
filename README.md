# AMIR - E-Commerce Website

A fully functional e-commerce website built with React, featuring product browsing, shopping cart, authentication, and order management.

## 🚀 Features

### ✨ Core Features

#### **Product Browsing & Discovery**
- **Home Page** - Featured products showcase with "See All Products" button
- **Products Page** - Browse all products with advanced filtering and sorting
  - Category filtering (Men, Women, All)
  - Sorting options (Price: Low/High, Name: A-Z/Z-A)
  - Search functionality with real-time filtering
  - Product count display
- **Product Detail Page** - Complete product information
  - High-quality product images
  - Detailed descriptions
  - Price with discount badges
  - Quantity selector
  - Add to cart functionality
  - Quick view of product details

#### **Shopping Cart**
- Add/remove items from cart
- Update item quantities with +/- controls
- Real-time cart total calculation
- Persistent cart storage (localStorage)
- Cart badge showing total items in header
- Empty cart state with "Continue Shopping" button
- Cart summary with subtotal, shipping, and tax calculations

#### **Search Functionality**
- Search bar in header (click icon to open)
- Real-time product search by name
- URL-based search (shareable search URLs)
- Combined search with category filtering
- Search results display with query highlighting

#### **User Authentication**
- User registration with validation
  - Name, email, password fields
  - Password confirmation
  - Form validation
- User login
  - Email and password authentication
  - Demo credentials provided
  - Persistent login sessions (localStorage)
- User profile display
  - Avatar with user initials
  - Random color generation for avatars
  - Logout functionality
- Protected routes and authentication state management

#### **Checkout Process**
- **Shipping Information Form**
  - Full name, email, phone number
  - Complete address (street, city, state, ZIP code, country)
  - Canadian postal code format validation
  - Comprehensive form validation
  - Error messages for invalid fields
- **Order Processing**
  - Unique order ID generation
  - Order creation and storage
  - Cart clearing after successful order
  - Automatic navigation to confirmation page

#### **Order Management**
- **Order Confirmation Page**
  - Thank you message with success icon
  - Order number display
  - Complete order details
  - Shipping information
  - Order summary with totals
  - Order date and status
  - Navigation buttons (Continue Shopping, Back to Home)
- **Track Order Page**
  - View all past orders
  - Orders sorted by date (newest first)
  - Order details (items, shipping, totals)
  - Order status badges
  - Empty state for users with no orders

#### **Navigation & Layout**
- Responsive header with:
  - Brand logo (AMIR)
  - Navigation links (Women, Men, About)
  - Active link highlighting
  - Search functionality
  - Cart icon with item count
  - User authentication section
- Professional footer with:
  - Quick links
  - Customer service links (including Track Order)
  - Newsletter subscription form
  - Social media links
  - Payment method icons
  - Copyright information
- Consistent layout across all pages

#### **Responsive Design**
- Mobile-friendly layouts
- Responsive navigation
- Adaptive grid layouts
- Touch-friendly buttons and controls
- Optimized for all screen sizes

## 🛠️ Technologies Used

- **React 19** - UI library
- **React Router DOM 7** - Client-side routing
- **Vite** - Build tool and development server
- **CSS Modules** - Scoped styling
- **Context API** - State management (Cart, Authentication)
- **localStorage** - Client-side data persistence

## 📁 Project Structure

```
ecommerce-app/
├── src/
│   ├── components/
│   │   ├── common/          # Header, Footer, Layout
│   │   └── product/         # ProductCard component
│   ├── pages/               # All page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderConfirmation.jsx
│   │   ├── TrackOrder.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── About.jsx
│   ├── context/             # Global state management
│   │   ├── CartContext.jsx
│   │   └── AuthContext.jsx
│   ├── data/                # Product data
│   │   └── products.js
│   ├── App.jsx              # Main app with routing
│   └── main.jsx             # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation



1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📄 Available Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Featured products showcase |
| `/products` | Products | Browse all products with filters |
| `/products?search=query` | Products | Search results |
| `/products?category=Men` | Products | Filtered by category |
| `/product/:id` | Product Detail | Individual product page |
| `/cart` | Cart | Shopping cart |
| `/checkout` | Checkout | Checkout form and order placement |
| `/order-confirmation` | Order Confirmation | Order success page |
| `/track-order` | Track Order | View order history |
| `/login` | Login | User login page |
| `/register` | Register | User registration page |
| `/about` | About | About page |

## 🎯 Key Features Explained

### State Management

- **CartContext**: Manages shopping cart state globally
  - Add/remove items
  - Update quantities
  - Calculate totals
  - Persistent storage with localStorage

- **AuthContext**: Manages user authentication
  - Login/logout functionality
  - User session persistence
  - Protected routes

### Data Persistence

All data is stored in browser's localStorage:
- Shopping cart items
- User authentication state
- Order history

### Form Validation

Comprehensive validation on checkout form:
- Required fields
- Email format validation
- Phone number validation (minimum 10 digits)
- Canadian postal code format (e.g., H2X 3Y7)
- Full name minimum length
- Real-time error display
- Error clearing on input

### Search Functionality

- Toggle search bar with icon click
- Real-time search as you type
- Searches product names
- Combines with category filters
- URL-based (shareable search results)

### Order Management

- Unique order IDs (timestamp-based: ORD-1234567890)
- Complete order storage in localStorage
- Order history tracking
- Order confirmation with all details
- Order status display

## 🎨 Design Features

- Clean and modern UI
- Consistent color scheme
- Smooth animations and transitions
- Professional typography
- Intuitive navigation
- User-friendly forms
- Clear error messages
- Loading states
- Empty states with helpful messages

## 🔒 Authentication

### Demo Credentials

For testing purposes, you can use:
- **Email**: `amir@gmail.com`
- **Password**: `amir123`

Or register a new account with any email and password.

### Features

- Secure password storage (for demo: localStorage)
- Session persistence
- User profile display
- Logout functionality

## 🛒 Shopping Experience

1. **Browse Products**: Explore products on home page or products page
2. **Search**: Use search bar to find specific products
3. **Filter**: Filter by category (Men/Women)
4. **Sort**: Sort by price or name
5. **View Details**: Click product to see full details
6. **Add to Cart**: Add items with desired quantity
7. **Manage Cart**: Update quantities or remove items
8. **Checkout**: Fill shipping information and place order
9. **Track Orders**: View order history anytime

## 📝 Notes

- This is a **frontend-only** demo application
- All data persists in browser's localStorage
- No backend API integration
- No real payment processing (demo only)
- Product data is static (defined in `src/data/products.js`)

## 🚧 Future Enhancements

- Backend API integration
- Real payment gateway integration
- Product reviews and ratings
- Wishlist functionality
- User profile page
- Order status updates
- Email notifications
- Product recommendations
- Admin dashboard
- Inventory management



## 👤 Author

Built with ❤️ for learning and portfolio purposes.

---
