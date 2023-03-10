const express = require('express')
const router = express.Router()
const { UserEmailController } = require('../../domain.development-email.js/controller/userEmail.controller')

const userEmailController = new UserEmailController()

//register routes
router.post('/register',userEmailController.register)
router.post('/register/validate',userEmailController.confirmRegister)

//login routes
// router.post('/login', userEmailController.login)

module.exports = router