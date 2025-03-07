import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import employeesData from "./Data/employees.json";
import AddUser from "./Component/AddUser";
import UpdateUser from "./Component/UpdateUser";
const App = () => {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved
      ? JSON.parse(saved)
      : employeesData.map((emp, index) => ({ ...emp, id: index + 1 }));
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const getNextId = () => employees.length + 1;

  const addEmployee = (employee) => {
    setEmployees([...employees, { id: getNextId(), ...employee }]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees
      .filter((emp) => emp.id !== id)
      .map((emp, index) => ({ ...emp, id: index + 1 }));

    setEmployees(updatedEmployees);
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
