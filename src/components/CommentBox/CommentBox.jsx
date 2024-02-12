import React, { useState } from "react";
import "./CommentBox.scss";
import { IoMdSend } from "react-icons/io";
import profileImg from "../../assets/images/profile2.png";
import CommentItem from "../CommentItem/CommentItem";
import { useDispatch } from "react-redux";
import { setComment } from "../Redux/storeSlice";

const CommentBox = ({ comments, postId }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // handle comment input change
  const handleCommentChange = (e) => {
    if (e.target.value !== "") {
      setInput(e.target.value);
    }
  };

  // add comment to store
  const addComment = () => {
    if (input.length) {
      dispatch(setComment({ postId, comment: input }));
      setInput("");
    }
  };
  return (
    <div className="comments_container">
      <div className="comments_input_box_container">
        <div className="comment_input_box">
          <img src={profileImg} alt="profile" />
          <input
            value={input}
            type="text"
            placeholder="Type something..."
            onChange={handleCommentChange}
            onKeyDown={(e) => e.key === "Enter" && addComment()}
          />
          <div className="send_btn" onClick={addComment}>
            <IoMdSend />
          </div>
        </div>
      </div>
      {comments.length !== 0 && (
        <div className="comments_list">
          {comments.map((comment, i) => (
            <CommentItem comment={comment} postId={postId} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentBox;
