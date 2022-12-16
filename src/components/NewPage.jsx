import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";
function NewPage(props) {
  const notifyB = (success) => toast.success(success,{
    position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
  });
  const notifyA = (err) => toast.warning(err,{
    position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
  });
  const emailRef = useRef();
  useEffect(()=>{
    emailRef.current.focus();
  },[])
  const {data,setData,setAddNew} = props
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');
    // console.log(firstName,lastName,email,salary,date);
    function handleSubmit(e) {
      e.preventDefault();
      if (!firstName || !lastName || !email || !salary || !date) {
        notifyA("Add all the feilds to register employee..")
      }
      else {
        const newEmployee = {
            id:data.length+1,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        setData([...data,newEmployee])
        notifyB("Employee registered ")
        setAddNew(false)
      }
    }
  return (
    <div className='container my-4 ' > 
    <h1 className="d-grid gap-2" style={{textAlign:'center'}}  >Register New Employee</h1>
  <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  required ref={emailRef} type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)}  /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="Last Name"  onChange={e => setLastName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Salary (in ₹)</Form.Label>
        <Form.Control type="number" placeholder="Salary" onChange={e => setSalary(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date Of Joining</Form.Label>
        <Form.Control type="date" placeholder="Date of Joining" required pattern="\d{4}-\d{2}-\d{2}"  onChange={e => setDate(e.target.value)} />
      </Form.Group>
      {/* onClick={()=>setAddNew(false)} */}
      <Button  variant="success" disabled={firstName.length < 1 && lastName.length < 1 && email.length < 1  } type="submit"  >
        Register
      </Button>
    </Form>
    </div>
  );
}

export default NewPage
