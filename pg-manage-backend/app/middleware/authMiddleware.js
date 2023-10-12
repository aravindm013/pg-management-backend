const jwt = require('jsonwebtoken')
const secretKey = 'jvlJtF6Iir'

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization
  // console.log('Authorization Header:', token)
  if (!token){
    return res.status(401).json({ message: 'Unauthorized token' })
  }
  try {
    const decoded = jwt.verify(token.split(" ")[1], secretKey)
    req.user = decoded
    next()
  }catch (error) {
    console.error('JWT Verification Error:', error);
    return res.status(401).json({ message: 'Unauthorized token' })
    }
}

module.exports = {
  authenticateUser,
}
