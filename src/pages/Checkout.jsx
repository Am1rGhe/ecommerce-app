import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import { useCart } from "../context/CartContext";
import styles from "./Checkout.module.css";

function Checkout() {
  const navigate = useNavigate();
  const {
    cartItems,
    getTotalPrice,
  } = useCart();


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validate Phone
    const phoneDigits = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Phone must be at least 10 digits";
    }

    // Validate Address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    // Validate City
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    // Validate State
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    // Validate ZIP Code (Canadian Postal Code format: A1A 1A1)
    const zipCodeRegex = /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/;
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Postal code is required";
    } else if (!zipCodeRegex.test(formData.zipCode.trim())) {
      newErrors.zipCode = "Invalid postal code format (e.g., H1M 2R6)";
    }

    // Validate Country
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    // If there are errors, stop submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // If no errors, proceed to Phase 4 (order processing)
    // This will be implemented in Phase 4
    console.log("Form is valid! Proceeding to order processing...");
  };

  // Redirect to cart if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/cart");
    }
  }, [cartItems.length, navigate]);

  // Dont render if cart is empty
  if (cartItems.length === 0) {
    return null;
  }

  const totalPrice = getTotalPrice();
  const shipping = totalPrice > 0 ? 10.0 : 0;
  const tax = totalPrice * 0.15;
  const finalTotal = totalPrice + shipping + tax;

  return (
    <Layout>
      <div className={styles.checkoutContainer}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/cart">Cart</Link>
          <span> / </span>
          <span>Checkout</span>
        </nav>

        <h1 className={styles.pageTitle}>Checkout</h1>

        <div className={styles.checkoutContent}>
          
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Shipping Information</h2>
            
            <form className={styles.checkoutForm} onSubmit={handleSubmit}>
              {/* Full Name and Phone */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.label}>
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`${styles.input} ${
                      errors.fullName ? styles.inputError : ""
                    }`}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.fullName && (
                    <span className={styles.errorMessage}>{errors.fullName}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`${styles.input} ${
                      errors.phone ? styles.inputError : ""
                    }`}
                    placeholder="Enter your phone number"
                    required
                  />
                  {errors.phone && (
                    <span className={styles.errorMessage}>{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Email  */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${styles.input} ${
                      errors.email ? styles.inputError : ""
                    }`}
                    placeholder="Enter your email address"
                    required
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Address  */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="address" className={styles.label}>
                    Street Address <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`${styles.input} ${
                      errors.address ? styles.inputError : ""
                    }`}
                    placeholder="Enter your street address"
                    required
                  />
                  {errors.address && (
                    <span className={styles.errorMessage}>{errors.address}</span>
                  )}
                </div>
              </div>

              {/* City and State */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city" className={styles.label}>
                    City <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`${styles.input} ${
                      errors.city ? styles.inputError : ""
                    }`}
                    placeholder="Enter your city"
                    required
                  />
                  {errors.city && (
                    <span className={styles.errorMessage}>{errors.city}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="state" className={styles.label}>
                    State/Province <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`${styles.input} ${
                      errors.state ? styles.inputError : ""
                    }`}
                    placeholder="Enter your state"
                    required
                  />
                  {errors.state && (
                    <span className={styles.errorMessage}>{errors.state}</span>
                  )}
                </div>
              </div>

              {/*  ZIP Code and Country */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="zipCode" className={styles.label}>
                    ZIP/Postal Code <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={`${styles.input} ${
                      errors.zipCode ? styles.inputError : ""
                    }`}
                    placeholder="e.g., H2X 3Y7"
                    required
                  />
                  {errors.zipCode && (
                    <span className={styles.errorMessage}>{errors.zipCode}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="country" className={styles.label}>
                    Country <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`${styles.input} ${
                      errors.country ? styles.inputError : ""
                    }`}
                    placeholder="Enter your country"
                    required
                  />
                  {errors.country && (
                    <span className={styles.errorMessage}>{errors.country}</span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitBtn}>
                Place Order
              </button>
            </form>
          </div>

          {/*  Order Summary */}
          <div className={styles.summarySection}>
            <h2 className={styles.sectionTitle}>Order Summary</h2>

            {/* Order Items */}
            <div className={styles.orderItems}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.orderItem}>
                  <div className={styles.orderItemImage}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={styles.orderItemDetails}>
                    <h3 className={styles.orderItemName}>{item.name}</h3>
                    <p className={styles.orderItemQuantity}>
                      Quantity: {item.quantity}
                    </p>
                    <p className={styles.orderItemPrice}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Breakdown */}
            <div className={styles.priceBreakdown}>
              <div className={styles.priceRow}>
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className={styles.priceRow}>
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className={styles.priceRow}>
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className={`${styles.priceRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Back to Cart link */}
            <Link to="/cart" className={styles.backToCartLink}>
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;

