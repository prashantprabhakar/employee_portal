import React, {useState} from 'react'


const EditModel = ({employee, handleUpdateUser}) => {

  let [emp, setEmp] = useState(employee)

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value })    
  }

  return(
    <div className="container">
      <h2> Edit Profile </h2>

        <lebal>Name</lebal>
        <input value={emp.employee_name} name="employee_name" onChange={handleChange} />
        
        <label> Age </label>
        <input value={emp.employee_age} name="employee_age" onChange={handleChange} />
          
        <lable> Salary </lable>
        <input value={emp.employee_salary} name="employee_salary" onChange={handleChange} />
          
        <lable> Profile Image </lable>
        <input value={emp.profile_image} name="profile_image" onChange={handleChange} />      
      
        <button className="btn waves-light ediBtn blue" onClick={() =>  handleUpdateUser(emp)}> Save </button>
 
    </div>
  )
}

export default EditModel