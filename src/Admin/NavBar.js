import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#25273d",
      padding: "10px 20px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    },
    logo: {
      color: "#f39c12",
      fontSize: "24px",
      fontWeight: "bold",
      textDecoration: "none",
    },
    navLinks: {
      display: "flex",
      gap: "15px",
    },
    link: {
      color: "#d1d1e9",
      textDecoration: "none",
      padding: "8px 15px",
      borderRadius: "5px",
      transition: "background 0.3s ease, color 0.3s ease",
    },
    linkHover: {
      backgroundColor: "#f39c12",
      color: "#1e1e2f",
    },
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        Admin Panel
      </Link>
      <div style={styles.navLinks}>
        <Link
          to="/"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.background = styles.linkHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.background = "")}
        >
          Dashboard
        </Link>
        <Link
          to="/StudentDetails"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.background = styles.linkHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.background = "")}
        >
          Student Details
        </Link>
        <Link
          to="/StudentRegistration"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.background = styles.linkHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.background = "")}
        >
          Registration
        </Link>
        <Link
          to="/ViewStudents"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.background = styles.linkHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.background = "")}
        >
          View Students
        </Link>
        <Link
          to="/LogOut"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.background = styles.linkHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.background = "")}
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
