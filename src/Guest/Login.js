import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        { email, password },
        { withCredentials: true }
      );
      if (response.data.success) {
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("user", JSON.stringify(response.data.student || {}));
        if (response.data.role === "admin") {
          navigate("/admin_home");
        } else if (response.data.role === "student") {
          navigate("/StudentHome");
        }
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(45deg, #6a11cb, #2575fc)",
      backgroundSize: "400% 400%",
      animation: "gradientAnimation 8s ease infinite",
      fontFamily: "'Poppins', sans-serif",
    },
    card: {
      background: "#f5f5f5",
      borderRadius: "20px",
      padding: "30px",
      boxShadow:
        "8px 8px 15px rgba(0, 0, 0, 0.2), -8px -8px 15px rgba(255, 255, 255, 0.7)",
      maxWidth: "400px",
      width: "90%",
      textAlign: "center",
    },
    title: { color: "#333", marginBottom: "10px", fontSize: "24px", fontWeight: "bold" },
    subtitle: { color: "#666", marginBottom: "20px", fontSize: "14px" },
    inputGroup: { position: "relative", marginBottom: "20px" },
    inputField: {
      width: "100%",
      padding: "12px 15px",
      border: "none",
      borderRadius: "8px",
      boxShadow:
        "inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.6)",
      fontSize: "16px",
      outline: "none",
      transition: "all 0.3s ease",
    },
    inputFieldFocus: { boxShadow: "0 0 10px rgba(98, 0, 238, 0.5)" },
    toggle: {
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#666",
      fontSize: "18px",
    },
    error: { color: "red", fontSize: "14px", marginBottom: "10px" },
    button: {
      width: "100%",
      padding: "12px",
      background: "linear-gradient(45deg, #6a11cb, #2575fc)",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    buttonHover: {
      transform: "scale(1.05)",
      boxShadow: "0 5px 15px rgba(98, 0, 238, 0.3)",
    },
    footer: { marginTop: "20px", color: "#666" },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back!</h2>
        <p style={styles.subtitle}>Log in to your account</p>
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              style={styles.inputField}
              onFocus={(e) => (e.target.style.boxShadow = styles.inputFieldFocus.boxShadow)}
              onBlur={(e) => (e.target.style.boxShadow = "")}
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={styles.inputField}
              onFocus={(e) => (e.target.style.boxShadow = styles.inputFieldFocus.boxShadow)}
              onBlur={(e) => (e.target.style.boxShadow = "")}
            />
            <span
              style={styles.toggle}
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) =>
              Object.assign(e.target.style, { transform: "", boxShadow: "" })
            }
          >
            Log In
          </button>
        </form>
        <div style={styles.footer}>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
