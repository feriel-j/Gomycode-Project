import React from "react";
import { useSelector } from "react-redux";
import { MeetUpAD } from "./MeetUpAD";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const MeetUpsList = (ping, setping) => {
  const meetups = useSelector((state) => state.meet.meet);
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
          <h5>Meet Up ID</h5>
          <h5 className="creator"> Organiser </h5>
          <h5 className="creator"> Destination</h5>
          <h5 className="creator"> Date</h5>
          <h5 className="creator"> Time</h5>

          <div className="user_btns st-bt">
            <h5>Delete</h5>
          </div>
        </div>
        {meetups ? (
          meetups
            .map((el) => <MeetUpAD meetup={el} ping={ping} setping={setping} />)
            .reverse()
        ) : (
          <img
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default MeetUpsList;
