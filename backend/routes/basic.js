const express = require('express')
const linkTree = require('../database/models/linkTree')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        "msg" : "Server is working"
    })
})


router.get('/:username' , async (req,res)=>{
    const data = await linkTree.findOne({username : req.params.username})
    res.json(data);
})


module.exports = router