import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import PostPage from "./routes/PostPage";

function Navbar() {
  return (
    <header style={styles.navHeader}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.brand}>
          DEV@Deakin
        </Link>
        <div style={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchInput}
          />
        </div>
        <div style={styles.navActions}>
          <Link to="/post" style={styles.navItemLink}>
            Post
          </Link>
          <Link to="/login" style={styles.navItemLink}>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

function Home() {
  return (
    <main style={styles.homeMain}>
      <h1 style={styles.homeTitle}>Welcome to DEV@Deakin</h1>
      <p style={styles.homeSubtitle}>
        The interactive platform for Deakin developers.
      </p>
      <div style={styles.homeActions}>
        <Link to="/login" style={styles.primaryBtn}>
          Go to Login
        </Link>
        <Link to="/signup" style={styles.secondaryBtn}>
          Create an Account
        </Link>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>
        DEV@Deakin © 2026. SIT313 Secure Frontend Applications.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div style={styles.appWrapper}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  appWrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  navHeader: {
    backgroundColor: "#e5e7eb",
    borderBottom: "1px solid #d1d5db",
  },
  navContainer: {
    maxWidth: "1140px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    gap: "16px",
  },
  brand: {
    fontWeight: "700",
    fontSize: "1.2rem",
    color: "#111827",
    textDecoration: "none",
    letterSpacing: "-0.5px",
  },
  searchWrapper: {
    flex: 1,
    maxWidth: "600px",
  },
  searchInput: {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "4px",
    border: "1px solid #9ca3af",
    backgroundColor: "#ffffff",
    outline: "none",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  navActions: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
  navItemLink: {
    color: "#111827",
    fontWeight: "500",
    fontSize: "15px",
    textDecoration: "none",
    cursor: "pointer",
  },
  homeMain: {
    maxWidth: "800px",
    margin: "60px auto",
    padding: "0 20px",
    textAlign: "center",
    flex: 1,
  },
  homeTitle: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 12px 0",
  },
  homeSubtitle: {
    fontSize: "18px",
    color: "#4b5563",
    margin: "0 0 32px 0",
  },
  homeActions: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
  },
  primaryBtn: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "10px 22px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
  },
  secondaryBtn: {
    backgroundColor: "#ffffff",
    color: "#2563eb",
    border: "1px solid #2563eb",
    padding: "10px 22px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
  },
  footer: {
    backgroundColor: "#f3f4f6",
    borderTop: "1px solid #e5e7eb",
    padding: "20px 0",
    marginTop: "auto",
    textAlign: "center",
  },
  footerText: {
    margin: 0,
    fontSize: "14px",
    color: "#6b7280",
  },
};