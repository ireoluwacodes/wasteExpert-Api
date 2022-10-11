const User = require("../models/userModel");
const jwt = require("jsonwebtoken");



const confirmUser = async (req, res) => {
const token = req.params.id

try {
    const {id} = jwt.verify(token, process.env.JWT_PASS,)
    const user = await User.findById(id)
if(user){
    res.status(200).json({
        message : "User Found",
        token,
    })
}
} catch (error) {
    res.status(401).json({
        message : "Please request new verification link"
    }) 
}
}

module.exports = confirmUser