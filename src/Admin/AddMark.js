import React, { useState, useEffect } from 'react';

const AddMarks = () => {
  const [students, setStudents] = useState([]);
  const [semesters] = useState(['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4']);
  const [subjects] = useState({
    'Semester 1': ['Mathematics', 'Physics', 'Chemistry'],
    'Semester 2': ['Biology', 'Computer Science', 'History'],
    'Semester 3': ['Economics', 'English Literature', 'Sociology'],
    'Semester 4': ['Geography', 'Political Science', 'Statistics'],
  });
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [marks, setMarks] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/students');
        const data = await response.json();
        setStudents(data);
      } catch (err) {
        setError('Failed to fetch students.');
      }
    };
    fetchStudents();
  }, []);

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setMarks({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarks((prevMarks) => ({ ...prevMarks, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedStudent || !selectedSemester) {
      setError('Please select both a student and a semester.');
      return;
    }

    const formattedMarks = subjects[selectedSemester].reduce((acc, subject, index) => {
      acc[subject] = marks[`marks${index + 1}`];
      return acc;
    }, {});

    const payload = {
      semester: selectedSemester,
      marks: formattedMarks,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/marks/${selectedStudent}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setMarks({});
        setSelectedStudent('');
        setSelectedSemester('');
        setError('');
      } else {
        setError(data.error || 'Failed to add marks. Please try again.');
      }
    } catch (err) {
      setError('Failed to add marks. Please try again.');
    }
  };

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#007acc',
      padding: '10px 20px',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
    },
    navLinks: {
      display: 'flex',
      gap: '15px',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    linkHover: {
      textDecoration: 'underline',
    },
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    label: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    select: {
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '10px',
    },
    input: {
      padding: '8px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '10px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: '#007acc',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#005fa3',
    },
    error: {
      color: 'red',
      marginBottom: '15px',
    },
    inputWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },
  };

  return (
    <div>
      {/* Inline Navbar */}
      <nav style={styles.navbar}>
        <h1>Dashboard</h1>
        <div style={styles.navLinks}>
          <a
            href="/Admin_home"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.textDecoration = styles.linkHover.textDecoration)}
            onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
          >
            Home
          </a>
          <a
            href="/add-marks"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.textDecoration = styles.linkHover.textDecoration)}
            onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
          >
            Add Marks
          </a>
          <a
            href="/ViewStudents"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.textDecoration = styles.linkHover.textDecoration)}
            onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
          >
            ViewStudents
          </a>
         
        </div>
      </nav>

      {/* Main Content */}
      <div style={styles.container}>
        <h2>Enter Marks for Student</h2>
        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Select Student:</label>
            <select
              value={selectedStudent}
              onChange={handleStudentChange}
              required
              style={styles.select}
            >
              <option value="">--Select a Student--</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.firstName} {student.lastName} (Roll No: {student.rollNumber})
                </option>
              ))}
            </select>
          </div>

          <div style={styles.inputWrapper}>
            <label style={styles.label}>Select Semester:</label>
            <select
              value={selectedSemester}
              onChange={handleSemesterChange}
              required
              style={styles.select}
            >
              <option value="">--Select a Semester--</option>
              {semesters.map((semester, index) => (
                <option key={index} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>

          {selectedSemester &&
            subjects[selectedSemester]?.map((subject, index) => (
              <div key={index} style={styles.inputWrapper}>
                <label style={styles.label}>{subject}</label>
                <input
                  type="number"
                  name={`marks${index + 1}`}
                  value={marks[`marks${index + 1}`] || ''}
                  onChange={handleInputChange}
                  placeholder={`Marks for ${subject}`}
                  required
                  style={styles.input}
                />
              </div>
            ))}

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007acc')}
          >
            Save Marks
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMarks;
