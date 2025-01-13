import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif",
      margin: 0,
      backgroundColor: "#1e1e2f",
      color: "#fff",
    },
    sidebar: {
      width: "280px",
      backgroundColor: "#25273d",
      padding: "20px",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
    },
    sidebarTitle: {
      fontSize: "26px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "30px",
      color: "#f39c12",
    },
    sidebarMenu: {
      listStyleType: "none",
      padding: 0,
    },
    sidebarLink: {
      color: "#d1d1e9",
      textDecoration: "none",
      display: "block",
      padding: "12px 20px",
      borderRadius: "8px",
      margin: "8px 0",
      transition: "background 0.3s ease, color 0.3s ease",
    },
    sidebarLinkHover: {
      backgroundColor: "#f39c12",
      color: "#1e1e2f",
    },
    mainContent: {
      flexGrow: 1,
      padding: "30px",
    },
    header: {
      backgroundColor: "#3a3a52",
      color: "#f39c12",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      marginBottom: "30px",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "#2c2c40",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      position: "relative",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 20px rgba(0, 0, 0, 0.5)",
    },
    cardTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#f39c12",
      marginBottom: "10px",
    },
    cardDescription: {
      color: "#d1d1e9",
      marginBottom: "15px",
    },
    cardLink: {
      color: "#f39c12",
      textDecoration: "none",
      fontWeight: "bold",
      border: "2px solid #f39c12",
      padding: "10px 15px",
      borderRadius: "8px",
      display: "inline-block",
      transition: "background-color 0.3s ease, border-color 0.3s ease",
    },
    cardLinkHover: {
      backgroundColor: "#f39c12",
      color: "#1e1e2f",
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Admin Panel</h2>
        <ul style={styles.sidebarMenu}>
          <li>
            <Link
              to="/"
              style={styles.sidebarLink}
              onMouseOver={(e) => (e.target.style.background = styles.sidebarLinkHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.background = "")}
            >
              Dashboard
            </Link>
          </li>
        
          <li>
            <Link
              to="/StudentRegistration"
              style={styles.sidebarLink}
              onMouseOver={(e) => (e.target.style.background = styles.sidebarLinkHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.background = "")}
            >
              Registration
            </Link>
          </li>
          <li>
            <Link
              to="/ViewStudents"
              style={styles.sidebarLink}
              onMouseOver={(e) => (e.target.style.background = styles.sidebarLinkHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.background = "")}
            >
              View Students
            </Link>
          </li>
          
          <li>
            <Link
              to="/AddMark"
              style={styles.sidebarLink}
              onMouseOver={(e) => (e.target.style.background = styles.sidebarLinkHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.background = "")}
            >
              Add Mark
            </Link>
          </li>
          <li>
            <Link
              to="/LogOut"
              style={styles.sidebarLink}
              onMouseOver={(e) => (e.target.style.background = styles.sidebarLinkHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.background = "")}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <header style={styles.header}>
          <h1>Welcome to MCA Admin Dashboard</h1>
        </header>
        <div style={styles.cardsContainer}>
          {/* Card 1 */}
          <div
            style={styles.card}
            onMouseOver={(e) => {
              e.target.style.transform = styles.cardHover.transform;
              e.target.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "";
              e.target.style.boxShadow = "";
            }}
          >
            <h3 style={styles.cardTitle}>View Students</h3>
            <p style={styles.cardDescription}>Manage and view all student details.</p>
            <Link
              to="/ViewStudents"
              style={styles.cardLink}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.cardLinkHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = "")}
            >
              More info →
            </Link>
          </div>

          {/* Card 2 */}
          <div
            style={styles.card}
            onMouseOver={(e) => {
              e.target.style.transform = styles.cardHover.transform;
              e.target.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "";
              e.target.style.boxShadow = "";
            }}
          >
            <h3 style={styles.cardTitle}>AddMark</h3>
            <p style={styles.cardDescription}>Plan and oversee upcoming events.</p>
            <Link
              to="/AddMark"
              style={styles.cardLink}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.cardLinkHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = "")}
            >
              More info →
            </Link>
          </div>

          {/* Card 3 */}
          <div
            style={styles.card}
            onMouseOver={(e) => {
              e.target.style.transform = styles.cardHover.transform;
              e.target.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "";
              e.target.style.boxShadow = "";
            }}
          >
            <h3 style={styles.cardTitle}>Settings</h3>
            <p style={styles.cardDescription}>Customize your preferences and settings.</p>
            <Link
              to="/settings"
              style={styles.cardLink}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.cardLinkHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = "")}
            >
              More info →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
