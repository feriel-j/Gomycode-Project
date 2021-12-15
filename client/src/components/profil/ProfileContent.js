import React, { useState } from "react";
import "./StyleProfile/profilContent.css";
import { Link } from "react-router-dom";
import PostCard from "../posts/PostCard";
import StoryCard from "../stories/StoryCard";
import { SiMarriott } from "react-icons/si";
import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import PostModal from "./PostModal";

function ProfileContent({ stories, posts, ping, setping }) {
  const user = useSelector((state) => state.user.user);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="stories_content">
        <h1>
          <span>
            {" "}
            <SiMarriott />
          </span>{" "}
          Stories
          <span>
            <SiMarriott />
          </span>
        </h1>
        <button className="story-add">
          <Link to="/story">
            <span>
              <MdAdd />
            </span>{" "}
            Add story{" "}
          </Link>
        </button>
        <div className="stories_list">
          {stories
            ?.filter((el) => el.creator?._id === user?._id)
            .map((el) => (
              <StoryCard story={el} ping={ping} setping={setping} />
            ))}
        </div>
      </div>
      <div className="stories_content">
        <h1>
          <span>
            <SiMarriott />
          </span>
          Questions
          <span>
            <SiMarriott />
          </span>
        </h1>
        <button
          className="story-add"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <MdAdd />
          Add Post
        </button>
        {openModal ? (
          <PostModal closeModal={setOpenModal} ping={ping} setping={setping} />
        ) : null}

        <div className="posts_list">
          {posts
            ?.filter((el) => el.creator?._id === user?._id)
            .map((el) => <PostCard post={el} ping={ping} setping={setping} />)
            .reverse()}
        </div>
      </div>
      <Link className="link" to="/meet">
        <button className="story-add host">Host a meet</button>
      </Link>
    </>
  );
}

export default ProfileContent;
