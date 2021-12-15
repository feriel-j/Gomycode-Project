import React from "react";
import "./StyleProfile/profileList.css";
import Carousel from "react-elastic-carousel";

import StoryCard from "../stories/StoryCard";

const ProfileList = ({ stories }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="storylist-container">
      <div className="list-sories">
        {stories ? (
          <Carousel breakPoints={breakPoints}>
            {stories.map((el) => (
              <StoryCard story={el} />
            ))}
          </Carousel>
        ) : (
          <img
            src="https://images.assetsdelivery.com/compings_v2/smile3377/smile33771903/smile3377190300095.jpghttps://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gifhttps://cdn.shopify.com/s/files/1/1591/9555/files/loading-buffering.gif?v=1631732058"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default ProfileList;
