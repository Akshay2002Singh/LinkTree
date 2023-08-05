const express = require('express')
const { body, validationResult } = require('express-validator')
const router = express.Router()
const auth = require('../database/models/auth')
const linkTree = require('../database/models/linkTree')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// jwt secret 
const JWT_SECRET = 'Rapid'

router.post('/signup',
    body('email').trim().notEmpty().isEmail(),
    body('username').trim().notEmpty(),
    body('password').trim().notEmpty(),
    async (req, res) => {
        // find error in validation and send 
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.json({
                'error': "Validation error",
                'errors_array': result.array()
            })
        }
        // generate salt 
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        // create entry in auth model
        await auth.create({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
        });


        res.json({
            uesr: await auth.find({ username: req.body.username })
        })
    })


router.post('/signin',
    body('username').trim().notEmpty(),
    body('password').trim().notEmpty(),
    async (req, res) => {
        // find error in validation and send 
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.json({
                'error': "Validation error",
                'errors_array': result.array()
            })
        }

        const user = await auth.findOne({
            username: req.body.username
        })

        if (!user) {
            return res.json({
                error: "invalid user"
            })
        }

        const is_valid_password = await bcrypt.compare(req.body.password, user.password)
        
        if (is_valid_password) {
            const data = {
                'username' : user.username
            }
            const authToken = jwt.sign(data,JWT_SECRET, { expiresIn: "7d" })
            console.log(authToken)
            res.json({
                'authToken' : authToken
            })
        } else {
            res.json({
                error: "invalid password"
            })
        }
    })

module.exports = router