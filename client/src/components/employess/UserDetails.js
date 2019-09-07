import React from 'react'

const UserDetail = ({emp, handleEditClick}) => {

  if(!emp){
    return null
  }

  return (
    <div className="userDetail">
      <h3> First User Details: </h3>
      <table>
        <tbody>
          <tr>
            <td> Id: </td>
            <td>{emp.id}</td>
          </tr>
          <tr>
            <td> Name: </td>
            <td> {emp.employee_name} </td>
          </tr>

          <tr>
            <td> Age: </td>
            <td>{emp.employee_age}</td>
          </tr>

          <tr>
            <td> Salary: </td>
            <td>{emp.employee_salary}</td>
          </tr>

          <tr>
            <td> Profile Image: </td>
            <td> 
              {
                emp.profile_image ? <img src={emp.profile_image} style={{height:'70px', width:'70px'}} /> : 'Not available'
              }
            </td>
          </tr>

          <button className="btn waves-light ediBtn" onClick={() => handleEditClick(emp)}>Edit </button>
           
        </tbody>
      </table>
      
    </div>
  )

}

export default UserDetail