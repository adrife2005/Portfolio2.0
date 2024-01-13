const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name value"],
    },
    email: {
      type: String,
      require: [true, "Please add a email value"],
    },
    proyect: {
      type: String,
      require: [true, "Please add a proyect value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
