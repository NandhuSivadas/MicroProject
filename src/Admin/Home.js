import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f0f4f7",
    },
    sidebar: {
      width: "250px",
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
      padding: "20px",
    },
    sidebarTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
    },
    sidebarMenu: {
      listStyleType: "none",
      padding: 0,
    },
    sidebarLink: {
      color: "#ecf0f1",
      textDecoration: "none",
      display: "block",
      padding: "10px 15px",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    sidebarLinkHover: {
      backgroundColor: "#34495e",
    },
    mainContent: {
      flexGrow: 1,
      padding: "20px",
    },
    header: {
      backgroundColor: "#34495e",
      color: "#ecf0f1",
      padding: "15px",
      borderRadius: "5px",
      marginBottom: "20px",
      textAlign: "center",
    },
    cardsContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    card: {
      backgroundColor: "#007BFF",
      color: "white",
      padding: "20px",
      borderRadius: "8px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    },
    cardLink: {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      border: "1px solid white",
      padding: "8px 15px",
      borderRadius: "5px",
      display: "inline-block",
      transition: "background-color 0.3s ease, border-color 0.3s ease",
    },
    cardLinkHover: {
      backgroundColor: "#0056b3",
      borderColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>ADMIN</h2>
        <ul style={styles.sidebarMenu}>
          <li>
            <Link to="/" style={styles.sidebarLink}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/StudentDetails" style={styles.sidebarLink}>
              StudentDetails
            </Link>
          </li>
          <li>
            <Link to="/StudentRegistration" style={styles.sidebarLink}>
              StudentRegistration
            </Link>
          </li>
          <li>
            <Link to="/ViewStudents" style={styles.sidebarLink}>
              ViewStudents
            </Link>
          </li>
          <li>
            <Link to="/event" style={styles.sidebarLink}>
              Event
            </Link>
          </li>
          <li>
            <Link to="/station-registration" style={styles.sidebarLink}>
              Station Master Registration
            </Link>
          </li>
          <li>
            <Link to="/station-list" style={styles.sidebarLink}>
              Station Master List
            </Link>
          </li>
          <li>
            <Link to="/report" style={styles.sidebarLink}>
              Report
            </Link>
          </li>
          <li>
            <Link to="/logout" style={styles.sidebarLink}>
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <header style={styles.header}>
          <h1>Welcome to AQUAMOTUS - Admin Dashboard</h1>
        </header>
        <div style={styles.cardsContainer}>
          {/* Card 1 */}
          <div style={styles.card}>
            <h3>Boat</h3>
            <p>Manage Boat Details</p>
            <Link to="/boat" style={styles.cardLink}>
              More info &#8594;
            </Link>
          </div>

          {/* Card 2 */}
          <div style={styles.card}>
            <h3>Event</h3>
            <p>Manage Events</p>
            <Link to="/event" style={styles.cardLink}>
              More info &#8594;
            </Link>
          </div>

          {/* Card 3 */}
          <div style={styles.card}>
            <h3>Settings</h3>
            <p>Manage Station Master Details</p>
            <Link to="/settings" style={styles.cardLink}>
              More info &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
