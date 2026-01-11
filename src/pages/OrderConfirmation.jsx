import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import styles from "./OrderConfirmation.module.css";

function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const orderId = location.state?.orderId;

    if (!orderId) {
      // No order ID, redirect to home
      navigate("/");
      return;
    }

    // Get order from localStorage
    try {
      const ordersString = localStorage.getItem("orders");
      const orders = ordersString ? JSON.parse(ordersString) : [];
      const foundOrder = orders.find((o) => o.id === orderId);

      if (foundOrder) {
        setOrder(foundOrder);
      } else {
        // Order not found
        navigate("/");
      }
    } catch (error) {
      console.error("Error loading order:", error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  }, [location.state, navigate]);

  // Format date to readable format
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className={styles.confirmationContainer}>
          <p>Loading order details...</p>
        </div>
      </Layout>
    );
  }

  if (!order) {
    return (
      <Layout>
        <div className={styles.confirmationContainer}>
          <h1>Order Not Found</h1>
          <p>We couldn't find your order. Please check your order history.</p>
          <Link to="/" className={styles.homeBtn}>
            Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.confirmationContainer}>
        {/* Success Icon */}
        <div className={styles.successIcon}>✓</div>

        {/* Thank You Message */}
        <h1 className={styles.thankYouTitle}>Thank you for your order!</h1>
        <p className={styles.successMessage}>
          Your order has been placed successfully. We'll send you a confirmation
          email shortly.
        </p>

        {/* Order Number */}
        <div className={styles.orderNumberBox}>
          <span className={styles.orderNumberLabel}>Order Number:</span>
          <span className={styles.orderNumberValue}>{order.id}</span>
        </div>

        {/* Order Items Section */}
        <div className={styles.orderSection}>
          <h2 className={styles.sectionTitle}>Order Items</h2>
          <div className={styles.orderItemsList}>
            {order.items.map((item) => (
              <div key={item.id} className={styles.orderItem}>
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemQuantity}>Quantity: {item.quantity}</p>
                  <p className={styles.itemPrice}>
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
                <div className={styles.itemSubtotal}>
                  <span className={styles.subtotalLabel}>Subtotal</span>
                  <span className={styles.subtotalPrice}>
                    ${item.subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout for Shipping and Summary */}
        <div className={styles.twoColumnLayout}>
          {/* Shipping Information Section */}
          <div className={styles.orderSection}>
            <h2 className={styles.sectionTitle}>Shipping Information</h2>
            <div className={styles.shippingInfo}>
              <p>
                <strong>Name:</strong> {order.shippingInfo.fullName}
              </p>
              <p>
                <strong>Email:</strong> {order.shippingInfo.email}
              </p>
              <p>
                <strong>Phone:</strong> {order.shippingInfo.phone}
              </p>
              <p>
                <strong>Address:</strong> {order.shippingInfo.address}
              </p>
              <p>
                <strong>City:</strong> {order.shippingInfo.city}
              </p>
              <p>
                <strong>State:</strong> {order.shippingInfo.state}
              </p>
              <p>
                <strong>ZIP Code:</strong> {order.shippingInfo.zipCode}
              </p>
              <p>
                <strong>Country:</strong> {order.shippingInfo.country}
              </p>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className={styles.orderSection}>
            <h2 className={styles.sectionTitle}>Order Summary</h2>
            <div className={styles.summaryDetails}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${order.totals.subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>${order.totals.shipping.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Tax</span>
                <span>${order.totals.tax.toFixed(2)}</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>${order.totals.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className={styles.orderSection}>
          <h2 className={styles.sectionTitle}>Order Details</h2>
          <div className={styles.orderDetails}>
            <p>
              <strong>Order Date:</strong> {formatDate(order.date)}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={styles.statusBadge}>{order.status}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <Link to="/products" className={styles.continueBtn}>
            Continue Shopping
          </Link>
          <Link to="/" className={styles.homeBtn}>
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default OrderConfirmation;

