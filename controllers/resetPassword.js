const User = require("../models/userModel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const resetPassword = async (req, res) => {
  const {password} = req.body
  const token = req.bearer.authorization.split(" ")[1];

  const { id } = jwt.verify(token, process.env.JWT_PASS);

  try {
    const user = await User.findById(id);
const secret = await  bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, secret)
user.password = hashedPassword
    const update = await user.save()
    if (update) {
      res.status(401).json({
        message: "Password Changed.",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Please enter new password",
    });
  }
};

module.exports = resetPassword;
