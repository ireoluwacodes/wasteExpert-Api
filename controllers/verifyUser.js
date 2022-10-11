const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

const verifyUser = async (req, res) => {
  const token = req.params.id;
  try {
    const { id } = jwt.verify(token, process.env.JWT_PASS);

    const user = await User.findById(id);
    if(user.isVerified){
        res.status(200).json({
            message: "User Verified!",
          });
    }else{
    user.isVerified = true;
    await user.save();

    res.status(200).json({
      message: "User Verified!",
    });
}
  } catch (error) {
    res.status(401).json({
      message: "Please request new verification link",
      error,
    });
  }
};

module.exports = verifyUser;
