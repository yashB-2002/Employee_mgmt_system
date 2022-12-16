import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
function EditPage(props) {
  const { currEmp, data, setData, setEdit } = props;
  const [firstName, setFirstName] = useState(currEmp.firstName);
  const [lastName, setLastName] = useState(currEmp.lastName);
  const [email, setEmail] = useState(currEmp.email);
  const [salary, setSalary] = useState(currEmp.salary);
  const [date, setDate] = useState(currEmp.date);
  const emailRef = useRef();
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  function notify(name) {
    toast.success(`🦄 Record Updated for ${name}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const notifyA = (err) =>
    toast.warning(err, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  function handleSubmit(e) {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      notifyA("Add all the feilds to register employee..");
    }
    const newEmployee = {
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    notify(currEmp.firstName);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === currEmp.id) {
        data.splice(i, 1, newEmployee);
        break;
      }
    }
    setData(data);
    setEdit(false);
  }
  return (
    <div className="container my-4 ">
      <h1 className="d-grid gap-2" style={{ textAlign: "center" }}>
        Edit Employee Details
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Salary (in ₹)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date Of Joining</Form.Label>
          <Form.Control
            type="date"
            value={date}
            placeholder="Date of Joining"
            required
            pattern="\d{4}-\d{2}-\d{2}"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default EditPage;
