import React from "react";
import profileImg from "../../assets/images/profile1.png";
import profileImg1 from "../../assets/images/Mask group.png";
import { HiOutlineDotsVertical } from "react-icons/hi";

const CommentItem = () => {
  return (
    <div className="comment">
      <div className="comment_head">
        <div className="profile_img_side">
          <img src={profileImg1} alt="profile" />
          <span>Batman</span>
          <small>2 seconds ago</small>
        </div>
        <HiOutlineDotsVertical className="three_dots_icon" />
      </div>
      <div className="comment_text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus vel
        nemo iure fuga exercitationem repudiandae hic, molestias, ipsa esse quia
        in velit illo maxime minima placeat. Minima quibusdam ab pariatur.
      </div>
      <div className="user_reply_comment">
        <div className="comment_head">
          <div className="profile_img_side">
            <img src={profileImg} alt="profile" />
            <span>Superman</span>
            <small>2 seconds ago</small>
          </div>
          <HiOutlineDotsVertical className="three_dots_icon" />
        </div>
        <div className="comment_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          vel nemo iure fuga exercitationem repudiandae hic, molestias, ipsa
          esse quia in velit illo maxime minima placeat. Minima quibusdam ab
          pariatur.
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
