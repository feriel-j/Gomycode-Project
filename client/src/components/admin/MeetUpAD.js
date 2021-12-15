import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { meetUpDelete } from "../../JS/userSlice/meetupSlice";
export const MeetUpAD = ({ meetup, ping, setping }) => {
  const dispatch = useDispatch();
  const handleDelMeet = () => {
    dispatch(meetUpDelete(meetup?._id));
    setping(!ping);
  };
  return (
    <div className="conatiner-admin">
      <h5>{meetup._id}</h5>
      <h5 className="creator">{meetup?.organiser} </h5>
      <h5 className="creator">{meetup?.destination}</h5>
      <h5 className="creator">{meetup?.date}</h5>
      <h5 className="creator">{meetup?.time}</h5>

      <div className="user_btns st-bt">
        <button onClick={handleDelMeet}>
          <MdOutlineDeleteForever />
        </button>
      </div>
    </div>
  );
};
