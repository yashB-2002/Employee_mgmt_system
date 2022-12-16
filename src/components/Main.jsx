import React, { useState } from 'react'
import details from "../details"
import EditPage from './EditPage'
import HeaderPage from './HeaderPage'
import List from './List'
import NewPage from './NewPage'
import { toast } from "react-toastify";
function Main() {
  const [edit, setEdit] = useState(false)
  const [addNew, setAddNew] = useState(false)
  const [data, setData] = useState(details)
  const [currEmp , setCurrEmp] = useState(null)
  function handleDel(record_id) {
    // console.log(record_id);
    const newData = data.filter((d)=>d.id!=record_id)
    setData(newData)
    toast.success('🦄 Record Removed...', {
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
  function handleEdit(record_id) {
    // console.log(record_id);
    const [employee] = data.filter(d => d.id === record_id);
    setCurrEmp(employee);
    setEdit(true);
  }
  return (
    <div className='container' >
      {
      !edit && !addNew && (
        <>
          <HeaderPage setAddNew={setAddNew} />
          <List data={data} handleEdit={handleEdit} handleDel={handleDel} />
        </>
      )
      }
      {
        edit && (
          <EditPage currEmp={currEmp} data={data} setData={setData} setEdit={setEdit} />
        )
      }
      {
        addNew && (
          <NewPage data={data} setData={setData} setAddNew={setAddNew} />
        )
      }
    </div>
  )
}

export default Main
