// Sample product data for the ecommerce app

export const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Men",
    description: "Premium cotton t-shirt with classic fit. Perfect for everyday wear.",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    category: "Men",
    description: "Vintage-style denim jacket with modern comfort.",
  },
  {
    id: 3,
    name: "Elegant Black Dress",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
    category: "Women",
    description: "Sophisticated black dress perfect for any occasion.",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "Men",
    description: "Comfortable and stylish sneakers for everyday use.",
  },
  {
    id: 5,
    name: "Wool Sweater",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
    category: "Women",
    description: "Cozy wool sweater for the colder months.",
  },
  {
    id: 6,
    name: "Leather Handbag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop",
    category: "Women",
    description: "Premium leather handbag with elegant design.",
  },
  {
    id: 7,
    name: "Cargo Pants",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1506629905607-ccf8b0c0c5b3?w=500&h=500&fit=crop",
    category: "Men",
    description: "Durable cargo pants with multiple pockets.",
  },
  {
    id: 8,
    name: "Silk Blouse",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
    category: "Women",
    description: "Luxurious silk blouse for a sophisticated look.",
  },
  {
    id: 9,
    name: "Hooded Sweatshirt",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    category: "Men",
    description: "Comfortable hooded sweatshirt perfect for casual wear.",
  },
  {
    id: 10,
    name: "High-Waisted Jeans",
    price: 64.99,
    originalPrice: 84.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    category: "Women",
    description: "Stylish high-waisted jeans with perfect fit.",
  },
  {
    id: 11,
    name: "Formal Shirt",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
    category: "Men",
    description: "Classic formal shirt for business and special occasions.",
  },
  {
    id: 12,
    name: "Summer Dress",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
    category: "Women",
    description: "Light and breezy summer dress with floral pattern.",
  },
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

// Helper function to get a single product by ID
export const getProductById = (id) => {
  return products.find((product) => product.id === parseInt(id));
};

// Helper function to get featured products (first 6)
export const getFeaturedProducts = () => {
  return products.slice(0, 6);
};

// Helper function to search products by name
export const searchProducts = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return products.filter((product) =>
    product.name.toLowerCase().includes(term)
  );
};

