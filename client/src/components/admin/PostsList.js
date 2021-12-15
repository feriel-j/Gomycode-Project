import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostCardAd from "./PostCardAd";
import { MdOutlineDashboard } from "react-icons/md";

const PostsList = (ping, setping) => {
  const posts = useSelector((state) => state.post.post);
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
        <div className="conatiner-admin dash-t">
          <h5>Post ID</h5>
          <h5 className="creator po">Creator </h5>
          <h5 className="creator ttle">Title</h5>

          <div className="user_btns st-bt stb">
            <h5>Delete</h5>
          </div>
        </div>
        {posts ? (
          posts
            ?.map((el) => (
              <PostCardAd post={el} ping={ping} setping={setping} />
            ))
            .reverse()
        ) : (
          <img
            src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large?v=v2&px=999"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default PostsList;
