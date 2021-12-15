import React from "react";
import "./meetsupStyle/participantList.css";
import ParticipantCard from "./ParticipantCard";

const PartList = ({ parts, meetId, ping, setping, meetup }) => {
  return (
    <div className="part-list">
      {parts ? (
        parts.map((el) => (
          <ParticipantCard
            meetup={meetup}
            part={el}
            meetId={meetId}
            ping={ping}
            setping={setping}
          />
        ))
      ) : (
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt=""
        />
      )}
    </div>
  );
};

export default PartList;
