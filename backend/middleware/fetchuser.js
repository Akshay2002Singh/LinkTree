const jwt = require('jsonwebtoken')

const fetchUser = (req,res,next) => {
    const JWT_SECRET = 'Rapid';
    const token = req.header('authToken');
    if(!token){
        res.status(401).json({
            'error' : "invalid request"
        })
    }
    const data = jwt.verify(token,JWT_SECRET);
    req.user = data.username;
    next()
}

module.exports = fetchUser