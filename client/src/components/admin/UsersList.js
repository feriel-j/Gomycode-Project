import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";

import UserOne from "./UserOne";

const UsersList = ({ ping, setping }) => {
  const users = useSelector((state) => state.user.users);
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
          <h5 className="mail"> User ID</h5>
          <h5>Name </h5>
          <h5>Lastname</h5>
          <h5 className="mail">Email</h5>
          <h5>Role</h5>

          <div className="user_btns B_U">
            <h5 className="role_ur">Change</h5>
            <h5>Delete</h5>
          </div>
        </div>

        {users ? (
          users?.map((el) => (
            <UserOne user={el} ping={ping} setping={setping} />
          ))
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

export default UsersList;
