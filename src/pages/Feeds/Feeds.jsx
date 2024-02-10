import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Feeds.scss";
import UploadImages from "../../components/UploadImages/UploadImages";

const Feeds = () => {
  return (
    <div className="main-div">
      <Navbar />
      <UploadImages />
    </div>
  );
};

export default Feeds;
