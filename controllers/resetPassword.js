const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const resetPassword = async (req, res) => {
  const { password, token } = req.body;

 if(!password){
  res.status(400).json({
    message : "enter all fields"
  })
 }

  try {
    const validate = jwt.verify(token, process.env.JWT_PASS);

    const { id } = validate;
  
    const user = await User.findById(id);
   
    
    const secret = await bcrypt.genSalt(10);

   const hashedPassword = await bcrypt.hash(password, secret);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({
      status: true,
      message: "password Saved!",
    });
  } catch (error) {
    res.status(400).json({
        status: false,
        message: "you do not have access to this route",
       
      });
  }
};


module.exports = resetPassword