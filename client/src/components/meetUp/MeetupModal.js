import React, { useEffect, useState } from "react";
import "./meetsupStyle/meetupModal.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { meetAdd } from "../../JS/userSlice/meetupSlice";
import axios from "axios";

function MeetupModal({ closeModal, meet, setmeet, ping, setping }) {
  const dispatch = useDispatch();

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/story/uploads",
      bodyFormData
    );
    console.log(data);
    setmeet({ ...meet, meetImg: data });
  };
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    setmeet({ ...meet, creator: user?._id });
  }, []);

  const handleMeetAdd = () => {
    dispatch(meetAdd(meet));
    Swal.fire("Good job!", "user added!", "success");
    setping(!ping);
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="modalmeetTitle">
          <h1>Plan a Meet Up</h1>
        </div>
        <div className="modalmeetBody">
          <input
            type="date"
            placeholder="date .."
            onChange={(e) => {
              setmeet({ ...meet, date: e.target.value });
            }}
          />
          <input
            type="time"
            placeholder="time.."
            onChange={(e) => {
              setmeet({ ...meet, time: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="destination.."
            onChange={(e) => {
              setmeet({ ...meet, destination: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="organiser.."
            onChange={(e) => {
              setmeet({ ...meet, organiser: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="content.."
            onChange={(e) => {
              setmeet({ ...meet, content: e.target.value });
            }}
          />
          <input
            type="file"
            name="file"
            placeholder="photo"
            onChange={uploadFileHandler}
          />
        </div>
        <div className="modalmeetFooter">
          <button id="cancelBtn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button
            onClick={() => {
              handleMeetAdd();
              closeModal();
            }}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetupModal;
