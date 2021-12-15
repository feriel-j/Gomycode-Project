import React, { useState } from "react";
import "./comments style/addcomments.css";
import "./comments style/modals.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { BiMessageRoundedEdit } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { commentDelete } from "../../JS/userSlice/postSlice";
import { useDispatch, useSelector } from "react-redux";

const CommentCard = ({
  comment,
  ping,
  setping,
  postId,
  userid,
  handleClose,
  post,
}) => {
  const user = useSelector((state) => state.user.user);
  const [openModal, setopenModal] = useState(false);
  const dispatch = useDispatch();
  const handleCommentdel = () => {
    dispatch(
      commentDelete({ postId: postId, userid: userid, commentId: comment?._id })
    );

    Swal.fire("Good job!", "comment removed!", "success");
  };
  return (
    <div className="comment-container">
      <div className="comment_user">
        <div className="user-comment-side">
          <img
            src="https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/high-tech/news/facebook-transformez-votre-photo-de-profil-en-emoticone-2677225/46484308-1-fre-FR/Facebook-transformez-votre-photo-de-profil-en-emoticone.jpg"
            alt=""
          />
          {/* <img src={`http://localhost:5000${comment?.user?.photo}`} alt="" /> */}
          <h4>{comment?.user.name} Foulen</h4>
        </div>
        <div className="comment_buttons">
          <button
            className="feri-btn"
            onClick={() => {
              setopenModal(!openModal);
            }}
          >
            ...
          </button>
          {openModal ? (
            <div className="btns-comments_container">
              {comment?.user === user?._id ||
              user?.isAdmin ||
              post?.creator?._id === user?._id ? (
                <div className="btn-comments">
                  <button>
                    <BiMessageRoundedEdit />
                  </button>
                  <button
                    onClick={() => {
                      handleCommentdel();
                      setping(!ping);
                    }}
                  >
                    <MdOutlineDeleteForever />
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <div className="comment_content">
        <p>{comment?.text}</p>
      </div>
      <div className="comment_footer"></div>
    </div>
  );
};

export default CommentCard;
