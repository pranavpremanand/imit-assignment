import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Feeds.scss";
import UploadImages from "../../components/UploadImages/UploadImages";
import Post from "../../components/Post/Post";
import { IoMdAdd } from "react-icons/io";
import { AddPostModal } from "../../components/AddPostModal/AddPostModal";
import { useSelector } from "react-redux";

const Feeds = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const inputRef = useRef(null);
  const posts = useSelector((state) => state.store.posts);
  return (
    <>
      <Navbar />
      <div className="main_div">
        <button className="add_button" onClick={() => inputRef.current.click()}>
          <span>Upload Image</span>
          <IoMdAdd className="add_icon" />
        </button>
        <UploadImages
          inputRef={inputRef}
          handleModalShow={() => setModalShow(!modalShow)}
          setSelectedImg={(img) => setSelectedImg(img)}
        />
        {posts && posts.map((post) => <Post post={post} key={post.id} />)}
      </div>
      <AddPostModal
        selectedImg={selectedImg}
        setSelectedImg={(img) => setSelectedImg(img)}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Feeds;
