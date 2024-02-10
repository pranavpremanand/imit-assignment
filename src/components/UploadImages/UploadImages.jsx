import React from "react";
import img from "../../assets/images/add-post-img.png";
import './UploadImages.scss'

const UploadImages = () => {
  return (
    <div className="upload_container">
      <div className="left_box"></div>
      <div className="right_box"></div>
      <img src={img} alt="add post" loading="lazy" className="add_post_img"/>
      <div className="button_box">
        <button className="upload_btn">upload image</button>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default UploadImages;
