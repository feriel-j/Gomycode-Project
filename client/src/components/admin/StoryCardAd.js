import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { storyDelete } from "../../JS/userSlice/storiesSlice";
const StoryCardAd = ({ story, ping, setping }) => {
  const dispatch = useDispatch();
  const handleDelStory = () => {
    dispatch(storyDelete(story?._id));
    setping(!ping);
  };
  return (
    <div className="conatiner-admin st">
      <h5>{story._id}</h5>
      <h5 className="creator">{story?.creator?.name} </h5>
      <h5 className="creator ">{story?.destination}</h5>

      <div className="user_btns st-bt ">
        <button onClick={handleDelStory}>
          <MdOutlineDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default StoryCardAd;
