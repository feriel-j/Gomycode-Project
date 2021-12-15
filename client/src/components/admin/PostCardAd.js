import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { postDelete } from "../../JS/userSlice/postSlice";

const PostCardAd = ({ post, ping, setping }) => {
  const dispatch = useDispatch();
  const handleDelPost = () => {
    dispatch(postDelete(post?._id));
    setping(!ping);
  };
  return (
    <div className="conatiner-admin">
      <h5>{post._id}</h5>
      <h5 className="creator">{post?.creator?.name} </h5>
      <h5 className="creator ttle">{post?.title}</h5>
      <div className="user_btns st-bt stb">
        <button onClick={handleDelPost}>
          <MdOutlineDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default PostCardAd;
