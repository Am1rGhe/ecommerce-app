import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/common/Layout";
import ProductCard from "../components/product/ProductCard";
import { products } from "../data/products";
import styles from "./Products.module.css";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "All";
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [sortBy, setSortBy] = useState("default");

  // Update category when URL changes
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "All";
    setSelectedCategory(urlCategory);
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === "All") return true;
      return product.category === selectedCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0; // default order
    });

  return (
    <Layout>
      <div className={styles.productsContainer}>
        <h1 className={styles.pageTitle}>
          {selectedCategory === "All" ? "All Products" : `${selectedCategory} Products`}
        </h1>

        {/* Filters Section */}
        <div className={styles.filtersSection}>
          {/* Category Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Category:</label>
            <div className={styles.categoryButtons}>
              <button
                className={`${styles.categoryBtn} ${
                  selectedCategory === "All" ? styles.active : ""
                }`}
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchParams({});
                }}
              >
                All
              </button>
              <button
                className={`${styles.categoryBtn} ${
                  selectedCategory === "Men" ? styles.active : ""
                }`}
                onClick={() => {
                  setSelectedCategory("Men");
                  setSearchParams({ category: "Men" });
                }}
              >
                Men
              </button>
              <button
                className={`${styles.categoryBtn} ${
                  selectedCategory === "Women" ? styles.active : ""
                }`}
                onClick={() => {
                  setSelectedCategory("Women");
                  setSearchParams({ category: "Women" });
                }}
              >
                Women
              </button>
            </div>
          </div>

          {/* Sort Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel} htmlFor="sortSelect">
              Sort By:
            </label>
            <select
              id="sortSelect"
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className={styles.resultsCount}>
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className={styles.noProducts}>No products found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Products;

