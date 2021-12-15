import React, { useState } from "react";
import "./PostCard.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useDispatch, useSelector } from "react-redux";
import { addLike, deleteLike, postDelete } from "../../JS/userSlice/postSlice";
import PostEdit from "./PostEdit";
import { MdDeleteForever } from "react-icons/md";
import { GoComment } from "react-icons/go";
import LikeButton from "./LikeButton";
import CommentList from "../comments/CommentList";
import AddComment from "../comments/AddComment";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const PostCard = ({ ping, setping, post }) => {
  const user = useSelector((state) => state.user.user);
  const [isLike, setIsLike] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [openModal2, setopenModal2] = useState(false);

  const handleLike = () => {
    setIsLike(true);
  };
  const handleUnLike = () => {
    setIsLike(false);
  };
  const dispatch = useDispatch();
  const handleAddLike = () => {
    dispatch(addLike({ userid: user?._id, post: post, postId: post?._id }));
    setping(!ping);
  };
  const handledelLike = () => {
    dispatch(deleteLike({ userid: user?._id, postId: post?._id }));
  };
  return (
    <div className="post_card">
      {post?.creator?._id === user?._id || user?.isAdmin ? (
        <div className="btn-posts">
          <button
            onClick={() => {
              dispatch(postDelete(post?._id));
              Swal.fire("Good job!", "post removed!", "success");
            }}
          >
            <MdDeleteForever />
          </button>

          <PostEdit id={post?._id} ping={ping} setping={setping} />
        </div>
      ) : null}

      <div className="user_section">
        <img src={`http://localhost:5000${post?.creator?.photo}`} alt="" />
        <h4>
          {post?.creator?.name.charAt(0).toUpperCase() +
            post?.creator?.name.slice(1)}
        </h4>
      </div>
      <Zoom wrapStyle={{ width: "100%" }} zoomMargin={10}>
        <div>
          <div className="card_body">
            <h4>
              {post?.title.charAt(0).toUpperCase() + post?.title?.slice(1)}
            </h4>
            <p>
              {post?.content.length > 200
                ? post?.content.slice(0, 200) + " ..."
                : post?.content.charAt(0).toUpperCase() +
                  post?.content?.slice(1)}
            </p>

            <img
              className="post-img"
              alt=""
              src={`http://localhost:5000${post?.postphoto}`}
            />
          </div>
        </div>
      </Zoom>
      <div className="card_footer num">
        <button className="like">{post?.likes?.length} likes</button>
        <button
          className="cmnt"
          onClick={() => {
            setopenModal(!openModal);
          }}
        >
          {post?.comments?.length} comments
        </button>
      </div>

      <div className="card_footer">
        <LikeButton
          isLike={isLike}
          handleLike={handleLike}
          handleUnLike={handleUnLike}
          handleAddLike={handleAddLike}
          handledelLike={handledelLike}
        />

        <button
          onClick={() => {
            setopenModal2(!openModal2);
          }}
        >
          <GoComment />
        </button>
      </div>
      {openModal2 ? (
        <AddComment
          postId={post?._id}
          userid={user?._id}
          handleClose={setopenModal2}
          ping={ping}
          setping={setping}
        />
      ) : null}
      {openModal ? (
        <CommentList
          comments={post?.comments}
          ping={ping}
          setping={setping}
          postId={post?._id}
          userid={user?._id}
          post={post}
          handleClose={setopenModal}
        />
      ) : null}
    </div>
  );
};

export default PostCard;
