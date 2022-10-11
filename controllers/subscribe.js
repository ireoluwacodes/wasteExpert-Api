const User = require("../models/userModel");

const { transporter, mailOptions } = require("../utils/mailConfig");

const subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(401).json({
      message: "All fields required",
    });
  } else {
    try {
      const user = await User.findOne({ email });

      user.newsLetter = "subscribed";
      const subcribed = await user.save();

      res.status(200).json({
        message: "Subscribed!",
      });
    } catch (error) {
      res.status(401).json({
        message: "User not found",
      });
    }
  }
};

module.exports = subscribe;
