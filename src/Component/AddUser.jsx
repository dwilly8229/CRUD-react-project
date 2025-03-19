import React, { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(form);
    navigate("/");
  };
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Add New Employee</h2>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            id="phone"
            pattern="[0-9]{10}"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Add Employee
        </Button>
      </Form>
    </Container>
  );
};

export default AddUser;
