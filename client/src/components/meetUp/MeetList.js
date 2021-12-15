import React from "react";
import MeetCard from "./MeetCard";

const MeetList = ({ meetups, ping, setping, filterdate, filterdest }) => {
  return (
    <div className="meetss">
      {meetups ? (
        meetups
          .filter(
            (meetup) =>
              meetup?.date.toLowerCase().includes(filterdate.toLowerCase()) &&
              meetup?.destination
                .toLowerCase()
                .includes(filterdest.toLocaleLowerCase())
          )
          .map((el) => <MeetCard meetup={el} ping={ping} setping={setping} />)
          .reverse()
      ) : (
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt=""
        />
      )}
    </div>
  );
};

export default MeetList;
