const express = require("express");
const postRouter = express.Router();
const Post = require("../models/post");

// create a person and save it
// req.body
// METHODE: POST

postRouter.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    let result = await newPost.save();
    res.send({ result: result, msg: "post added" });
  } catch (error) {
    console.log(error);
  }
});

// get all persons
// METHODE: GET
postRouter.get("/", async (req, res) => {
  try {
    let result = await Post.find().populate("creator", "_id name photo");
    res.send({ posts: result, msg: "all posts" });
  } catch (error) {
    console.log(error);
  }
});

// get one person
// METHODE: GET
// params

postRouter.get("/:id", async (req, res) => {
  try {
    const result = await Post.findOne({ _id: req.params.id }).populate(
      "creator",
      "creator._id creator.name creator.photo"
    );

    res.send({ post: result, msg: "post" });
  } catch (error) {
    console.log(error);
  }
});

// update person
// METHODE: put
// params
// req.body
postRouter.put("/:id", async (req, res) => {
  console.log(req.body);
  try {
    let result = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: { ...req.body },
      }
    );
    res.send({ newPost: result, msg: "post updated" });
  } catch (error) {
    res.status(500).send("cannot update the post..");
    console.log(error);
  }
});

// delete post
// METHODE: DELETE
// params

postRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Post.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: "post deleted" });
  } catch (error) {
    console.log(error);
  }
});

//like posts
//put
//http://localhost:5000/like/id

postRouter.put("/like/:id/:userid", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (
      post.likes.filter((like) => like.user.toString() === req.params.userid)
        .length > 0
    ) {
      return res.status(400).json({ error: "Post already liked" });
    }

    post.likes.unshift({ user: req.params.userid });
    await post.save();
    res.json(post.likes);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//unlike

postRouter.put("/unlike/:id/:userid", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (
      post.likes.filter((like) => like.user.toString() === req.params.userid)
        .length === 0
    ) {
      return res.status(400).json({ error: "Post has not been liked yet " });
    }

    const removeindex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.params.userid);

    post.likes.splice(removeindex, 1);
    await post.save();
    res.status(200).json(post.likes);
  } catch (error) {
    res.json(error);
  }
});
//comment posts
//put
//http://localhost:5000/comment/post id

postRouter.post("/comment/:id/:userid", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "comments.user",
      "_id name photo"
    );

    const newComment = {
      text: req.body.text,
      user: req.params.userid,
    };
    post.comments.unshift(newComment);
    await post.save();
    res.status(200).json(post.comments);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//delete comment posts
//put
//http://localhost:5000/comment/post id / comment id

postRouter.delete(
  "/comment/:id/:commentid/:userid",

  async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comment = post.comments.find(
        (comment) => comment.id === req.params.commentid
      );
      if (!comment) {
        return res.status(404).json({ msg: "comment does not exist" });
      }

      const removeindex = post.comments
        .map((comment) => comment.user.toString())
        .indexOf(req.params.userid);
      post.comments.splice(removeindex, 1);
      await post.save();
      res.json(post.comments);
    } catch (error) {
      res.status(500).send({ error: error });
    }
  }
);

module.exports = postRouter;
