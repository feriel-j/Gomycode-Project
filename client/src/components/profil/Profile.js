import React from "react";
import "./StyleProfile/profile.css";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

import ProfileList from "./ProfileList.js";
import { SiInformatica } from "react-icons/si";
import { FaUserEdit } from "react-icons/fa";
import ProfileContent from "./ProfileContent";
import { Link } from "react-router-dom";
function Profile({ stories, posts, ping, setping }) {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="profil">
      <div className="profile-title">
        <h1>
          Hello <span> {user?.name.toUpperCase()}!</span> Let's live it Up !!
        </h1>
      </div>
      <div className="profile_side">
        <div className="profile-informations">
          <h3>
            <span>
              <SiInformatica />
            </span>
            Personal Information
          </h3>
          <img
            src={`http://localhost:5000${user?.photo}`}
            alt=""
            width="200px"
          />

          <h4>
            {user?.name.charAt(0).toUpperCase() + user?.name.slice(1)}{" "}
            <span>
              {user?.lastname.charAt(0).toUpperCase() + user?.lastname.slice(1)}
            </span>
          </h4>

          <h5>About me </h5>
          <br />
          <p>
            {/* {user?.about?} */}
            elit. Distinctio doloremque soluta sequi consequuntur maiores
            repellat accusamus deleniti.
          </p>

          <div className="profil_info">
            <div className="info">
              <label>Phone : </label>
              <input type="text" value={user?.phone} />
            </div>
            <div className="info">
              <label>City : </label>
              <input
                type="text"
                value={
                  user?.city?.charAt(0).toUpperCase() + user?.city?.slice(1)
                }
              />
            </div>
            <div className="info">
              <label>Country :</label>
              <input
                type="text"
                value={
                  user?.country?.charAt(0).toUpperCase() +
                  user?.country?.slice(1)
                }
              />
            </div>
            <div className="info">
              <label>Last Destination : </label>
              <input
                type="text"
                value={
                  user?.lastdestination?.charAt(0).toUpperCase() +
                  user?.lastdestination?.slice(1)
                }
              />
            </div>
            <div className="info">
              <label>Dream Destination:</label>
              <input
                type="text"
                value={
                  user?.dreamdestination?.charAt(0).toUpperCase() +
                  user?.dreamdestination?.slice(1)
                }
              />
            </div>
            <div className="info">
              <label>Gender : </label>
              <input
                type="text"
                value={
                  user?.gender?.charAt(0).toUpperCase() + user?.gender?.slice(1)
                }
              />
            </div>
          </div>
          <button className="editBtn">
            <UpdateProfile
              id={user?._id}
              user={user}
              ping={ping}
              setping={setping}
            />
          </button>
        </div>
        <div className="profil-content">
          <ProfileContent
            stories={stories}
            posts={posts}
            ping={ping}
            setping={setping}
          />
        </div>
      </div>
      <div className="btn-bar prof">
        <Link className="link" to="/">
          <button> Home</button>
        </Link>
        <Link className="link" to="/stories">
          <button>Stories</button>
        </Link>
        <Link className="link" to="/posts">
          <button>Posts</button>
        </Link>
        <Link className="link" to="/meet">
          <button>Meet Up</button>
        </Link>
        <Link className="link" to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
