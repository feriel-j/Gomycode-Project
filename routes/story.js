const express = require("express");
const storyRouter = express.Router();
const Story = require("../models/story");

// create a person and save it
// req.body
// METHODE: POST

storyRouter.post("/", async (req, res) => {
  try {
    const newStory = new Story(req.body);
    let result = await newStory.save();
    res.status(200).send({ result: result, msg: "story added" });
  } catch (error) {
    res.status(500).send("can't save the story");
    console.log(error);
  }
});

// get all persons
// METHODE: GET
storyRouter.get("/", async (req, res) => {
  try {
    let result = await Story.find().populate("creator", "_id name photo");
    res.status(200).send({ stories: result, msg: "all stories" });
  } catch (error) {
    res.status(500).send("can't get the story");
    console.log(error);
  }
});

// get one person
// METHODE: GET
// params

storyRouter.get("/:id", async (req, res) => {
  try {
    const result = await Story.findOne({ _id: req.params.id }).populate(
      "creator",
      "_id name photo"
    );
    res.send({ story: result, msg: "story" });
  } catch (error) {
    console.log(error);
  }
});

// update person
// METHODE: put
// params
// req.body
storyRouter.put("/:id", async (req, res) => {
  console.log(req.body);
  try {
    let result = await Story.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: { ...req.body },
      }
    );
    res.send({ newStory: result, msg: "story updated" });
  } catch (error) {
    console.log(error);
  }
});

// delete person
// METHODE: DELETE
// params

storyRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Story.findOneAndRemove({
      _id: req.params.id,
    });
    console.log(_id);
    res.send({ msg: "story deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = storyRouter;
