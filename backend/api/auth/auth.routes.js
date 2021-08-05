const express = require('express')
const authController = require('./auth.controller')

const router = express.Router()

router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.post('/signup', authController.signup)
router.get('/token', authController.getFreshedToken)

module.exports = router