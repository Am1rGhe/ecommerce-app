import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import ProductCard from "../components/product/ProductCard";
import { getFeaturedProducts } from "../data/products";
import styles from "./Home.module.css";

function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      <div className={styles.homeContainer}>
        <div className={styles.hero}>
          <h1>Welcome to AMIR</h1>
          <p>Your fashion clothing destination</p>
        </div>

        <div className={styles.productsSection}>
          <h2 className={styles.sectionTitle}>Our Products</h2>
          <div className={styles.productsGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Link to="/products" className={styles.seeAllBtn}>
            See All The Products
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

