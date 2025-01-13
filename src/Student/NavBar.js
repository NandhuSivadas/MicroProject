import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Inline styles for the navbar and links
  const navBarStyle = {
    backgroundColor: '#3498db', // Blue background color for the navbar
    padding: '10px 20px',
    display: 'flex', // Use flexbox for horizontal layout
    justifyContent: 'space-between', // Space links evenly
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for a modern look
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white', // White text color for links
    fontSize: '18px',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, transform 0.2s',
  };

  const hoverStyle = {
    backgroundColor: '#2980b9', // Darker blue on hover
    transform: 'scale(1.1)', // Slightly enlarge the link on hover
  };

  return (
    <div style={navBarStyle}>
      <Link
        to="/StudentHome"
        style={linkStyle}
        className="nav-link"
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#2980b9')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
      >
        StudentHome
      </Link>
      <Link
        to="/StudentDetails"
        style={linkStyle}
        className="nav-link"
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#2980b9')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
      >
        StudentDetails
      </Link>
      <Link
        to="/MarkView"
        style={linkStyle}
        className="nav-link"
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#2980b9')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
      >
        MarkView
      </Link>
      <Link
        to="/logout"
        style={linkStyle}
        className="nav-link"
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#2980b9')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
      >
        Logout
      </Link>
    </div>
  );
};

export default Navbar;
