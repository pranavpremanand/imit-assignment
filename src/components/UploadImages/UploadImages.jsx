import React from "react";
import img from "../../assets/images/add-post-img.png";
import "./UploadImages.scss";
import { toast } from "react-hot-toast";

const UploadImages = ({ inputRef, handleModalShow, setSelectedImg }) => {
  // handle image change
  const onImgChange = (file) => {
    if (file.target.files && file.target.files[0]) {
      if (
        file.target.files[0].type === "image/x-png" ||
        file.target.files[0].type === "image/gif" ||
        file.target.files[0].type === "image/jpeg" ||
        file.target.files[0].type === "image/jpg" ||
        file.target.files[0].type === "image/png"
      ) {
        let img = file.target.files[0];
        setSelectedImg(URL.createObjectURL(img));
        handleModalShow();
      } else {
        toast.error("Select an image file");
      }
    }
  };
  return (
    <div className="upload_container">
      <div className="left_box"></div>
      <div className="right_box"></div>
      <img src={img} alt="add post" loading="lazy" className="add_post_img" />
      <div className="button_box">
        <button className="upload_btn" onClick={() => inputRef.current.click()}>
          upload image
          <input
            type="file"
            hidden
            name="myImg"
            accept="image/x-png,image/gif,image/jpeg,image/png,image/jpg"
            onChange={(e) => onImgChange(e)}
            ref={inputRef}
          />
        </button>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default UploadImages;
