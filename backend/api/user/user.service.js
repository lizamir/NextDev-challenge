const axios = require('axios')
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

const USER_KEY = 'users'

module.exports = {
    getUserById,
    getUsers,
    isUsernameExist,
    getUserByCriteria,
    addUser,
    updateUser,
}

async function getUserById(userId) {
    try {
        const collection = await dbService.getCollection(USER_KEY)
        const user = await collection.findOne({ _id: new ObjectId(userId) })
        delete user.password
        return user
    } catch (err) {
        console.log('couldnt get user: ', err)
        throw err
    }
}

async function getUsers(username) {
    try {
        const collection = await dbService.getCollection(USER_KEY)
        const users = await collection
            .find({
                username: { $regex: '.' + '.' },
            })
            .toArray()
        users.forEach((currUser) => delete currUser.password)
        return users
    } catch (err) {
        console.log('couldnt search users: ', err)
        throw err
    }
}

async function addUser(userDetails) {
    try {

        const userAlreadyExist = await getUserByCriteria({ username: userDetails.username })
        if (userAlreadyExist) throw new Error('username already taken')
        const collection = await dbService.getCollection(USER_KEY)
        const res = await collection.insertOne(userDetails)
        return res.ops[0]
    } catch (err) {
        console.log('couldnt add user', err)
        throw err
    }
}
async function updateUser(newUser) {
    try {
        //delete non updatable fields from user:
        // delete newUser.createdAt
        const _id = newUser._id
        delete newUser._id
        delete newUser.exp
        delete newUser.iat
        console.log('newUser after :', newUser)
        const collection = await dbService.getCollection(USER_KEY)
        const res = await collection.findOneAndUpdate(
            { _id: new ObjectId(_id) },
            { $set: newUser },
            { returnOriginal: false }
        )
        return res.value
    } catch (err) {
        console.log('couldnt update user: ', err)
        throw err
    }
}
async function getUserByCriteria(criteria) {
    try {
        const collection = await dbService.getCollection(USER_KEY)
        const user = await collection.findOne(criteria)
        return user
    } catch (err) {
        console.log('error in checking user existance proccess: ', err)
        throw err
    }
}

async function isUsernameExist(username) {
    try {
        const collection = await dbService.getCollection(USER_KEY)
        const user = await collection.findOne({ username })
        if (!user) return false
        return true
    } catch (err) {
        console.log('error in checking username existance proccess: ', err)
        throw err
    }
}