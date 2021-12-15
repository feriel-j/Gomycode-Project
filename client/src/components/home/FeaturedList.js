import React from "react";
import Carousel from "react-elastic-carousel";
import StoryCard from "../stories/StoryCard";
import StoryFeatured from "../stories/StoryFeatured";
const FeaturedList = ({ stories }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="featuredlist-container">
      <div className="lis">
        {stories ? (
          <Carousel breakPoints={breakPoints}>
            {stories
              .map((el) => <StoryFeatured story={el} />)
              .reverse()
              .slice(0, 9)}
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

export default FeaturedList;
