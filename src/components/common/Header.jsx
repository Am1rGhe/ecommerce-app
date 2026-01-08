import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Amir Ghouari");

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // random color for the avatar
  const getAvatarColor = (name) => {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#FFA07A",
      "#98D8C8",
      "#F7DC6F",
      "#BB8FCE",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <>
      {/* navbar */}
      <nav className={styles.navbar}>
        {/* logo*/}
        <div className={styles.brand}>
          <Link to="/" className={styles.brandLink}>
            <h1 className={styles.brandName}>TRISTAN</h1>
          </Link>
        </div>

        {/*navigation links  */}
        <div className={styles.navLinks}>
          <Link to="/products" className={styles.navLink}>
            Women <span>+</span>
          </Link>
          <Link to="/products" className={styles.navLink}>
            Men <span>+</span>
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </div>

        {/* Right: Login, Search, Wishlist, Cart */}
        <div className={styles.rightSection}>
          {/* Login section */}
          <div className={styles.login}>
            {!isLoggedIn ? (
              <>
                <span className={styles.welcomeText}>Hello, Welcome</span>
                <button
                  className={styles.loginBtn}
                  onClick={() => setIsLoggedIn(true)}
                >
                  Login
                </button>
              </>
            ) : (
              <div className={styles.userInfo}>
                <div
                  className={styles.avatar}
                  style={{ backgroundColor: getAvatarColor(userName) }}
                >
                  {getInitials(userName)}
                </div>
                <span className={styles.userName}>{userName}</span>
              </div>
            )}
          </div>

          {/* Icons: Search, Wishlist, Cart */}
          <div className={styles.icons}>
            {/* search button */}
            <button className={styles.iconBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className={styles.headerSvg}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            {/* wishlist button */}
            <button className={styles.iconBtn} aria-label="Wishlist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className={styles.headerSvg}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
            {/* cart button  */}
            <Link to="/cart" className={styles.iconBtn} aria-label="Cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className={styles.headerSvg}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
