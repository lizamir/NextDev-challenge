const jwt = require('jsonwebtoken')

module.exports = {
    authenticateToken,
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]
    if (!token) return res.sendStatus(403)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}