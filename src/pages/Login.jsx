import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import { useAuth } from "../context/AuthContext";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate inputs
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Attempt login
    const result = login(email, password);

    if (result.success) {
      // Login successful 
      navigate("/");
    } else {
      // Show error
      setError(result.error || "Login failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Login</h1>
          <p className={styles.subtitle}>Welcome back! Please login to your account.</p>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                autoComplete="email"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className={styles.demoInfo}>
            <p className={styles.demoTitle}>Demo Credentials:</p>
            <p>Email: <strong>amir@gmail.com</strong> | Password: <strong>amir123</strong></p>
            <p>Email: <strong>test@test.com</strong> | Password: <strong>test123</strong></p>
          </div>

          <div className={styles.registerLink}>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className={styles.link}>
                Register here
              </Link>
            </p>
          </div>

          <div className={styles.backLink}>
            <Link to="/" className={styles.link}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;

