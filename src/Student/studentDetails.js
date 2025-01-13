import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link component

const StudentDetails = () => {
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/student-details',
          {},
          { withCredentials: true }
        );

        if (response.data.success) {
          setStudent(response.data.student);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        console.error('Error fetching student details:', err);
        setError('Failed to fetch student details. Please try again.');
      }
    };

    fetchStudentDetails();
  }, []);

  // Handle hover effect
  const cardStyle = {
    borderRadius: '15px',
    border: 'none',
    boxShadow: isHovered
      ? '0 8px 16px rgba(0, 0, 0, 0.2)'
      : '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    padding: '30px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    maxWidth: '1000px',
    margin: '20px auto',
  };

  const containerStyle = {
    padding: '30px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  };

  const errorStyle = {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const cardHeaderStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '15px 15px 0 0',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const cardBodyStyle = {
    padding: '20px 0',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  };

  const colStyle = {
    width: '48%',
  };

  const loadingStyle = {
    textAlign: 'center',
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#007BFF',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',  // Blue background color
    color: 'white',               // White text color
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'block',
    margin: '20px auto',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',  // Smooth background color change on hover
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',  // Darker blue when hovered
  };

  return (
    <div>
      {/* Homepage Button */}
      <Link to="/StudentHome">
        <button 
          style={buttonStyle} 
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} 
          onMouseLeave={(e) => e.target.style.backgroundColor = '#007BFF'}
        >
          Go to Homepage
        </button>
      </Link>

      {/* Student Details Container */}
      <div style={containerStyle}>
        {error && <p style={errorStyle}>{error}</p>}
        {student ? (
          <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div style={cardHeaderStyle}>
              <h3>Student Profile</h3>
            </div>
            <div style={cardBodyStyle}>
              <div style={rowStyle}>
                <div style={colStyle}>
                  <strong>First Name:</strong>
                  <p>{student.firstName}</p>
                </div>
                <div style={colStyle}>
                  <strong>Last Name:</strong>
                  <p>{student.lastName}</p>
                </div>
              </div>
              <div style={rowStyle}>
                <div style={colStyle}>
                  <strong>Email:</strong>
                  <p>{student.email}</p>
                </div>
                <div style={colStyle}>
                  <strong>Age:</strong>
                  <p>{student.age}</p>
                </div>
              </div>
              <div style={rowStyle}>
                <div style={colStyle}>
                  <strong>Course:</strong>
                  <p>{student.course}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          !error && <p style={loadingStyle}>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
