const express = require('express')
const path = require('path')
const router = express.Router()
const fetchUser = require('../middleware/fetchuser')
const linkTree = require('../database/models/linkTree')

router.post('/edit', fetchUser, async (req, res) => {
    const data = await linkTree.updateOne({ username: req.body.username }, req.body )

    res.json({
        'msg': 'edit working',
        'data' : data
    })
})


router.post('/view', async (req, res) => {
    const data = await linkTree.findOne({ username: req.body.username });
    if(data){
        res.json({"msg" : "data found" ,
        "data" : data
        })
    }else{
        res.json({"msg" : "data missing"})
    }
})

module.exports = router