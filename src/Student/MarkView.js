import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentMarks = () => {
  const [marks, setMarks] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/student/marksviewstudent', {
          withCredentials: true,
        });

        console.log('API Response:', response.data);

        if (response.data.success) {
          setMarks(response.data.marks);
        } else {
          setError(response.data.message || 'Unknown error');
        }
      } catch (error) {
        console.error('Error fetching marks:', error);
        setError('An error occurred while fetching marks. Please check the console for more details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMarks();
  }, []);

  const parseMarks = (marksString) => {
    try {
      return JSON.parse(marksString);
    } catch (error) {
      console.error('Error parsing marks:', error);
      return {};
    }
  };

  // Inline styles for the navbar and links
  const navBarStyle = {
    backgroundColor: '#3498db', // Blue background color for the navbar
    padding: '10px 20px',
    display: 'flex', // Use flexbox for horizontal layout
    justifyContent: 'space-between', // Space links evenly
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for a modern look
    marginBottom: '30px', // Add some space below the navbar
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
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', backgroundColor: '#f4f7fc', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Navbar with Links */}
        <div style={navBarStyle}>
          <Link to="/StudentHome" style={linkStyle} className="nav-link">StudentHome</Link>
          <Link to="/StudentDetails" style={linkStyle} className="nav-link">StudentDetails</Link>
          <Link to="/MarkView" style={linkStyle} className="nav-link">MarkView</Link>
          <Link to="/logout" style={linkStyle} className="nav-link">Logout</Link>
        </div>

      <h2 style={{ textAlign: 'center', color: '#3a3a3a', fontSize: '36px', fontWeight: '700', marginBottom: '30px' }}>Student Marks</h2>

      {loading && (
        <div style={{ border: '4px solid #ddd', borderTop: '4px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite', marginTop: '20px' }}></div>
      )}

      {error && <p style={{ color: '#e74c3c', textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>{error}</p>}

      {!loading && !error && (
        <div>
          <h3 style={{ color: '#3498db', fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>Your Marks</h3>
          {marks && marks.length > 0 ? (
            marks.map((mark, index) => {
              const subjectMarks = parseMarks(mark.marks);
              return (
                <div key={index} style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                  <h4 style={{ color: '#333', fontSize: '24px', marginBottom: '20px', fontWeight: '600' }}>{mark.semester}</h4>
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#3498db', color: '#fff', fontWeight: 'bold' }}>
                        <th style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>Subject</th>
                        <th style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(subjectMarks).map((subject, idx) => (
                        <tr key={idx} style={{ transition: 'background-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f1f1')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
                          <td style={{ padding: '12px 15px', border: '1px solid #ddd' }}>{subject}</td>
                          <td style={{ padding: '12px 15px', border: '1px solid #ddd' }}>{subjectMarks[subject]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })
          ) : (
            <p style={{ textAlign: 'center', fontSize: '18px', color: '#7f8c8d' }}>No marks found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentMarks;
