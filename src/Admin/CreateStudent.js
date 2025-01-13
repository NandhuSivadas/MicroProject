import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    course: '',
    password: '', // Add password field
    rollNumber: '' // Add rollNumber field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/students', studentData);
      alert('Student added successfully!');
      console.log(response.data);
      setStudentData({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        course: '',
        password: '', // Reset password field
        rollNumber: '' // Reset rollNumber field
      });
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Failed to add student. Please try again.');
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '600',
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        Add Student Details
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: '500', color: '#555', marginBottom: '8px', display: 'block' }}>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={studentData.firstName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: '500', color: '#555', marginBottom: '8px', display: 'block' }}>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={studentData.lastName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: '500', color: '#555', marginBottom: '8px', display: 'block' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: '500', color: '#555', marginBottom: '8px', display: 'block' }}>Age:</label>
          <input
            type="number"
            name="age"
            value={studentData.age}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: '500', color: '#555', marginBottom: '8px', display: 'block' }}>Course:</label>
          <input
            type="text"
            name="course"
            value={studentData.course}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: '500', color: '#555', marginBottom: '8px', display: 'block' }}>Password:</label>
          <input
            type="password"
            name="password"
            value={studentData.password}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: '500', color: '#555', marginBottom: '8px', display: 'block' }}>Roll Number:</label>
          <input
            type="text"
            name="rollNumber"
            value={studentData.rollNumber}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '18px',
            color: '#fff',
            backgroundColor: '#28a745',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
