const mongoose = require("mongoose");

const VisitorSchema = mongoose.Schema(
  {
    status: {
      type: String,
      default: "Unresolved",
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
