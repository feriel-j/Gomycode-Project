import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { meetget, participantEdit } from "../../JS/userSlice/meetupSlice";
import PartList from "./PartList";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import "react-medium-image-zoom/dist/styles.css";
import { Link } from "react-router-dom";
import "./meetsupStyle/meetDetails.css";
import axios from "axios";

const MeetDetails = ({ ping, setping }) => {
  const [participant, setparticipant] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const [def, setdef] = useState(false);
  const [show, setshow] = useState(false);
  const location = useLocation();
  const { meetup } = location.state;
  const params = useParams();
  const dispatch = useDispatch();
  const handlepart = () => {
    dispatch(participantEdit({ id: meetup?._id, part: participant }));
    setshow(!show);
    setping(!ping);
  };

  return (
    <div className="details_background">
      <div className="meetup_container">
        <div className="meetup_info">
          <div className="header_details">
            <h2>
              <MdOutlineLocationOn />
              {meetup?.destination}
            </h2>
          </div>

          <img src={`http://localhost:5000${meetup?.meetImg}`} alt="" />

          <div className="information-meet">
            <h4>
              <span>
                <MdOutlineDateRange />
              </span>
              {"   "}
              {meetup?.date} , {meetup?.time}
            </h4>
            <h5> Hosted by : {meetup?.organiser}</h5>
            <h2>
              Program <span> </span>
            </h2>
            <p>{meetup?.content}</p>
          </div>

          {/* <div className="comments">
          <h2>Comments</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            officiis excepturi cumque quod, sed totam doloribus iste tenetur
            repellendus quo enim eveniet sequi debitis quos ea! Laborum
            reiciendis aspernatur ducimus?
          </p>
        </div> */}
        </div>
      </div>
      <div className="particpate_btn">
        <button
          className="part-btn"
          onClick={() => {
            setshow(!show);
          }}
        >
          Participate
        </button>
        {show ? (
          <form method="post" className="form_particip">
            <h3>Fill the form</h3>
            <div className="text_fieldd">
              <input
                type="text"
                required
                onChange={(e) => {
                  setparticipant({ ...participant, name: e.target.value });
                }}
              />
              <span></span>
              <label>Name</label>
            </div>
            <div className="text_fieldd">
              <input
                type="text"
                required
                className="message-contact"
                onChange={(e) => {
                  setparticipant({ ...participant, lastname: e.target.value });
                }}
              />
              <span></span>

              <label>Lastname</label>
            </div>
            <div className="text_fieldd">
              <input
                type="email"
                required
                onChange={(e) => {
                  setparticipant({ ...participant, email: e.target.value });
                }}
              />
              <label>Email</label>
              <span></span>
            </div>

            <button
              className="confirm-input"
              onClick={() => {
                handlepart();
                setdef(!def);
                setping(!ping);
              }}
            >
              Confirm{" "}
            </button>
          </form>
        ) : null}
      </div>
      <div className="participants">
        <h2>
          {" "}
          Participants ({meetup?.participant?.length}) <span> </span>
        </h2>
        <p></p>
        <div className="listparticip">
          <PartList
            meetup={meetup}
            parts={meetup?.participant}
            meetId={meetup?._id}
            ping={ping}
            setping={setping}
          />
        </div>
      </div>
      <Link className="link backk " to="/meet">
        Back{" "}
      </Link>
    </div>
  );
};

export default MeetDetails;
