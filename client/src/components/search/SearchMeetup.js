import React from "react";

const SearchMeetup = ({ setfilterdate, setfilterdest }) => {
  return (
    <div className="search-page">
      <div className="search-section">
        <input
          className="search_bg"
          type="date"
          placeholder="Search bydate"
          onChange={(e) => setfilterdate(e.target.value)}
        />
        <label>Search</label>
        <input
          className="search_des"
          type="text"
          placeholder="Search your destination"
          onChange={(e) => setfilterdest(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchMeetup;
