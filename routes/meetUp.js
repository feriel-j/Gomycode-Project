const express = require("express");
const MeetUpRouter = express.Router();
const MeetUp = require("../models/meetUp");

// MeetUpRouter.get("/", (req, res) => {
//   res.send("hello word");
// });

//create a MeetUp and post it
//methode:post
//req.body
MeetUpRouter.post("/", async (req, res) => {
  try {
    const newMeetUp = new MeetUp(req.body);
    let result = await newMeetUp.save();
    res.status(200).send({ result: result, msg: "MeetUp added perfectly" });
  } catch (error) {
    res.status(500).send("can't save the MeetUp");
    console.log(error);
  }
});

//get all MeetUps
//methode:get
MeetUpRouter.get("/", async (req, res) => {
  try {
    let result = await MeetUp.find();
    res.status(200).send({ meetups: result, msg: "all MeetUps:" });
  } catch (error) {
    res.status(500).send("cannot get the MeetUps");
    console.log(error);
  }
});

//get one MeetUp
//methode:get
//params
MeetUpRouter.get("/:id", async (req, res) => {
  try {
    let result = await MeetUp.findOne({ _id: req.params.id });
    res.status(200).send({ resu: result, msg: "this is the MeetUp.." });
  } catch (error) {
    res.status(500).send("cannot get the MeetUp");
  }
});

//update MeetUp
//methode:put
//req.body
//params

MeetUpRouter.put("/:id", async (req, res) => {
  try {
    let result = await MeetUp.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { ...req.body } }
    );
    res.status(200).send({ newMeetUp: result, msg: "MeetUp updated..." });
  } catch (error) {
    res.status(500).send("cannot update the MeetUp..");
    console.log(error);
  }
});

//delete MeetUp
//methode:delete
//params

MeetUpRouter.delete("/:id", async (req, res) => {
  try {
    let resut = await MeetUp.findOneAndRemove({ _id: req.params.id });
    res.status(200).send({ msg: "MeetUp removed..." });
  } catch (error) {
    res.status(500).send("cannot delete the MeetUp..");
  }
});

//ADD Participants

MeetUpRouter.put("/part/:id", async (req, res) => {
  try {
    let result = await MeetUp.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { participant: { ...req.body } } }
    );
    res.send({ newEvent: result, msg: "meetup updated" });
  } catch (error) {
    console.log(error);
  }
});

//delete participants

MeetUpRouter.delete("/part/:id/:partId", async (req, res) => {
  try {
    let meet = await MeetUp.findById({ _id: req.params.id });
    const part = meet.participant.find((part) => part.id === req.params.partId);
    if (!part) {
      return res.status(404).json({ msg: "participant doesn't exist" });
    }

    const removeindex = meet.participant
      .map((part) => part.toString())
      .indexOf(req.params.partId);
    meet.participant.splice(removeindex, 1);
    await meet.save();
    res.json(meet.participant);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

module.exports = MeetUpRouter;
