import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand Section */}
        <div className={styles.footerSection}>
          <h2 className={styles.brandName}>AMIR</h2>
          <p className={styles.brandDescription}>
            Your destination for premium fashion and style.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#" className={styles.footerLink}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Contact
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Returns
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Size Guide
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Customer Service</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#" className={styles.footerLink}>
                FAQ
              </a>
            </li>
            <li>
              <Link to="/track-order" className={styles.footerLink}>
                Track Order
              </Link>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Newsletter</h3>
          <p className={styles.newsletterText}>
            Subscribe to get updates on new arrivals and special offers.
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterBtn}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {currentYear} AMIR. All rights reserved.
        </p>
        <div className={styles.paymentMethods}>
          <span className={styles.paymentText}>We Accept:</span>
          <div className={styles.paymentIcons}>
            <span className={styles.paymentIcon}>Visa</span>
            <span className={styles.paymentIcon}>Mastercard</span>
            <span className={styles.paymentIcon}>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
