const express = require('express')
const router = express.Router()
const userController=require("../controller/userController")

router.post('/createUser',userController.createUser)



//WRONG PATH
router.all('/*', (req, res) => {
    res.status(400).send({
        status: false,
        message: 'Path not found'
    })
})

module.exports = router