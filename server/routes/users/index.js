const router = require('express').Router()
const userCtrl = require('./user.controller')

router.get('/fetch-users',
  userCtrl.getUserList)

router.post('/update-user', 
  userCtrl.updateUser)

router.post('/delete-user', 
  userCtrl.deleteUser)


module.exports = router