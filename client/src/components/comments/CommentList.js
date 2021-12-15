import React from "react";
import { useSelector } from "react-redux";
import CommentCard from "./CommentCard";

const CommentList = ({ comments, ping, setping, userid, postId, post }) => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="comment-list-container">
      {comments ? (
        comments.map((el) => (
          <CommentCard
            comment={el}
            ping={ping}
            setping={setping}
            postId={postId}
            userid={userid}
            post={post}
          />
        ))
      ) : (
        <img
          src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large?v=v2&px=999"
          alt=""
        />
      )}
    </div>
  );
};

export default CommentList;
