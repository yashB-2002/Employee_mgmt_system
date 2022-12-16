import React from 'react'
import { Table ,Button} from "react-bootstrap";
function List(props) {
  const {data,handleEdit,handleDel} = props
  console.log(data);
  return (
      <Table striped bordered hover variant="dark">
      <thead>
        <tr className='text-center'>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary (in ₹)</th>
          <th>D.O.J</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.length > 0 ? data.map((d,i)=>(
            <tr className='text-center' key={d.id} >
          <td  >{i+1}</td>
          <td >{d.firstName}</td>
          <td >{d.lastName}</td>
          <td > {d.email}</td>
          <td >{d.salary}</td>
          <td >{d.date}</td>
          <td ><Button variant="success" onClick={(e)=>handleEdit(d.id)} >Edit</Button><br/><br/><Button variant="danger" onClick={(e)=>handleDel(d.id)} >Remove</Button></td>
        </tr>
          )) : <tr >
            <td colSpan={7} style={{textAlign:'center'}} >No Data to show</td>
          </tr>
        }
        
        
      </tbody>
    </Table>
  )
}

export default List
