import React from "react";
import "./search.css";
const Search = ({ setfilter, setfilterBg }) => {
  return (
    <div className="search-page">
      <div className="search-section">
        <input
          className="search_bg"
          type="text"
          placeholder="Search by budget"
          onChange={(e) => setfilterBg(e.target.value)}
        />
        <label>Search</label>
        <input
          className="search_des"
          type="text"
          placeholder="Search your destination"
          onChange={(e) => setfilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
