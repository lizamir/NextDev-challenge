const userService = require('./user.service')
const authService = require('../auth/auth.service')

async function getUserById(req, res) {
    try {
        const { userId } = req.params
        const user = await userService.getUserById(userId)
        res.json(user)
    } catch (err) {
        res.status(500).send({ err: 'user didnt found' })
    }
}

async function getUserByEmail(req, res) {
    try {
        const { email } = req.params
        const user = await userService.getUserByCriteria({ email })
        res.json(user)
    } catch (err) {
        res.status(500).send({ err: 'user didnt found' })
    }
}

async function getUsers(req, res) {
    try {
        const { username } = req.params
        const users = await userService.getUsers(username)
        res.json(users)
    } catch (err) {
        console.log(err)
        res.status(500).send({ err: 'couldnt search users' })
    }
}

async function addUser(req, res) {
    try {
        const userToAdd = req.body
        const user = await userService.addUser(userToAdd)
        res.json(user)
    } catch (err) {
        res.status(500).send({ err: 'cannot add user' })
    }
}

async function updateUser(req, res) {
    try {
        console.log('recieved')
        const newUser = req.body
        console.log('newUser:', newUser)
        console.log('req.user:', req.user)
        if (newUser._id !== req.user._id) return res.sendStatus(403)
        const updatedUser = await userService.updateUser({ ...req.user, ...newUser })
        const tokens = await authService.getTokens(updatedUser)
        res.json({ user: updatedUser, tokens })
    } catch (err) {
        res.status(500).send({ err: 'cannot update user' })
    }
}

module.exports = {
    getUserById,
    getUserByEmail,
    addUser,
    updateUser,
    getUsers,
}