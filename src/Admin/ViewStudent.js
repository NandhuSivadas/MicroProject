// StudentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);
  const [updatedStudent, setUpdatedStudent] = useState({
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
      setStudents(response.data.data); // Set the students' data
    } catch (err) {
      setError('Failed to fetch students. Please try again.');
      console.error('Error fetching students:', err);
    }
  };

  // Fetch the students when the component mounts
  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle student data change for updating
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission for updating student
  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.put(
            `http://localhost:5000/api/students/${editingStudent.id}`,
            updatedStudent
        );
      console.log(response.data); // Log success message
      alert('Student updated successfully');
      setEditingStudent(null); // Close the update form
      setUpdatedStudent({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        course: ''
      });
      // Refresh the students list after update
      fetchStudents(); // Call the function to refresh the list
    } catch (err) {
      console.error('Error updating student:', err);
      alert('Failed to update student. Please try again.');
    }
  };

  // Edit student details
  const handleEdit = (student) => {
    setEditingStudent(student);
    setUpdatedStudent({
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
        const response = await axios.delete(`http://localhost:5000/api/studentsdelete/${studentId}`);

        console.log('Delete response:', response.data); // Log the successful response
        alert('Student deleted successfully');
        // Refresh the students list after deletion
        fetchStudents(); // Call the function to refresh the list
      } catch (err) {
        console.error('Error deleting student:', err.response ? err.response.data : err);
        alert('Failed to delete student. Please try again.');
      }
    }
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {editingStudent ? (
        <div className="edit-form">
          <h3>Edit Student</h3>
          <form onSubmit={handleUpdateStudent}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={updatedStudent.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={updatedStudent.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={updatedStudent.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={updatedStudent.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Course:</label>
              <input
                type="text"
                name="course"
                value={updatedStudent.course}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Update Student</button>
          </form>
          <button onClick={() => setEditingStudent(null)}>Cancel</button>
        </div>
      ) : (
        <table align="center">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                  <td>
                    <button onClick={() => handleEdit(student)}>Edit</button>
                    <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No students available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;