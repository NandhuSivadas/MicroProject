// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./Admin/Home";
// import CreateStudent from "./Admin/CreateStudent";
// import EditStudent from "./Admin/EditStudent";
// import ViewStudent from "./Admin/ViewStudent";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/StudentRegistration" element={<CreateStudent />} />
//         <Route path="/edit/:id" element={<EditStudent />} />
//         <Route path="/ViewStudents" element={<ViewStudent />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Admin/Home";
import CreateStudent from "./Admin/CreateStudent";
import EditStudent from "./Admin/EditStudent";
import ViewStudent from "./Admin/ViewStudent";
import Login from "./Guest/Login";
import StudentHome from "./Student/StudentHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Guest Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<div>Register Page</div>} />

        {/* Admin Routes */}
        <Route path="/Admin_home" element={<Home />} />
        <Route path="/StudentRegistration" element={<CreateStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
        <Route path="/ViewStudents" element={<ViewStudent />} />

        {/* User and Developer can be added similarly */}

        <Route path="/StudentHome" element={<StudentHome />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
