const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  photo: {
    type: String,
    default:
      "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=20&m=846183008&s=170667a&w=0&h=WIxZSP7aJ9jSvW3xqzDsWSI5g666kVBBgCNkABzYs68=",
    required: false,
  },
  name: {
    type: String,

    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  about: {
    type: String,
    required: false,
    default: "",
  },
  phone: {
    type: Number,
    required: false,
    default: "",
  },

  city: {
    type: String,
    required: false,
    default: "",
  },

  country: {
    type: String,
    required: false,
    default: "",
  },

  lastdestination: {
    type: String,
    default: "",
    required: false,
  },
  dreamdestination: {
    type: String,
    default: "",
    required: false,
  },
  gender: {
    type: String,
    default: "male",
    required: false,
  },
});
module.exports = mongoose.model("User", UserSchema);
