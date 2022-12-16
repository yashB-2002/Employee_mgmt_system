import React from 'react'
import { Button } from 'react-bootstrap';
function HeaderPage(props) {
  const {setAddNew} = props;
  function handleClick(e) {
    setAddNew(true)
  }
  return (
    <header>
      <h1 style={{marginBottom:15,marginTop:10 ,textAlign:'center',color:'blue'}} >EMPOLYEE MANAGEMENT SYSTEM</h1>
      <div className="d-grid gap-2" >
        <Button  size='lg' style={{marginBottom:15 }} onClick={handleClick} >Add New Employee</Button>
      </div>
    </header>
  )
}

export default HeaderPage
