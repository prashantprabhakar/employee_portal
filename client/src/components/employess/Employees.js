import React,  {useEffect, useState} from 'react'
import UserList from './UserList'
import UserDetail from './UserDetails'
import EditUser from './EditUser'
import Popup from './EdiPop'

import handleRequest from './../../services/http.service';


const Employees = () => {

  let [employees, setEmployees] = useState([])
  let [editState, setEditState] = useState(false)
  let [editedEmp, setEditedEmp] = useState({})

  useEffect(() => {
    (async() => {
      // methodType, url, data, config
      let resp = await handleRequest('GET', '/users/fetch-users')
      setEmployees(resp.data)
    })()
    

  },[])

  const handleEditClick = (emp) => {
    console.log(emp)
    setEditState(true)
    setEditedEmp(emp)
  }

  const handleUpdateUser = async(user) => {
    let resp = await handleRequest('POST', '/users/update-user/', user)
    if(resp.success){
      await updateData(user)
      setEditState(false)
      setEditedEmp({})
    }
  }

  const deleteUser = async(userid) => {
    let resp = await handleRequest('POST', '/users/delete-user/', {userid})
    if(resp.success) {
      let newusers = employees.filter(elem => elem.id !== userid)
      setEmployees(newusers)
    }
  }

  async function updateData(user){
    let newEmp = []
    for(let i=0; i<employees.length; i++){
      let emp = employees[i]
      if(emp.id !== user.id) newEmp.push(emp)
      else newEmp.push(user)
    }
    setEmployees(newEmp)
  }

  function closePopup(){
    setEditState(false)
  }

  return(
    <div className="dashboard container">
      {
        editState && (<Popup text='' closePopup={closePopup}> <EditUser employee={editedEmp} handleUpdateUser={handleUpdateUser  }/> </Popup>)
      }
      <div className="user-list-box">
        <UserDetail emp={employees[0]} handleEditClick={handleEditClick} />
        <UserList employees={employees} handleEditClick={handleEditClick} deleteUser={deleteUser} />
      </div>
    </div>
  )
  
}

export default Employees