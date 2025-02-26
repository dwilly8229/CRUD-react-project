import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddUser = ({ onAdd }) => {
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
    onAdd(form);
    navigate("/");
  };
  return (
    <Container className="mt-4">
      <h2>Add New Employee</h2>
      <Form onSubmit={handleSubmit} className="mt-3">
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
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primaary">
          Add Employee
        </Button>
      </Form>
    </Container>
  );
};

export default AddUser;
