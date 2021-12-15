import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaUserEdit } from "react-icons/fa";
import { storyUpdated } from "../../JS/userSlice/storiesSlice";
import "./storyModal.css";
import axios from "axios";
import { postGet } from "../../JS/userSlice/postSlice";

const StoryModal = ({ story, ping, setping }) => {
  console.log(story.story);
  const dispatch = useDispatch();
  const [storyedited, setstoryedited] = useState({});

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/story/uploads",
      bodyFormData
    );
    console.log(data);
    setstoryedited({ ...storyedited, cover: data });
  };

  const handleEditstory = () => {
    dispatch(storyUpdated({ id: story?.story?._id, story: storyedited }));
    setping(!ping);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <FaUserEdit />
      </button>

      {openModal ? (
        <div className="modalBackgroundstory">
          <div className="modalContainerstory">
            <div className="titleCloseBtn">
              <button onClick={() => setOpenModal()}>X</button>
            </div>
            <div className="modalmeetTitle">
              <h1>Edit your Story</h1>
            </div>
            <div className="modalmeetBody">
              <input
                type="file"
                name="file"
                placeholder="cover"
                onChange={uploadFileHandler}
              />
              <input
                type="text"
                placeholder="enter your distination"
                onChange={(e) => {
                  setstoryedited({
                    ...storyedited,
                    destination: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="enter your duration"
                onChange={(e) => {
                  setstoryedited({ ...storyedited, duration: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="enter your category"
                onChange={(e) => {
                  setstoryedited({ ...storyedited, category: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="enter your accomodation"
                onChange={(e) => {
                  setstoryedited({
                    ...storyedited,
                    accomodation: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="enter your food"
                onChange={(e) => {
                  setstoryedited({ ...storyedited, food: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="enter your Travellers"
                onChange={(e) => {
                  setstoryedited({
                    ...storyedited,
                    travellers: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="enter your transport"
                onChange={(e) => {
                  setstoryedited({ ...storyedited, transport: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="enter your budget"
                onChange={(e) => {
                  setstoryedited({ ...storyedited, budget: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="enter your message "
                onChange={(e) => {
                  setstoryedited({ ...storyedited, message: e.target.value });
                }}
              />
            </div>
            <div className="modalmeetFooterstory">
              <button id="cancelBtn" onClick={() => setOpenModal(false)}>
                Cancel
              </button>
              <button
                onClick={() => {
                  setOpenModal();
                  handleEditstory();
                }}
              >
                save
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StoryModal;
