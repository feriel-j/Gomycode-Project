import React from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
const LikeButton = ({
  isLike,
  handleLike,
  handleUnLike,
  handleAddLike,
  handledelLike,
}) => {
  return (
    <div>
      {isLike ? (
        <BiDislike
          className="feri-like"
          onClick={() => {
            handleUnLike();
            handledelLike();
          }}
        />
      ) : (
        <BiLike
          className="feri-unlike"
          onClick={() => {
            handleLike();
            handleAddLike();
          }}
        />
      )}
    </div>
  );
};

export default LikeButton;
