import React, { useState, useEffect, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Form, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { employees, updateEmployee } = useContext(EmployeeContext);
  const { id } = useParams();
  console.log("----", id);
  const navigate = useNavigate();

  const employee = employees.find((emp) => emp.id === Number(id));
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const foundEmployee = employees.find((emp) => emp.id === Number(id));
    if (foundEmployee) {
      setForm({ ...foundEmployee });
    }
  }, [employees, id]);

  if (!employee) {
    return <h2 className="text-center mt-5">Employee not found</h2>;
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee({ ...form });
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <h2>Update Employee</h2>
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
          <Form.Label>Email</Form.Label>
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
            title="Phone no. must be 10 digits"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Update Employee
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateUser;
