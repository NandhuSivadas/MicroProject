const express =require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

// Initialize Express app
const app = express();

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react_example', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + db.threadId);
});

// Middleware setup
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: 'mysecretkey', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set true if using HTTPS
  })
);

// Routes

// Add Student
app.post('/api/students', (req, res) => {
  const { rollNumber, firstName, lastName, email, age, course, password } = req.body;
  const query =
    'INSERT INTO students (rollNumber, firstName, lastName, email, age, course, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(
    query,
    [rollNumber, firstName, lastName, email, age, course, password],
    (err, results) => {
      if (err) {
        console.error('Error inserting student:', err);
        return res.status(500).json({ message: 'Failed to insert student' });
      }
      res.status(200).json({ message: 'Student added successfully', data: results });
    }
  );
});

// Get all students
app.get('/api/studentsview', (req, res) => {
  const sql = 'SELECT * FROM students';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      return res.status(500).json({ error: 'Failed to fetch students' });
    }
    res.json({ data: results });
  });
});


// GET route to fetch all students
// Endpoint to get all students
app.get("/api/students", (req, res) => {
  const query = "SELECT * FROM students";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results || []); // Ensure an array is returned
  });
});


// PUT route to update student data
app.put('/api/students/:id', (req, res) => {
  const { id } = req.params;
  const { rollNumber, firstName, lastName, email, age, course } = req.body;  // Added rollNumber to be updated

  // SQL query to update student data
  const query = `
    UPDATE students 
    SET rollNumber = ?, firstName = ?, lastName = ?, email = ?, age = ?, course = ? 
    WHERE id = ?
  `;

  // Execute the query
  db.query(query, [rollNumber, firstName, lastName, email, age, course, id], (err, results) => {
    if (err) {
      console.error('Error updating student:', err.message);
      return res.status(500).json({ message: 'Failed to update student' });
    }

    // If no rows are affected, the student was not found
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Successfully updated student
    res.status(200).json({ message: 'Student updated successfully', data: results });
  });
});


// DELETE route to delete a student by id
app.delete('/api/studentsdelete/:id', (req, res) => {
  console.log('DELETE request received for ID:', req.params.id);  // Logs the ID for debugging

  const studentId = req.params.id;
  const query = 'DELETE FROM students WHERE id = ?';  // SQL query to delete a student by id

  db.query(query, [studentId], (err, result) => {
    if (err) {
      console.error('Error deleting student:', err);
      return res.status(500).json({ error: 'Failed to delete student' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' });  // If no rows are affected, student was not found
    }

    res.json({ message: 'Student deleted successfully' });  // Return success message
  });
});


// Get all studentsList
app.get('/api/studentsroll', (req, res) => {
  const query = "SELECT * FROM students";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results || []); // Ensure an array is returned
  });
});


// API endpoint to fetch the list of semesters
// app.get('/api/semesters', (req, res) => {
//   const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4']; // Hardcoded semesters for example
//   res.json(semesters);
// });

// API endpoint to add marks for a student
// API to add marks

// API to fetch marks for a student by roll number



// Route to fetch all students
// router.get('/addmark', (req, res) => {
//   const query = 'SELECT id, rollNumber, firstName, lastName FROM students';
//   db.query(query, (err, result) => {
//     if (err) {
//       return res.status(500).json({ error: 'Failed to fetch students' });
//     }
//     res.json(result); // Send the list of students to the frontend
//   });
// });


// API Endpoint to Add Marks
app.post('/api/marks/:studentId', (req, res) => {
  const { studentId } = req.params;
  const { semester, marks } = req.body;

  console.log('Received studentId:', studentId);
  console.log('Received semester:', semester);
  console.log('Received marks:', marks);

  if (!semester || !marks || typeof marks !== 'object') {
    console.error('Validation error:', { semester, marks });
    return res.status(400).json({ error: 'Invalid input. Semester and marks are required.' });
  }

  const query = `INSERT INTO marks (studentId, semester, marks) VALUES (?, ?, ?)`;
  const values = [studentId, semester, JSON.stringify(marks)];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to add marks. Please try again later.' });
    }
    res.status(200).json({ message: 'Marks added successfully.', result });
  });
});



// Route to add or update marks for a student by roll number


// Login Route
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   // Check if admin
//   if (email === 'admin@gmail.com' && password === 'admin123') {
//     req.session.role = 'admin';
//     req.session.save();
//     return res.status(200).json({ success: true, role: 'admin', message: 'Admin login successful' });
//   }

//   // Check if student
//   const query = 'SELECT * FROM students WHERE email = ? AND password = ?';
//   db.query(query, [email, password], (err, results) => {
//     if (err) {
//       console.error('Error querying students:', err);
//       return res.status(500).json({ message: 'Server error' });
//     }
//     if (results.length > 0) {
//       const student = results[0];
//       req.session.studentId = student.id; // Store student ID in session
//       req.session.save();
//       return res
//         .status(200)
//         .json({ success: true, role: 'student', message: 'Login successful', student });
//     }
//     return res.status(401).json({ success: false, message: 'Invalid credentials' });
//   });
// });


// Login Route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Check if admin login
  if (email === 'admin@gmail.com' && password === 'admin123') {
    req.session.role = 'admin';
    req.session.save(() => {
      console.log('Admin login successful. Session role:', req.session.role); // Log session role
      return res.status(200).json({ success: true, role: 'admin', message: 'Admin login successful' });
    });
    return; // Terminate further execution
  }

  console.log('Login attempt with:', email, password); // Log input


  // Check student credentials
  const query = 'SELECT * FROM students WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }

    if (results.length > 0) {
      console.log('Login successful for:', results[0]);

      // Set the session studentId
      req.session.studentId = results[0].id;

      // Save session and respond
      req.session.save(() => {
        console.log('Session data saved. Student ID:', req.session.studentId); // Log student ID in session
        res.status(200).json({ success: true, role: 'student', student: results[0] });
      });
    } else {
      console.log('Invalid credentials for:', email);
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});



// Logout Route
app.post('/api/logout', (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).json({ success: false, message: 'Logout failed' });
      }
      res.clearCookie('connect.sid'); // Clear the session cookie
      console.log('Session destroyed. Logout successful');
      return res.status(200).json({ success: true, message: 'Logout successful' });
    });
  } else {
    res.status(400).json({ success: false, message: 'No active session found' });
  }
});


// Get Current Session Data
app.get('/api/session', (req, res) => {
  if (req.session.studentId) {
    return res.status(200).json({ loggedIn: true, studentId: req.session.studentId });
  }
  return res.status(200).json({ loggedIn: false });
});


// Get Student Details
app.post('/api/student-details', (req, res) => {
  const studentId = req.session?.studentId;

  if (!studentId) {
    return res.status(401).json({ success: false, message: 'Unauthorized: No student logged in.' });
  }

  const query = 'SELECT * FROM students WHERE id = ?';
  db.query(query, [studentId], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ success: false, message: 'Failed to fetch student details.' });
    }

    if (results.length > 0) {
      return res.status(200).json({ success: true, student: results[0] });
    } else {
      return res.status(404).json({ success: false, message: 'Student not found.' });
    }
  });
});


// Fetch student's marks based on their session (logged-in student)
app.get('/api/student/marksviewstudent', (req, res) => {
  const studentId = req.session.studentId;  // Retrieve student ID from session
  console.log("Student ID from session:", studentId);  // Log the session student ID

  if (!studentId) {
    console.log("Student not logged in");
    return res.status(401).json({ success: false, message: 'Student not logged in' });
  }

  // Fetch student information based on session studentId
  const queryStudent = 'SELECT * FROM students WHERE id = ?';
  db.query(queryStudent, [studentId], (err, studentResults) => {
    if (err) {
      console.error('Database error (students query):', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    if (studentResults.length === 0) {
      console.log('No student found with studentId:', studentId);
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const student = studentResults[0];

    // Now, fetch the marks for this student
    const queryMarks = 'SELECT * FROM marks WHERE studentId = ?';
    db.query(queryMarks, [studentId], (err, marksResults) => {
      if (err) {
        console.error('Database error (marks query):', err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }

      if (marksResults.length === 0) {
        console.log('No marks found for studentId:', studentId);
        return res.status(404).json({ success: false, message: 'Marks not found for this student' });
      }

      console.log('Marks fetched successfully:', marksResults);
      res.status(200).json({
        success: true,
        student: student,
        marks: marksResults,
      });
    });
  });
});






// Start the server
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
