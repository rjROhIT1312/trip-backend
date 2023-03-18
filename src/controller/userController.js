const userModel = require('../model/userModel')

const createUser = async (req,res)=>{

    const body = req.body
    const userData = await userModel.create(body)

        return res.status(201).send({ status: true, message: "User created successfully", data: userData })

}

module.exports={createUser}