import axios from "axios";
import React, { useState } from "react";
import { MdCreditScore } from "react-icons/md";
import { useDispatch } from "react-redux";
import { meetUpEdit } from "../../JS/userSlice/meetupSlice";

const MeetEdit = ({ id, ping, setping }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const [editedmeet, seteditedmeet] = useState({});

  const handleEditMeet = () => {
    dispatch(meetUpEdit({ id: id, meet: editedmeet }));
    setping(!ping);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/story/uploads",
      bodyFormData
    );
    console.log(data);
    seteditedmeet({ ...editedmeet, meetImg: data });
  };

  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <MdCreditScore />
      </button>
      {openModal && (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button onClick={() => setOpenModal(false)}>X</button>
            </div>
            <div className="modalmeetTitle">
              <h1>Edit your post</h1>
            </div>
            <div className="modalmeetBody">
              <input
                type="date"
                placeholder="date .."
                onChange={(e) => {
                  seteditedmeet({ ...editedmeet, date: e.target.value });
                }}
              />
              <input
                type="time"
                placeholder="time.."
                onChange={(e) => {
                  seteditedmeet({ ...editedmeet, time: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="destination.."
                onChange={(e) => {
                  seteditedmeet({
                    ...editedmeet,
                    destination: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="organiser.."
                onChange={(e) => {
                  seteditedmeet({
                    ...editedmeet,
                    organiser: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="content.."
                onChange={(e) => {
                  seteditedmeet({ ...editedmeet, content: e.target.value });
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
              <button id="cancelBtn" onClick={() => setOpenModal(false)}>
                Cancel
              </button>
              <button
                onClick={() => {
                  setOpenModal();
                  handleEditMeet();
                }}
              >
                save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetEdit;
