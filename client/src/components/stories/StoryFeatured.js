import React from "react";
import "./storyCard.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { FcLike } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { storyDelete } from "../../JS/userSlice/storiesSlice";
import StoryModal from "./StoryModal";
import { Link } from "react-router-dom";
const StoryFeatured = ({ story, ping, setping }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          className="story-card-img"
          src={`http://localhost:5000${story?.cover}`}
          alt="card"
        />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>
            {story?.destination.charAt(0).toUpperCase() +
              story?.destination?.slice(1)}
          </h3>{" "}
          <FcLike className="like" />
        </div>

        <div className="card-body">
          <p>
            {story?.message?.length >= 100
              ? story?.message?.slice(0, 100) + "  ..."
              : story?.message?.charAt(0).toUpperCase() +
                story?.message?.slice(1)}
          </p>
        </div>

        <div className="card-footer">
          <h5>
            By:<span> {story?.creator?.name}</span>
          </h5>
          <h5>
            <MdAttachMoney className=" icon-card" />
            <span>{story?.budget}</span>
          </h5>
        </div>
      </div>
      <div className="btn sss">
        <button className="view">
          <Link
            className="link"
            to={`/storydetails/${story?._id}`}
            state={(story = { story })}
          >
            <a>View More</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default StoryFeatured;
