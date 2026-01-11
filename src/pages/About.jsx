import Layout from "../components/common/Layout";
import styles from "./About.module.css";

function About() {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          {/* Left Section */}
          <div className={styles.imageSection}>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop"
              alt="AMIR Fashion"
              className={styles.aboutImage}
            />
          </div>

          {/* Right Section */}
          <div className={styles.contentSection}>
            <h1 className={styles.mainTitle}>About AMIR</h1>

            <p className={styles.introText}>
              Founded in 2026, AMIR is synonymous with elegance, remarkable
              quality, and responsible practices.
            </p>

            {/* Feature Sections */}
            <div className={styles.featuresList}>
              {/* Feature 1 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                <p className={styles.featureText}>
                  Timeless garments, magnificently crafted
                </p>
              </div>

              {/* Feature 2 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </div>
                <p className={styles.featureText}>
                  Eco-responsible practices and materials
                </p>
              </div>

              {/* Feature 3 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <p className={styles.featureText}>
                  Fashion for a happy and healthy planet
                </p>
              </div>
            </div>

            {/* Learn More */}
            <button className={styles.learnMoreBtn}>Learn More About Us</button>

            <p className={styles.additionalText}>
              AMIR is recognized in the Canadian fashion market for its
              exceptional know-how. We offer stylish clothing for men and women
              today.
            </p>

            <p className={styles.additionalText}>
              We favor a more sustainable approach by crafting all our pieces
              with superior quality materials and natural fibers that you will
              notice at first touch. Every garment tells a story of
              craftsmanship, dedication, and commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
