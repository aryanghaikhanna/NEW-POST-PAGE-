import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (authError) {
        setError("Invalid email or password. Please try again or create an account.");
        setLoading(false);
        return;
      }

      if (data?.user) {
        navigate("/");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.headerRow}>
          <Link to="/signup" style={styles.signUpLink}>
            Sign up
          </Link>
        </div>

        {error && (
          <div style={styles.errorBox}>
            <p style={styles.errorText}>
              {error}{" "}
              <Link to="/signup" style={styles.errorLink}>
                Sign up
              </Link>
            </p>
          </div>
        )}

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="login-email" style={styles.label}>
              Your email
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
              placeholder="e.g. user@deakin.edu.au"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="login-password" style={styles.label}>
              Your password
            </label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.submitBtn,
              backgroundColor: loading ? "#93c5fd" : "#2563eb",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 16px",
    flex: 1,
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    padding: "32px 28px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },
  headerRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
  },
  signUpLink: {
    textDecoration: "none",
    color: "#2563eb",
    border: "1px solid #2563eb",
    padding: "6px 14px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    textAlign: "left",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    outline: "none",
    boxSizing: "border-box",
  },
  submitBtn: {
    width: "100%",
    padding: "11px 0",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "600",
    marginTop: "8px",
  },
  errorBox: {
    backgroundColor: "#fef2f2",
    border: "1px solid #f87171",
    borderRadius: "6px",
    padding: "10px 14px",
    marginBottom: "16px",
  },
  errorText: {
    color: "#b91c1c",
    fontSize: "13px",
    margin: 0,
    lineHeight: "1.4",
  },
  errorLink: {
    color: "#2563eb",
    fontWeight: "600",
    textDecoration: "underline",
  },
};