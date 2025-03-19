import React from "react";
import { EmployeeProvider } from "./context/EmployeeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import AddUser from "./Component/AddUser";
import UpdateUser from "./Component/UpdateUser";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <EmployeeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
};

export default App;
