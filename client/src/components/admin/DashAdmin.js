import React from "react";
import "./dashStyle/dashadmin.css";
import { MdOutlineDashboard } from "react-icons/md";
import { GiPentarrowsTornado } from "react-icons/gi";
import { GoCommentDiscussion } from "react-icons/go";
import { FaMeetup } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const DashAdmin = ({ posts, stories, meetups, ping, setping }) => {
  const users = useSelector((state) => state.user.users);
  return (
    <div className="admin_dash">
      <div className="dash_sec1">
        <h3>
          <MdOutlineDashboard /> Dashbord
        </h3>
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
      <div className="dashh_sec2">
        <div className="box-one">
          <Link className="links" to="/users">
            <FaUsers className="i" />
            <h2> {users?.length}</h2>
            <h2>Users</h2>
          </Link>
        </div>

        <div className="box-one">
          <Link className="links" to="/storieslist">
            <GiPentarrowsTornado className="i" />
            <h2> {stories?.length}</h2>
            <h2>Stories</h2>
          </Link>
        </div>
        <div className="box-one">
          <Link className="links" to="/postsList">
            <GoCommentDiscussion className="i" />
            <h2> {posts?.length} </h2>
            <h2>Posts</h2>
          </Link>
        </div>
        <div className="box-one">
          <Link className="links" to="/meetupslist">
            <FaMeetup className="i" />
            <h2> {meetups?.length} </h2>
            <h2>Meet ups</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashAdmin;
