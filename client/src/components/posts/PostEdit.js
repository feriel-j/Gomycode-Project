import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdate } from "../../JS/userSlice/postSlice";
import { RiEditFill } from "react-icons/ri";
const PostEdit = ({ id, ping, setping }) => {
  const [openModal, setOpenModal] = useState(false);
  const [postedited, setpostedited] = useState({});

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/story/uploads",
      bodyFormData
    );
    console.log(data);
    setpostedited({ ...postedited, postphoto: data });
  };

  const dispatch = useDispatch();

  const handlepostEdit = () => {
    dispatch(postUpdate({ id: id, post: postedited }));
    setping(!ping);
  };

  return (
    <div>
      <div>
        <button
          className="btnpost"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <RiEditFill />
        </button>
        {openModal && (
          <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn ">
                <button onClick={() => setOpenModal(false)}>X</button>
              </div>
              <div className="modalmeetTitle">
                <h1>Edit your post</h1>
              </div>
              <div className="modalmeetBody">
                <input
                  type="text"
                  placeholder="title.."
                  onChange={(e) => {
                    setpostedited({ ...postedited, title: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="content.."
                  onChange={(e) => {
                    setpostedited({ ...postedited, content: e.target.value });
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
                    handlepostEdit();
                    setOpenModal(false);
                  }}
                >
                  save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostEdit;
