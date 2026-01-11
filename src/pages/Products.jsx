import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/common/Layout";
import ProductCard from "../components/product/ProductCard";
import { products, searchProducts } from "../data/products";
import styles from "./Products.module.css";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "All";
  const searchTermFromUrl = searchParams.get("search") || "";
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [sortBy, setSortBy] = useState("default");

  // Update category when URL changes
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "All";
    setSelectedCategory(urlCategory);
  }, [searchParams]);

  // Filter products by search term first
  let productsToFilter = searchTermFromUrl
    ? searchProducts(searchTermFromUrl)
    : products;

  // Filter and sort products
  const filteredProducts = productsToFilter
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

  // Generate page title
  const getPageTitle = () => {
    if (searchTermFromUrl) {
      if (selectedCategory === "All") {
        return `Search results for: "${searchTermFromUrl}"`;
      }
      return `${selectedCategory} Products matching: "${searchTermFromUrl}"`;
    }
    return selectedCategory === "All" ? "All Products" : `${selectedCategory} Products`;
  };

  return (
    <Layout>
      <div className={styles.productsContainer}>
        <h1 className={styles.pageTitle}>
          {getPageTitle()}
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
                  if (searchTermFromUrl) {
                    setSearchParams({ search: searchTermFromUrl });
                  } else {
                    setSearchParams({});
                  }
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
                  const params = { category: "Men" };
                  if (searchTermFromUrl) {
                    params.search = searchTermFromUrl;
                  }
                  setSearchParams(params);
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
                  const params = { category: "Women" };
                  if (searchTermFromUrl) {
                    params.search = searchTermFromUrl;
                  }
                  setSearchParams(params);
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

