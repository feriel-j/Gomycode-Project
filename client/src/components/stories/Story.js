import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./story.css";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { storyPost } from "../../JS/userSlice/storiesSlice";
import { useDispatch, useSelector } from "react-redux";

const Story = ({ ping, setping }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const [story, setstory] = useState({
    cover: "",
    photoStories: "",
    destination: "",
    duration: "",
    category: "",
    accomodation: "",
    food: "",
    travellers: "",
    transport: "",
    budget: "",
    message: "",
    creator: "",
  });
  useEffect(() => {
    setstory({ ...story, creator: user?._id });
  }, [ping]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/story/uploads",
      bodyFormData
    );
    console.log(data);
    setstory({ ...story, cover: data });
  };
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(storyPost(story));
    Swal.fire("Good job!", "story added!", "success");
    setping(!ping);
  };
  return (
    <div className="story-page">
      <div className="story-header">
        <h1>Lets Trip to magical Word</h1>
      </div>
      <div className="story-body">
        <img className="quote" src="/images/quote.png" alt="quote" />

        <div className="sotory-description">
          <div className="first-part">
            <div className="album">
              <h3>Add Photos</h3>
              <input
                type="file"
                name="file"
                placeholder="cover"
                onChange={uploadFileHandler}
              />
            </div>
            <div className="add-message">
              <h3>Tell us your Story</h3>
              <textarea
                Name="story"
                id=""
                cols="80"
                rows="18"
                onChange={(e) => {
                  setstory({ ...story, message: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="album">
              <h3>Add Photos</h3>
              <input
                type="file"
                multiple
                name="file"
                placeholder="cover"
                onChange={uploadFileHandler}
              />
            </div>
          </div>
          <div className="second-part">
            <div className="details destination">
              <img src="" alt="" />
              <h6>Destination</h6>
              <input
                type="text"
                placeholder="enter your destination"
                onChange={(e) => {
                  setstory({ ...story, destination: e.target.value });
                }}
              />
            </div>
            <div className="details duration">
              <h6>Period</h6>
              <div className="periodee">
                <div className="period_zone">
                  <input
                    type="text"
                    onChange={(e) => {
                      setstory({ ...story, duration: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="details category">
              <img src="" alt="" />
              <h6>Category</h6>
              <input
                type="text"
                onChange={(e) => {
                  setstory({ ...story, category: e.target.value });
                }}
              />
              {/* <select name="cars" id="cars">
                <option value="solo">Solo</option>
                <option value="group">Group</option>
              </select> */}
            </div>
          </div>
          <div className="third-part">
            <div className="details accomodation">
              <img src="" alt="" />
              <h6>Accomodation</h6>
              <textarea
                Name="story"
                id=""
                cols="40"
                rows="5"
                onChange={(e) => {
                  setstory({ ...story, accomodation: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="details restauration">
              <img src="" alt="" />
              <h6>Restauration</h6>
              <textarea
                Name="story"
                id=""
                cols="40"
                rows="5"
                onChange={(e) => {
                  setstory({ ...story, food: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="details Transport">
              <img src="" alt="" />
              <h6>Transport</h6>
              <textarea
                Name="story"
                id=""
                cols="40"
                rows="5"
                onChange={(e) => {
                  setstory({ ...story, transport: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
          <div className="last-part">
            <div className="details travellers">
              <img src="" alt="" />
              <h6>Travellers</h6>
              <input
                type="text"
                onChange={(e) => {
                  setstory({ ...story, travellers: e.target.value });
                }}
              />
            </div>
            <div className="details budget">
              <img src="" alt="" />
              <h6>Budget</h6>
              <input
                type="text"
                onChange={(e) => {
                  setstory({ ...story, budget: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="buttooons">
        <button
          onClick={() => {
            navigate("/profile");
          }}
        >
          close
        </button>
        <button
          onClick={() => {
            handleAdd();
            navigate("/profile");
          }}
        >
          save change
        </button>
      </div>
    </div>
  );
};

export default Story;
