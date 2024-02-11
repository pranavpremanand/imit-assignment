import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Feeds.scss";
import UploadImages from "../../components/UploadImages/UploadImages";
import Post from "../../components/Post/Post";
import { IoMdAdd } from "react-icons/io";
import { AddPostModal } from "../../components/AddPostModal/AddPostModal";

const Feeds = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Navbar />
      <div className="main_div">
        <button className="add_button" onClick={() => setModalShow(!modalShow)}>
          <span>Upload Image</span>
          <IoMdAdd className="add_icon" />

        </button>
        <UploadImages handleModalShow={() => setModalShow(!modalShow)} />
        <Post />
      </div>
      <AddPostModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Feeds;
