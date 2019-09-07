import React from 'react'

const UserList = ({employees, handleEditClick, deleteUser}) => {

  return(
    <div className="user-list-table">
       <h3> User List: </h3>
      <table className="striped responsive-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Profile Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          employees.map(employee => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.employee_name}</td>
                <td>{employee.employee_age}</td>
                <td>{employee.employee_salary}</td>
                <td> 
                  {
                    employee.profile_image ? <img src={employee.profile_image} alt="N/A" style={{height:'50px', width:'50px'}} /> : 'Not available'
                  }
                </td>
                <td>
                  <button className="btn waves-light blue m-4" onClick={() =>  handleEditClick(employee)}>
                    <i className="small material-icons">edit</i>
                  </button>
                  <button className="btn waves-light red m-4" onClick={() => deleteUser(employee.id)}>
                    <i className="small material-icons">delete</i>
                  </button>
                </td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </div>
  )
  
}

export default UserList