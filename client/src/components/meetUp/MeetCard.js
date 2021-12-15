import React, { useEffect } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import "./meetsupStyle/meetCard.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { meetget, meetUpDelete } from "../../JS/userSlice/meetupSlice";
import { useDispatch, useSelector } from "react-redux";
import MeetEdit from "./MeetEdit";

const MeetCard = ({ meetup, ping, setping }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(meetget());
  }, []);

  return (
    <div className="meet-container">
      <div className="meetup_card">
        {meetup?.creator === user?._id ? (
          <div className="meet_btn">
            <MeetEdit ping={ping} setping={setping} id={meetup?._id} />

            <button
              onClick={() => {
                dispatch(meetUpDelete(meetup.meetup?._id));
                setping(!ping);
              }}
            >
              {" "}
              <MdDeleteSweep />
            </button>
          </div>
        ) : null}

        <div className="meet_header">
          <div className="meet_info">
            <h3>
              <span>
                <MdOutlineDateRange />
              </span>
              {meetup?.date} ,{meetup?.time}
            </h3>
            <h2>
              <span>
                <MdOutlineLocationOn />
              </span>
              {meetup?.destination.charAt(0).toUpperCase() +
                meetup?.destination.slice(1)}
            </h2>
            <h4>
              <span>
                <BsPersonLinesFill />
              </span>
              {meetup?.organiser.charAt(0).toUpperCase() +
                meetup?.organiser.slice(1)}
            </h4>
          </div>

          <img src={`http://localhost:5000${meetup?.meetImg}`} alt="" />
        </div>
        <div className="meet-content">
          <p>{meetup?.content.slice(0, 100) + "..."}</p>
        </div>
        <div className="meet-footer">
          <p>
            <span>
              <AiOutlineUsergroupDelete />
            </span>
            {meetup?.participant?.length} Participants
          </p>

          <div className="participate">
            {/* <p>
              <span>
                <BiComment />
              </span>
              1
            </p> */}
            <button>
              <Link
                className="link"
                to={`/meetdetails/${meetup?._id}`}
                state={(meetup = { meetup })}
              >
                Discover
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetCard;
