import React, { useState } from "react";
import "./meetsupStyle/meets.css";
import { Link } from "react-router-dom";
import MeetList from "./MeetList";
import MeetupModal from "./MeetupModal";
import SearchMeetup from "../search/SearchMeetup";
import { userCurrent } from "../../JS/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Meets = ({ meetups, ping, setping }) => {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
  const [filterdate, setfilterdate] = useState("");
  const [filterdest, setfilterdest] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [meet, setmeet] = useState({
    date: "",
    time: "",
    destination: "",
    organiser: "",
    meetImg: "",
    content: "",
  });
  return (
    <div className="meet_page">
      <img className="quote-meet" src="/images/meetquote.png" alt="quote" />
      <img
        className="meet-img"
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        alt="meet"
      />
      <h1>Meet up</h1>
      <SearchMeetup
        setfilterdate={setfilterdate}
        setfilterdest={setfilterdest}
      />
      {openModal && (
        <MeetupModal
          closeModal={setOpenModal}
          meet={meet}
          setmeet={setmeet}
          ping={ping}
          setping={setping}
        />
      )}
      <div className="meet_content">
        <div className="sidebar-meet">
          {isAuth ? (
            <button
              className="host-meet"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Plan a Meet Up
            </button>
          ) : (
            <Link to="/login">
              {" "}
              <button className="host-meet">Login to Plan a Meet Up</button>
            </Link>
          )}
          <h4>About Meet ups</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            perferendis. Voluptas ducimus cum, quae mollitia rerum numquam
            libero neque accusamus quidem. Maxime nam accusantium repellat
            facere! Debitis dolores cumque ipsa! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis, perferendis. Voluptas ducimus
            cum, quae mollitia rerum numquam libero neque accusamus quidem.
            Maxime nam accusantium repellat facere! Debitis dolores cumque ipsa!
          </p>
          <img
            src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=916&q=80"
            alt=""
          />
          <div className="social_media">
            <a href="https://www.facebook.com/ange.f.tunisie/">
              <img src="/icons/facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/feri878/?hl=fr">
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/feriel-jabri/">
              <img src="/icons/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>

        <MeetList
          meetups={meetups}
          ping={ping}
          setping={setping}
          filterdate={filterdate}
          filterdest={filterdest}
        />
      </div>

      <div className="btn-bar">
        <Link className="link" to="/">
          <button> Home</button>
        </Link>
        <Link className="link" to="/meet">
          <button>About</button>
        </Link>
        <Link className="link" to="/stories">
          <button>Stories</button>
        </Link>
        <Link className="link" to="/posts">
          <button>Posts</button>
        </Link>

        <Link className="link" to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Meets;
