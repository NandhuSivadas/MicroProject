import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });

      console.log('Logout response:', response.data); // Log the response

      if (response.data.success) {
        // Clear localStorage
        localStorage.removeItem('role');
        localStorage.removeItem('user');

        // Redirect to login page
        navigate('/');
      } else {
        console.error('Logout failed:', response.data.message); // Log the error
      }
    } catch (error) {
      console.error('Logout error:', error); // Log the error
    }
  };

  const commonButtonStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    border: 'none',
  };

  const styles = {
    card: {
      width: '300px',
      margin: '100px auto',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      marginBottom: '20px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      gap: '10px',
    },
    logoutButton: {
      ...commonButtonStyle,
      backgroundColor: '#ff4d4d',
      color: '#fff',
    },
    cancelButton: {
      ...commonButtonStyle,
      backgroundColor: '#ccc',
      color: '#333',
    },
    buttonHover: {
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Are you sure you want to logout?</h3>
      <div style={styles.buttonContainer}>
        <button
          onClick={handleLogout}
          style={styles.logoutButton}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#e04a4a';
            e.target.style.transform = styles.buttonHover.transform;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#ff4d4d';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Yes, Logout
        </button>
        <button
          onClick={() => navigate('/')}
          style={styles.cancelButton}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#b3b3b3';
            e.target.style.transform = styles.buttonHover.transform;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#ccc';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;
