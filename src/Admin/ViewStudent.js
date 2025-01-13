import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);
  const [updatedStudent, setUpdatedStudent] = useState({
    rollNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    course: ''
  });

  // Function to fetch students
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/studentsview');
      setStudents(response.data.data);
    } catch (err) {
      setError('Failed to fetch students. Please try again.');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/students/${editingStudent.id}`,
        updatedStudent
      );
      alert('Student updated successfully');
      setEditingStudent(null);
      setUpdatedStudent({
        rollNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        course: ''
      });
      fetchStudents();
    } catch (err) {
      alert('Failed to update student. Please try again.');
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setUpdatedStudent({
      rollNumber: student.rollNumber,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      age: student.age,
      course: student.course,
    });
  };

  const handleDeleteStudent = async (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        console.log('Deleting student with ID:', studentId); // Log for debugging
        await axios.delete(`http://localhost:5000/api/studentsdelete/${studentId}`);
        alert('Student deleted successfully');
        fetchStudents(); // Refresh the student list after deletion
      } catch (err) {
        console.error('Error deleting student:', err); // Log the error for debugging
        alert('Failed to delete student. Please try again.');
      }
    }
  };
  

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#007acc',
      color: '#fff',
      fontSize: '1rem',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      margin: '0 15px',
      fontWeight: 'bold',
    },
    container: {
      padding: '30px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    header: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginBottom: '30px',
    },
    error: {
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ddd',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    input: {
      padding: '10px',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '15px',
    },
    button: {
      padding: '12px 20px',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      margin: '10px 0',
    },
    buttonBlue: {
      backgroundColor: '#0066cc',
      color: 'white',
    },
    buttonRed: {
      backgroundColor: '#ff6f61',
      color: 'white',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '30px',
    },
    tableHeader: {
      backgroundColor: '#007acc',
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '12px',
    },
    tableCell: {
      padding: '12px',
      textAlign: 'center',
      border: '1px solid #ddd',
    },
  };

  return (
    <div>
      {/* Navbar with links to Home and Add Marks Page */}
      <nav style={styles.navbar}>
        <div>Admin Dashboard</div>
        <div>
          <Link to="/Admin_home" style={styles.navLink}>Home</Link>
          <Link to="/AddMark" style={styles.navLink}>Add Marks</Link>
        </div>
      </nav>

      {/* Student List Content */}
      <div className="student-list" style={styles.container}>
        <h2 style={styles.header}>Student List</h2>
        {error && <p style={styles.error}>{error}</p>}

        {editingStudent ? (
          <div className="edit-form" style={styles.form}>
            <h3>Edit Student</h3>
            <form onSubmit={handleUpdateStudent}>
              <input
                type="text"
                name="rollNumber"
                value={updatedStudent.rollNumber}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <input
                type="text"
                name="firstName"
                value={updatedStudent.firstName}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <input
                type="text"
                name="lastName"
                value={updatedStudent.lastName}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                value={updatedStudent.email}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <input
                type="number"
                name="age"
                value={updatedStudent.age}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <input
                type="text"
                name="course"
                value={updatedStudent.course}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <button type="submit" style={{ ...styles.button, ...styles.buttonBlue }}>Update Student</button>
            </form>
            <button onClick={() => setEditingStudent(null)} style={{ ...styles.button, ...styles.buttonRed }}>Cancel</button>
          </div>
        ) : (
          <table style={styles.table} align="center">
            <thead>
              <tr>
                <th style={styles.tableHeader}>Roll Number</th>
                <th style={styles.tableHeader}>First Name</th>
                <th style={styles.tableHeader}>Last Name</th>
                <th style={styles.tableHeader}>Email</th>
                <th style={styles.tableHeader}>Age</th>
                <th style={styles.tableHeader}>Course</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.id}>
                    <td style={styles.tableCell}>{student.rollNumber}</td>
                    <td style={styles.tableCell}>{student.firstName}</td>
                    <td style={styles.tableCell}>{student.lastName}</td>
                    <td style={styles.tableCell}>{student.email}</td>
                    <td style={styles.tableCell}>{student.age}</td>
                    <td style={styles.tableCell}>{student.course}</td>
                    <td style={styles.tableCell}>
                      <button
                        onClick={() => handleEdit(student)}
                        style={{ ...styles.button, ...styles.buttonBlue }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.id)}
                        style={{ ...styles.button, ...styles.buttonRed }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={styles.tableCell}>No students available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StudentList;
