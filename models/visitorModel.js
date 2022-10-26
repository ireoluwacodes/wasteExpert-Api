const mongoose = require("mongoose");

const VisitorSchema = mongoose.Schema(
  {
    resolved : {
      type: Boolean,
      default: false,
    },
    fullName: {
      type: String,
    },

    email: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("visitor", VisitorSchema);
