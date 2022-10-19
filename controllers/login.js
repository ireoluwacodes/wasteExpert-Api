const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const login = async (req, res) => {
const {email, password} =  req.body
if(!email || !password){
    res.status(401).json({
        message : "please enter all feilds"
    })
}else{
    try {
       const user = await User.findOne({email})

       const id = user._id

       if(user.isVerified){
       const validate = await bcrypt.compare(password, user.password)
        if(validate){
            const token = jwt.sign({id}, process.env.JWT_PASS, {
                expiresIn : "1d"
               })
               res.status(200).json({
                message : "Login Successfully",
                token,
            })
        }
       } else{
        res.status(401).json({
            message : "Please verify your email"
        })
       }
    } catch (error) {
        res.status(401).json({
            message : "User does not exist",
        })
    }
}
}

module.exports = login