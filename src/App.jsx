import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import employeesData from "./Data/employees.json";
import AddUser from "./Component/AddUser";
import UpdateUser from "./Component/UpdateUser";
const App = () => {
  const [employees, setEmployees] = useState(employeesData);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
  };
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };
  const updateEmployee = (id, updatedData) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? { ...updatedData, id } : employee
      )
    );
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home employees={employees} onDelete={deleteEmployee} />}
          />
          <Route path="/add" element={<AddUser onAdd={addEmployee} />} />
          <Route
            path="/update/:id"
            element={
              <UpdateUser employees={employees} onUpdate={updateEmployee} />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
