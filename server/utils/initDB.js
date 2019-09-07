// @ts-check
const rp = require('request-promise')
const EmployeeModel = require('../models/employeeModel')
const importEmployees = async() => {
  try{
    let tableExists = await EmployeeModel.findOne()
    if(tableExists){
      console.log("data already imported to db")
      return
    }
    let url = 'http://dummy.restapiexample.com/api/v1/employees'
    let resp = await rp.get(url,{json:true})
    await EmployeeModel.insertMany(resp)
  } catch(e){
    //console.log(e)
    console.log("Unable to fetch employee records")
    return false
  }
}

module.exports = importEmployees