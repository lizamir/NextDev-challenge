const express = require('express')
const userController = require('./user.controller')
const authMiddleware = require('../../middlewares/auth.middlware')
const router = express.Router()

// router.get('/username/:email', userController.getUserByEmail)
// router.get('/search/:username', userController.getUsers)

router
    .route('/:userId')
    .get(userController.getUserById)
    .put(authMiddleware.authenticateToken, userController.updateUser)
router.route('/').post(userController.addUser)

module.exports = router