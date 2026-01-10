import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/common/Layout";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = getProductById(productId);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Product not found
  if (!product) {
    return (
      <Layout>
        <div className={styles.notFoundContainer}>
          <h1>Product Not Found</h1>
          <p>Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/products" className={styles.backButton}>
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  // Calculate discount if exists
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : null;

  // Quantity handlers
  const increaseQuantity = () => {
    setQuantity((q) => q + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  // Add to cart handler
  const handleAddToCart = () => {
    // Add product to cart 'quantity' times
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
  };

  return (
    <Layout>
      <div className={styles.productDetailContainer}>
        
        <nav className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/products">Products</Link>
          <span> / </span>
          <span>{product.name}</span>
        </nav>

        {/* Back Button */}
        <button
          className={styles.backBtn}
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ← Back
        </button>

        {/* Product Content */}
        <div className={styles.productContent}>
          {/* Product Image */}
          <div className={styles.imageSection}>
            <div className={styles.mainImageContainer}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.mainImage}
              />
              {discount && (
                <span className={styles.discountBadge}>-{discount}%</span>
              )}
            </div>
          </div>

          {/*  Product Info */}
          <div className={styles.infoSection}>
            <h1 className={styles.productName}>{product.name}</h1>

            {/* Price Section */}
            <div className={styles.priceSection}>
              <span className={styles.currentPrice}>
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <>
                    <span className={styles.originalPrice}>
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    {discount && (
                      <span className={styles.discountText}>
                        Save {discount}%!
                      </span>
                    )}
                  </>
                )}
            </div>

            {/* Category */}
            <div className={styles.category}>
              <span className={styles.categoryLabel}>Category:</span>
              <span className={styles.categoryValue}>{product.category}</span>
            </div>

            {/* Description */}
            <div className={styles.description}>
              <h3 className={styles.descriptionTitle}>Description</h3>
              <p className={styles.descriptionText}>{product.description}</p>
            </div>

            <div className={styles.quantitySection}>
              <label className={styles.quantityLabel}>Quantity:</label>
              <div className={styles.quantityControls}>
                <button
                  className={styles.quantityBtn}
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className={styles.quantityValue}>{quantity}</span>
                <button
                  className={styles.quantityBtn}
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                Add to Cart
              </button>
              <Link to="/cart" className={styles.viewCartBtn}>
                View Cart
              </Link>
            </div>

            {/* Additional Info */}
            <div className={styles.additionalInfo}>
              <div className={styles.infoItem}>
                <strong>Free Shipping</strong> on orders over $50
              </div>
              <div className={styles.infoItem}>
                <strong>Easy Returns</strong> within 30 days
              </div>
              <div className={styles.infoItem}>
                <strong>Secure Payment</strong> guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;
