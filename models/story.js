const mongoose = require("mongoose");
const schema = mongoose.Schema;
const StorySchema = new schema({
  cover: {
    type: String,

    required: false,
  },
  photoStories: {
    type: Array,

    required: false,
  },
  destination: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  accomodation: {
    type: String,
    required: false,
  },
  food: {
    type: String,
    required: false,
  },
  travellers: {
    type: String,
    required: false,
  },
  transport: {
    type: String,
    required: false,
  },
  budget: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  comments: [{ type: mongoose.Types.ObjectId, ref: "comment" }],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Story", StorySchema);
