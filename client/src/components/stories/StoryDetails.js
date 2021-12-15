import React, { useEffect, useState } from "react";
import "./storydetails.css";
import StoryCarousel from "./StoryCarousel";
import { MdOutlineLocationOn } from "react-icons/md";
import { SiSinglestore } from "react-icons/si";
import { GiDuration } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { storyget } from "../../JS/userSlice/storiesSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";

const StoryDetails = () => {
  const location = useLocation();
  const { story } = location.state;
  const params = useParams();
  const dispatch = useDispatch();
  const [selectImages, setselectImages] = useState([]);

  // const [selectImages, setselectImages] = useState([]);
  // const imageHandleChange = (e) => {
  //   // console.log(e.target.files);
  //   if (e.target.files) {
  //     const fileArray = Array.from(e.target.files).map((file) =>
  //       URL.createObjectURL(file)
  //     );
  //     console.log(fileArray);
  //     setselectImages((prevImages) => prevImages.concat(fileArray));
  //     Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
  //   }
  // };

  // const renderPhotos = (source) => {
  //   return source.map((photo) => {
  //     return <img className="story_pho" src={photo} key={photo} />;
  //   });
  // };
  useEffect(() => {
    dispatch(storyget(params.id));
  }, []);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/story/uploads",
      bodyFormData
    );
    console.log(data);

    setselectImages({ ...selectImages, photoStories: data });
  };

  return (
    <div className="story_details">
      <img className="quote-meet" src="/images/quote4.png" alt="quote" />
      {/* <h1>
        {" "}
        <SiSinglestore /> Story <SiSinglestore />
      </h1> */}
      <h2>
        <span>
          <MdOutlineLocationOn />
        </span>
        {story?.destination}
      </h2>
      <img
        className="story_pho"
        src={`http://localhost:5000${story?.cover}`}
        alt=""
      />

      <div className="album-photos">
        <img
          src="https://lh3.googleusercontent.com/proxy/Ra0h-juYnZ1gkBS3ay11pppNGoTJjlCez0PoE3lEtIg2S_EdyhAIfx_85gl1uDvEeebcen2bV-CQ0FqkMpAIwhprKtnPjcVxxNcD9SdKuzDQ2dz-2FgOUts5Qq-LHENzLt1-ve9zcGCUkKPiJHCoJWrca4U"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtO4boXr7U8tjbKv8r3MQ8YkQj6bYMekIHpg&usqp=CAU"
          alt=""
        />
        <img
          src="https://sahelvoyages.com.tn/images/voyages_organises/1477931147/image_1477931940.jpg"
          alt=""
        />
        <img
          src="https://www.pro-voyages.com/storage/app/uploads/public/5b5/6fc/5a4/5b56fc5a42277900728070.jpg"
          alt=""
        />
      </div>

      <div className="story_info">
        <div className="box-message">
          <h3>Story</h3>
          <p>{story?.message}</p>
        </div>
        <div className="album-photos">
          <img
            src="https://prod.bravebooking.net/clients/SV76920/media/photos/sejour/452/h_MARRAKECH__CASABLANCA__RABAT__TANGER__TETOUAN__CHECHFAOUEN__ASSILA.jpg"
            alt=""
          />
          <img
            src="https://img.freepik.com/free-photo/suspension-bridge-travel-nature-scenery-building_1417-264.jpg?size=626&ext=jpg"
            alt=""
          />
          <img
            src="https://voyage-onirique.com/wp-content/uploads/2021/06/nature-Thailande-scaled.jpg"
            alt=""
          />
          <img
            src="https://www.pro-voyages.com/storage/app/uploads/public/5b5/6fc/5a4/5b56fc5a42277900728070.jpg"
            alt=""
          />
        </div>

        <div className="story_info-s1">
          <div className="story_box">
            <h3>
              {" "}
              <span>
                <GiDuration />
              </span>{" "}
              Period:
            </h3>
            <h4>{story?.duration}</h4>
          </div>
          <div className="story_box">
            <h3>
              <span>
                <AiOutlineSafetyCertificate />
              </span>{" "}
              Category:
            </h3>
            <h4>{story?.category}</h4>
          </div>
          <div className="story_box">
            <h3>
              <span>
                <HiUserGroup />
              </span>{" "}
              Travellers:
            </h3>
            <h4>{story?.travellers}</h4>
          </div>
          <div className="story_box">
            <h3>
              <span>
                <GiReceiveMoney />
              </span>{" "}
              Budget :
            </h3>
            <h4>
              {story?.budget}{" "}
              <span>
                {" "}
                <MdAttachMoney />
              </span>
            </h4>
          </div>
        </div>
        <div className="album-photos">
          <img
            src="https://lh3.googleusercontent.com/proxy/Ra0h-juYnZ1gkBS3ay11pppNGoTJjlCez0PoE3lEtIg2S_EdyhAIfx_85gl1uDvEeebcen2bV-CQ0FqkMpAIwhprKtnPjcVxxNcD9SdKuzDQ2dz-2FgOUts5Qq-LHENzLt1-ve9zcGCUkKPiJHCoJWrca4U"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtO4boXr7U8tjbKv8r3MQ8YkQj6bYMekIHpg&usqp=CAU"
            alt=""
          />
          <img
            src="https://sahelvoyages.com.tn/images/voyages_organises/1477931147/image_1477931940.jpg"
            alt=""
          />
          <img
            src="https://www.pro-voyages.com/storage/app/uploads/public/5b5/6fc/5a4/5b56fc5a42277900728070.jpg"
            alt=""
          />
        </div>
        <div className="story_info-s2">
          <div className="story_box2">
            <h3>Accomodation</h3>
            <p>{story?.accomodation}</p>
          </div>
          <div className="story_box2">
            <h3>Restauration</h3>
            <p>{story?.food}</p>
          </div>
          <div className="story_box2">
            <h3>Transport</h3>
            <p>{story?.transport}</p>
          </div>
        </div>
        <div className="album-photos">
          <img
            src="https://prod.bravebooking.net/clients/SV76920/media/photos/sejour/452/h_MARRAKECH__CASABLANCA__RABAT__TANGER__TETOUAN__CHECHFAOUEN__ASSILA.jpg"
            alt=""
          />
          <img
            src="https://img.freepik.com/free-photo/suspension-bridge-travel-nature-scenery-building_1417-264.jpg?size=626&ext=jpg"
            alt=""
          />
          <img
            src="https://voyage-onirique.com/wp-content/uploads/2021/06/nature-Thailande-scaled.jpg"
            alt=""
          />
          <img
            src="https://www.pro-voyages.com/storage/app/uploads/public/5b5/6fc/5a4/5b56fc5a42277900728070.jpg"
            alt=""
          />
        </div>
      </div>

      <button className="back-btn">
        <Link className="link l1" to="/stories">
          Back{" "}
        </Link>
      </button>
      {/* <div className="btns-story">
        <FcLike />
        <FaRegComment />
      </div> */}
    </div>
  );
};

export default StoryDetails;
