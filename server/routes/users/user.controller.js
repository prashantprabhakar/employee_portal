//@ts-check

const EmpModel = require('../../models/employeeModel')

exports.getUserList = async(req,res)  => {
  try{
    let employees = await EmpModel.find({isDeleted:false},{isDeleted:0})
    return res.status(200).json({success: true, data: employees})

  } catch(e){
    console.log(e.message)
    return res.status(500).json({success: false, message: 'Something went wrong'})
  }
}

exports.updateUser = async(req,res) => {
  try{
    let user = req.body
    await EmpModel.updateOne({_id: user._id}, {$set: user})
    return res.status(201).json({success: true, message: 'Updated successfully'})
  } catch(e) {
    console.log(e.message)
    return res.status(500).json({success: false, message: 'Something went wrong'})
  }
}

exports.deleteUser = async(req,res) => {
  try{
    let {userid} = req.body
    console.log(userid)
    await EmpModel.updateOne({id: userid}, {$set:{isDeleted: true}})
    return res.status(200).json({success: true, message: 'Deleted successfully'})
  } catch(e) {
    console.log(e.message)
    return res.status(500).json({success: false, message: 'Something went wrong'})
  }
}