import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    reqired: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

export default user;
