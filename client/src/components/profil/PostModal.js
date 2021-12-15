import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { postAdd } from "../../JS/userSlice/postSlice";

const PostModal = ({ closeModal, ping, setping }) => {
  const [post, setpost] = useState({
    title: "",
    content: "",
    postphoto: "",
    creator: "",
  });
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    setpost({ ...post, creator: user?._id });
  }, []);
  const dispatch = useDispatch();

  const handeleAdd = () => {
    dispatch(postAdd(post));
    setping(!ping);
    Swal.fire("Good job!", "user added!", "success");
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
    setpost({ ...post, postphoto: data });
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="modalmeetTitle">
          <h1>Add your post</h1>
        </div>
        <div className="modalmeetBody">
          <input
            type="text"
            placeholder="title.."
            onChange={(e) => {
              setpost({ ...post, title: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="content.."
            onChange={(e) => {
              setpost({ ...post, content: e.target.value });
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
              closeModal();
              handeleAdd();
            }}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
