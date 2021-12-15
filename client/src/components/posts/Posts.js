import React, { useState } from "react";
import { TiMessages } from "react-icons/ti";
import "./posts.css";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import SearchPost from "../search/SearchPost";

const Posts = ({ ping, setping, posts }) => {
  const [filterpost, setfilterpost] = useState("");
  const [noOfElement, setnoOfElement] = useState(2);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  return (
    <div>
      <div className="posts-page">
        <SearchPost setfilterpost={setfilterpost} />
        <div className="posts-header">
          <img src="/images/quotestory.png" alt="" />
          <h1>
            <TiMessages /> Posts <TiMessages />
          </h1>
        </div>
        <div className="posts-list">
          {posts ? (
            posts
              .filter((post) =>
                post?.title.toLowerCase().includes(filterpost.toLowerCase())
              )
              .map((el) => (
                <PostCard
                  post={el}
                  ping={ping}
                  setping={setping}
                  posts={posts}
                />
              ))
              .reverse()
              .slice(0, noOfElement)
          ) : (
            <img
              src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large?v=v2&px=999"
              alt=""
            />
          )}
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
        <Link className="link" to="/stories">
          <button>Stories</button>
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

export default Posts;
