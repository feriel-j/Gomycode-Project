import React, { useState } from "react";
import { SiMarriott } from "react-icons/si";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import "./stories.css";
import StoryCard from "./StoryCard";

const Stories = ({ stories, ping, setping }) => {
  const [filter, setfilter] = useState("");
  const [filterBg, setfilterBg] = useState("");

  const [noOfElement, setnoOfElement] = useState(3);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  return (
    <div className="containerrr">
      <Search setfilter={setfilter} setfilterBg={setfilterBg} />
      <div className="stories-page">
        <div className="stories-header">
          <img src="/images/quotestory.png" alt="" />
          <h1>
            <SiMarriott /> Stories <SiMarriott />
          </h1>
        </div>
        <div className="sories-list">
          {stories
            ?.filter(
              (story) =>
                story?.destination
                  ?.toLowerCase()
                  .includes(filter.toLowerCase()) &&
                story?.budget
                  ?.toLowerCase()
                  .includes(filterBg.toLocaleLowerCase())
            )
            .map((el) => <StoryCard story={el} ping={ping} setping={setping} />)
            .reverse()
            .slice(0, noOfElement)}
        </div>
        <button className="btnnn-load" onClick={() => loadMore()}>
          Load More
        </button>
      </div>
      <div className="btn-bar">
        <Link className="link" to="/">
          <button> Home</button>
        </Link>
        <Link className="link" to="/about">
          <button>About</button>
        </Link>
        <Link className="link" to="/posts">
          <button>Posts</button>
        </Link>
        <Link className="link" to="/meet">
          <button>Meet Up</button>
        </Link>

        <Link className="link" to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Stories;
