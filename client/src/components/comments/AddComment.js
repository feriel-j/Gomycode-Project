import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentAdd } from "../../JS/userSlice/postSlice";
import "./comments style/addcomments.css";
import { MdFileDownloadDone } from "react-icons/md";
const AddComment = ({ postId, userid, handleClose, ping, setping }) => {
  console.log(postId, userid);
  const dispatch = useDispatch();
  const [addcomment, setaddcomment] = useState({});

  const handleComment = () => {
    dispatch(commentAdd({ postId: postId, userid: userid, post: addcomment }));
  };

  return (
    <div className="addcomment_container">
      <input
        type="text"
        placeholder="what's up baby !"
        // onChange={(e) => {
        //   setaddcomment(e.target.value);
        // }}
        onChange={(e) => {
          setaddcomment({ ...addcomment, text: e.target.value });
        }}
      />

      <MdFileDownloadDone
        className="cmt-i"
        onClick={() => {
          handleClose();
          handleComment();
          setping(!ping);
        }}
      />
    </div>
  );
};

export default AddComment;
