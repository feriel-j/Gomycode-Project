import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { participantDelete } from "../../JS/userSlice/meetupSlice";
import "./meetsupStyle/participantCard.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
const ParticipantCard = ({ part, meetId, ping, setping, meetup }) => {
  const user = useSelector((state) => state.user.user);
  console.log(meetup?.creator);
  console.log(user?._id);

  const dispatch = useDispatch();

  return (
    <div className="part_card">
      <div className="parti">
        <h4>
          {" "}
          {part?.name.charAt(0).toUpperCase()} <span> </span>
          {part?.lastname.charAt(0).toUpperCase()}{" "}
        </h4>
      </div>
      <h4>{part?.name}</h4>
      <h4>{part?.lastname}</h4>
      {meetup?.creator === user?._id ||
      user?.isAdmin ||
      part?._id === user?._id ? (
        <MdOutlineDeleteOutline
          className="part-btn1"
          onClick={() => {
            dispatch(participantDelete({ meetId: meetId, partId: part?._id }));
            setping(!ping);
          }}
        />
      ) : null}
    </div>
  );
};

export default ParticipantCard;
