import React, { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const { employees, deleteEmployee } = useContext(EmployeeContext);

  return (
    <div className="container px-4">
      <h2 className="mb-4">Employee List</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>
                <Link
                  to={`/update/${employee.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>
                <Button
                  onClick={() => deleteEmployee(employee.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
