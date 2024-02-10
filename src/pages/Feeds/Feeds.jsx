import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Feeds.scss";
import UploadImages from "../../components/UploadImages/UploadImages";
import Post from "../../components/Post/Post";
import { IoMdAdd } from "react-icons/io";

const Feeds = () => {
  return (
    <>
      <Navbar />
      <div className="main_div">
        <button className="add_button">
          <IoMdAdd className="add_icon" />
        </button>
        <UploadImages />
        <Post />
      </div>
    </>
  );
};

export default Feeds;
