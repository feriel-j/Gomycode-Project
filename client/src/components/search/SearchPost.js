import React from "react";

const SearchPost = ({ setfilterpost }) => {
  return (
    <div className="search-page postSearch">
      <div className="search-section">
        <label className="labesPost">Search</label>
        <input
          className="search_des"
          type="text"
          placeholder="Search subject"
          onChange={(e) => setfilterpost(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchPost;
