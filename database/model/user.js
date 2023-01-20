const mongoose = require("mongoose")
const Users = new mongoose.Schema({
  username: {
    type: String,
    minlength: [3, "Username lenght must be at least 6 characters"],
    maxlength: [15, "Username length must be between 6 and 15"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [3, "Password lenght must be at least 8 characters"],
    maxlength: [61, "Password must be include between 8 and 25 characters"],
  },
  email: { type: String, required: [true, "Email is required"] },
  createdAt: { type: Date, default: Date.now() },
  admin: { type: Boolean },
});
const UsersModel= mongoose.model("Users", Users);
module.exports= UsersModel;