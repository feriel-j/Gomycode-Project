const mongoose = require("mongoose");
const schema = mongoose.Schema;
const MeetUpSchema = new schema({
  meetImg: {
    type: String,
  },
  destination: {
    type: String,
    required: true,
  },
  organiser: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },

  participant: [
    {
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
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("meet", MeetUpSchema);
