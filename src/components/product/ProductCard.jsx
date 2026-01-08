import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { id, name, price, image, originalPrice } = product;

  // Calculate discount percentage if originalPrice exists
  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${id}`} className={styles.productLink}>
        {/* Product Image Container */}
        <div className={styles.imageContainer}>
          <img src={image} alt={name} className={styles.productImage} />
          {discount && (
            <span className={styles.discountBadge}>-{discount}%</span>
          )}
          {/* Quick view overlay on hover */}
          <div className={styles.overlay}>
            <button className={styles.quickViewBtn}>Quick View</button>
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{name}</h3>
          <div className={styles.priceContainer}>
            <span className={styles.price}>${price.toFixed(2)}</span>
            {originalPrice && originalPrice > price && (
              <span className={styles.originalPrice}>
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button className={styles.addToCartBtn} aria-label="Add to cart">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

