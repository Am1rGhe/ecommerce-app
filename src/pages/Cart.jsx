import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import { useCart } from "../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();

  const totalPrice = getTotalPrice();
  const shipping = totalPrice > 0 ? 10.0 : 0; // $10 shipping fee
  const tax = totalPrice * 0.15; // Quebec tax (usually around 15%)
  const finalTotal = totalPrice + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className={styles.cartContainer}>
          <h1 className={styles.pageTitle}>Shopping Cart</h1>
          <div className={styles.emptyCart}>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/products" className={styles.continueShoppingBtn}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.cartContainer}>
        <h1 className={styles.pageTitle}>Shopping Cart</h1>

        <div className={styles.cartContent}>
          {/* Cart Items */}
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>

                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                </div>

                <div className={styles.quantityControls}>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className={styles.quantity}>{item.quantity}</span>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <div className={styles.itemSubtotal}>
                  <p className={styles.subtotalLabel}>Subtotal</p>
                  <p className={styles.subtotalPrice}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className={styles.cartSummary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className={styles.summaryRow + " " + styles.totalRow}>
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className={styles.checkoutBtn}>
              Proceed to Checkout
            </Link>

            <Link to="/products" className={styles.continueShoppingLink}>
              Continue Shopping
            </Link>

            <button
              className={styles.clearCartBtn}
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;

