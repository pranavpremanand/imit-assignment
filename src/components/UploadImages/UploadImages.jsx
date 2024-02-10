import React from "react";
import img from "../../assets/images/add-post-img.png";
import './UploadImages.scss'

const UploadImages = () => {
  return (
    <div className="upload-container">
      <div className="left-box"></div>
      <div className="right-box"></div>
      <img src={img} alt="add post" className="add-post-img"/>
      <div className="button-box">
        <button className="upload-btn">upload image</button>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default UploadImages;
