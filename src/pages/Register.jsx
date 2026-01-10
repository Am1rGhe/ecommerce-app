import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import { useAuth } from "../context/AuthContext";
import styles from "./Login.module.css"; 

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate inputs
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    const result = register(name, email, password);

    if (result.success) {
      // Registration successful : Login
      navigate("/");
    } else {
      // Else show Error
      setError(result.error || "Registration failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Register</h1>
          <p className={styles.subtitle}>Create a new account to get started.</p>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                autoComplete="name"
              />
            </div>

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
                placeholder="Enter your password (min 6 characters)"
                required
                autoComplete="new-password"
                minLength={6}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                autoComplete="new-password"
                minLength={6}
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className={styles.registerLink}>
            <p>
              Already have an account?{" "}
              <Link to="/login" className={styles.link}>
                Login here
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

export default Register;

