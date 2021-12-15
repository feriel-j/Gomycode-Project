const mongoose = require("mongoose");
const schema = mongoose.Schema;
const PostSchema = new schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  postphoto: {
    type: String,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      text: {
        type: String,
      },
    },
  ],
  likes: [{ user: { type: mongoose.Types.ObjectId, ref: "User" } }],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Post", PostSchema);
