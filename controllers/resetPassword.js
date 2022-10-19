const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const resetPassword = async (req, res) => {
  const { password } = req.body;
  if (!password) {
    res.status(400).json({
      message: "enter all fields",
    });
  } else {
    try {
      const token = req.header.authorization.split(" ")[1];
      console.log(token)
      const { id } = jwt.verify(token, process.env.JWT_PASS);
      const user = await User.findById(id);
      const secret = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, secret);
      user.password = hashedPassword;
      const update = await user.save();
      
      if (update) {
        res.status(200).json({
          message: "Password Changed.",
        });
      }
    } catch (error) {
      res.status(401).json({
        message: "Not authorized to accesss this route",
       
      });
    }
  }
};
module.exports = resetPassword;
