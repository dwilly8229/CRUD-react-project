import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({ employees, deleteEmployee }) => (
  <div className="contianer mt-4">
    <h2 className="mb-4">Employee List</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phones</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(({ id, firstName, lastName, email, phone }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
              <Button
                variant="warning"
                size="sm"
                as={Link}
                to={"/edit/${id}"}
                className="me-2"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteEmployee(id)}
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

export default Home;
