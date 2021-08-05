const dbService = require('../../services/db.service')
const userService = require('../user/user.service')
const ObjectId = require('mongodb').ObjectId
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const REFRESH_TOKENS_DB_KEY = 'refreshTokens'
const tokenTime = '2m'

module.exports = {
    login,
    signup,
    removeRefreshToken,
    getFreshedToken,
    getTokens
}

async function login(username, password) {
    const user = await userService.getUserByCriteria({ username })
    if (!user) throw new Error('403')
    const match = await bcrypt.compare(password, user.password)
    if (!match) throw new Error('401')

    delete user.password

    const tokens = await getTokens(user)

    return { user, tokens }
}

async function signup({
    company,
    username,
    password,
    email,
    firstName,
    lastName,
    city,
    country,
    postalCode,
    about,
}) {
    const saltRounds = 10
    if (!username || !password || !email) {
        return Promise.reject('username, password and mail are required!')
    }

    const hash = await bcrypt.hash(password, saltRounds)
    return await userService.addUser({
        company,
        username,
        password: hash,
        email,
        firstName,
        lastName,
        city,
        country,
        postalCode,
        about,
    })
}

async function getTokens(user) {
    const accessToken = _generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

    const collection = await dbService.getCollection(REFRESH_TOKENS_DB_KEY)
    await collection.insertOne({ value: refreshToken })
    return { accessToken, refreshToken }
}

async function removeRefreshToken(refreshToken) {
    try {
        const collection = await dbService.getCollection(REFRESH_TOKENS_DB_KEY)
        await collection.deleteOne({ value: refreshToken })
    } catch (err) {
        console.log('err:', err)
        throw err
    }
}

async function getFreshedToken(refreshToken) {
    try {
        const collection = await dbService.getCollection(REFRESH_TOKENS_DB_KEY)
        const isExist = await collection.findOne({ value: refreshToken })
        if (!isExist) throw new Error('your refresh token not exist')

        let accessToken
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) throw new Error('wrong refresh token')
            accessToken = _generateAccessToken(user)
        })
        return accessToken
    } catch (err) {
        console.log('err:', err)
        throw err
    }
}

function _generateAccessToken(user) {
    console.log('user:', user)
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: tokenTime,
    })
}