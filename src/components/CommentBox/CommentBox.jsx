import React from "react";
import "./CommentBox.scss";
import { IoMdSend } from "react-icons/io";
import CommentItem from "../CommentItem/CommentItem";

const CommentBox = () => {
  return (
    <div className="comments_container">
      <div className="comment_input_box">
        <input type="text" placeholder="Type something..." />
        <div className="send_btn">
          <IoMdSend />
        </div>
      </div>
      <div className="comments_list">
        <CommentItem />
      </div>
    </div>
  );
};

export default CommentBox;
