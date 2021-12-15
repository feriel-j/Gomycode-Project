import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StoryCardAd from "./StoryCardAd";
import { MdOutlineDashboard } from "react-icons/md";

const StoriesList = (ping, setping) => {
  const stories = useSelector((state) => state.story.story);
  return (
    <div className="admin_dash">
      <div className="dash_sec1">
        <Link className="link lk" to="/dashbord">
          <h3>
            <MdOutlineDashboard /> Dashbord
          </h3>
        </Link>
        <div className="boutonssss">
          <button>
            <Link className="link lk" to="/users">
              Users
            </Link>
          </button>
          <button>
            {" "}
            <Link className="link lk" to="/storieslist">
              Stories
            </Link>
          </button>
          <button>
            <Link className="link lk" to="/postsList">
              Posts
            </Link>
          </button>
          <button>
            <Link className="link lk" to="/meetupslist">
              Meet Ups
            </Link>
          </button>
        </div>
      </div>
      <div className="dash_sec2">
        <div className="conatiner-admin dash-t st">
          <h5>Story ID</h5>
          <h5 className="creator">Creator </h5>
          <h5 className="creator">Destination</h5>

          <div className="user_btns st-bt">
            <button>
              <h5> Delete</h5>
            </button>
          </div>
        </div>
        {stories
          ?.map((el) => (
            <StoryCardAd story={el} ping={ping} setping={setping} />
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default StoriesList;
