import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import styles from "./TrackOrder.module.css";

function TrackOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get all orders from localStorage
    try {
      const ordersString = localStorage.getItem("orders");
      const ordersData = ordersString ? JSON.parse(ordersString) : [];
      // Sort by date (newest first)
      const sortedOrders = ordersData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setOrders(sortedOrders);
    } catch (error) {
      console.error("Error loading orders:", error);
    } finally {
      setLoading(false);
    }
  }, []);

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
        <div className={styles.trackOrderContainer}>
          <p>Loading orders...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.trackOrderContainer}>
        <h1 className={styles.pageTitle}>Track Your Orders</h1>

        {orders.length === 0 ? (
          <div className={styles.emptyOrders}>
            <h2>No orders found</h2>
            <p>You haven't placed any orders yet.</p>
            <Link to="/products" className={styles.shopBtn}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className={styles.ordersList}>
            {orders.map((order) => (
              <div key={order.id} className={styles.orderCard}>
                <div className={styles.orderHeader}>
                  <div className={styles.orderInfo}>
                    <h3 className={styles.orderId}>Order #{order.id}</h3>
                    <p className={styles.orderDate}>
                      Placed on {formatDate(order.date)}
                    </p>
                  </div>
                  <div className={styles.orderStatus}>
                    <span className={styles.statusBadge}>{order.status}</span>
                  </div>
                </div>

                <div className={styles.orderItems}>
                  <h4 className={styles.itemsTitle}>Items ({order.items.length})</h4>
                  <div className={styles.itemsList}>
                    {order.items.map((item) => (
                      <div key={item.id} className={styles.orderItem}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className={styles.itemImage}
                        />
                        <div className={styles.itemInfo}>
                          <p className={styles.itemName}>{item.name}</p>
                          <p className={styles.itemDetails}>
                            Quantity: {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <p className={styles.itemSubtotal}>
                          ${item.subtotal.toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.orderFooter}>
                  <div className={styles.shippingInfo}>
                    <p>
                      <strong>Shipping to:</strong> {order.shippingInfo.city},{" "}
                      {order.shippingInfo.state}
                    </p>
                  </div>
                  <div className={styles.orderTotal}>
                    <span className={styles.totalLabel}>Total:</span>
                    <span className={styles.totalAmount}>
                      ${order.totals.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default TrackOrder;

