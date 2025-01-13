import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Admin/Home";
import CreateStudent from "./Admin/CreateStudent";
import EditStudent from "./Admin/EditStudent";
import ViewStudent from "./Admin/ViewStudent";
import Login from "./Guest/Login";
import StudentHome from "./Student/StudentHome";
import StudentDetails from "./Student/studentDetails";
import MarkView from "./Student/MarkView";
import AddMark from "./Admin/AddMark";
import LogOut from "./Student/LogOut";
import NavBar from "./Student/NavBar";


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
       
        <Route path="/AddMark" element={<AddMark />} />
        
        {/* User and Developer routes can be added similarly */}
        <Route path="/StudentHome" element={<StudentHome />} />
        <Route path="/StudentDetails" element={<StudentDetails />} />
        <Route path="/MarkView" element={<MarkView />} />
        <Route path="/LogOut" element={<LogOut />} />
        <Route path="/NavBar" element={<NavBar />} />
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
