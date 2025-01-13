import React from 'react';
import { Link } from 'react-router-dom';

const StudentHomePage = () => {
  // Inline Styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    backgroundColor: '#e0f7fa', // Light blue background
    background: 'linear-gradient(135deg, #e0f7fa, #80deea)', // Gradient background
    minHeight: '100vh',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#0277bd', // Deep blue for header
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const navBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#0288d1', // Deep blue for navbar
    padding: '15px 0',
    borderRadius: '50px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
    fontWeight: 'bold',
    margin: '0 20px',
    fontSize: '18px',
    transition: 'transform 0.3s ease, color 0.3s ease',
  };

  const linkHoverStyle = {
    transform: 'scale(1.1)',
    color: '#81d4fa', // Lighter blue for hover effect
  };

  const sectionStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#0277bd',
  };

  const footerStyle = {
    textAlign: 'center',
    color: '#0277bd',
    fontSize: '14px',
    borderTop: '1px solid #0277bd',
    paddingTop: '20px',
    marginTop: '40px',
  };

  const dashboardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '40px',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardHeaderStyle = {
    fontSize: '24px',
    color: '#0288d1', // Deep blue for card headers
    marginBottom: '15px',
  };

  const cardContentStyle = {
    fontSize: '18px',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        Student Portal
      </header>

      <div style={navBarStyle}>
        
        <Link to="/StudentHome" style={linkStyle} className="nav-link">
        StudentHome
        </Link>
        <Link to="/StudentDetails" style={linkStyle} className="nav-link">
        StudentDetails
        </Link>
        <Link to="/MarkView" style={linkStyle} className="nav-link">
        MarkView
        </Link>
        <Link to="/logout" style={linkStyle} className="nav-link">
          Logout
        </Link>
      </div>

      <section style={sectionStyle}>
        <h2>Dashboard</h2>
        <p>Quick overview of your current status and activities.</p>
      </section>

      <section style={dashboardStyle}>
        <div style={cardStyle} className="card">
          <h3 style={cardHeaderStyle}>Courses</h3>
          <p style={cardContentStyle}>Manage and view your enrolled courses.</p>
          <Link to="/courses" style={{ textDecoration: 'none', color: '#0288d1' }}>
            View Courses
          </Link>
        </div>

        <div style={cardStyle} className="card">
          <h3 style={cardHeaderStyle}>Assignments</h3>
          <p style={cardContentStyle}>Check your upcoming and completed assignments.</p>
          <Link to="/assignments" style={{ textDecoration: 'none', color: '#0288d1' }}>
            View Assignments
          </Link>
        </div>

        <div style={cardStyle} className="card">
          <h3 style={cardHeaderStyle}>Grades</h3>
          <p style={cardContentStyle}>View your grades and progress in courses.</p>
          <Link to="/grades" style={{ textDecoration: 'none', color: '#0288d1' }}>
            View Grades
          </Link>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Important Announcements</h2>
        <p>Stay updated with the latest news and announcements from your professors.</p>
        <ul>
          <li>New Assignment on Data Structures (Due: 20th Dec)</li>
          <li>Upcoming Exam Schedule Released</li>
          <li>Semester Break Starts on 1st Jan</li>
        </ul>
      </section>

      <footer style={footerStyle}>
        <p>&copy; 2024 Student Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StudentHomePage;
