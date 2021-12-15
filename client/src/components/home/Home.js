import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import FeaturedList from "./FeaturedList";

import "./home.css";
function Home({ stories }) {
  return (
    <div>
      <div className="carrrousel">
        <img
          className="traveller"
          src="/images/traveller.jpg"
          alt="traveller"
        />
        <Carousel className="carrou" />
        <img
          className="traveller"
          src="/images/traveller.jpg"
          alt="traveller"
        />
      </div>
      <div className="up"></div>
      <div className="happy-travel">
        <h1 onClick={() => window.scrollTo({ top: 0 })}>Happy Travelling</h1>
        <div className="boxes">
          <Link className="link" to="/stories">
            <div className="boxxx">
              <h5>Share memories</h5>
              <img
                className="box-img"
                src="https://img.freepik.com/free-photo/tell-your-story-notebook-with-cup-coffee-compressed-sheets-crayons-stapler_126791-574.jpg?size=626&ext=jpg"
                alt="box"
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut cum
                commodi nam corrupti dicta recusandae harum ad, a quo vero
                deleniti maiores?
              </p>
            </div>
          </Link>
          <Link className="link" to="/meet">
            <div className="boxxx">
              <h5>Meet Up</h5>
              <img
                className="box-img meet"
                src="https://uploads-ssl.webflow.com/5cc9ecc573a9a45a5f14d14f/5d38b324bb396335656a2f29_meet-ups-header.png"
                alt="box"
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut cum
                commodi nam corrupti dicta recusandae harum ad, a quo vero
                deleniti maiores?
              </p>
            </div>
          </Link>
          <Link className="link" to="/posts">
            <div className="boxxx">
              <h5>Plan your Trip</h5>
              <img
                className="box-img"
                src="https://kingstonlimdotcom.files.wordpress.com/2020/06/planning-a-trip-tips-and-challenges-2-1.jpg"
                alt="box"
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut cum
                commodi nam corrupti dicta recusandae harum ad, a quo vero
                deleniti maiores?
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="happy-travel">
        <h1>Featured Stories</h1>
        <FeaturedList stories={stories} />
      </div>
      <div className="happy-travel">
        <h1>Best Destinations</h1>
        <img className="maps" src="/images/map1.jpg" alt="map" />
      </div>
      {/* <Link className="link" to="/">
        <img src="/icons/up.svg" alt="up" />
      </Link> */}
    </div>
  );
}

export default Home;
