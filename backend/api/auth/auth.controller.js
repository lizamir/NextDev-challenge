const authService = require('./auth.service')

module.exports = {
    login,
    logout,
    signup,
    getFreshedToken,
}

async function login(req, res) {
    const { username, password } = req.body
    try {
        const details = await authService.login(username, password)
        req.user = details.user
        console.log('logged in! ', req.user)
        res.json(details)
    } catch (err) {
        console.log('error while trying login: ', err)
        res.status(500).send({ err: 'Failed to Login' })
    }
}

async function signup(req, res) {
    try {
        console.log('signing up')
        const details = req.body
        const account = await authService.signup(details)
        console.log('account:', account)
        const result = await authService.login(details.username, details.password)
        req.user = result.user
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).send({ err: 'Failed to signup' })
    }
}

async function logout(req, res) {
    try {
        const { refreshToken } = req.body
        await authService.removeRefreshToken(refreshToken)
        req.user = null
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
}

async function getFreshedToken(req, res) {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) return res.sendStatus(401)
        const freshedToken = await authService.getFreshedToken(refreshToken)
        res.json({ accessToken: freshedToken })
    } catch (err) {
        console.log('err:', err)
        res.sendStatus(500)
    }
}