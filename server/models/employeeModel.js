const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  id: {type: String, required:true, unique:true},
  employee_name: {type:String},
  employee_salary:  {type:String},
  employee_age: {type:String},
  profile_image: {type:String},
  crtd: { type: Date, default: Date.now },
  isDeleted: {type: Boolean, default: false}
})

module.exports = mongoose.model('employees', employeeSchema)