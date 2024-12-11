import React from 'react';
import './StudentHome.css';  // Import custom CSS file for styling


function App() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="text-center text-white">Student Dashboard</h2>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Assignments</a>
        <a href="#">Grades</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </div>

    
      {/* Footer */}
      <div className="footer">
        <p>&copy; 2024 Student Portal. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
