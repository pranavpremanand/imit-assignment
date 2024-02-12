import { Modal } from "react-bootstrap";
import "./PostDetailsModal.scss";
import profileImg2 from "../../assets/images/profile1.png";
import { IoMdClose } from "react-icons/io";
import CommentItem from "../CommentItem/CommentItem";
import { IoMdSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { toastCustomStyles } from "../../App";
import { useDispatch } from "react-redux";
import { setComment, setLikedStatus } from "../Redux/storeSlice";
import { useState } from "react";

export const PostDetailsModal = ({ post, setData, ...props }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.store.posts);
  const [comments, setComments] = useState(post.comments);

  // handle user like click
  const handleLikeClick = () => {
    if (post.isLiked) {
      toast.success("Post unliked", {
        style: toastCustomStyles,
      });
    } else {
      toast.success("Post liked", { style: toastCustomStyles });
    }
    dispatch(setLikedStatus(post.id));
    setData({ ...post, isLiked: !post.isLiked });
  };

  // handle comment input change
  const handleCommentChange = (e) => {
    if (e.target.value !== "") {
      setInput(e.target.value);
    }
  };

  // add comment to store
  const addComment = () => {
    if (input.length) {
      dispatch(setComment({ postId: post.id, comment: input }));
      setComments([input, ...comments]);
      setInput("");
    }
  };

  // handle post change
  const handlePostChange = (index) => {
    setData(posts[index]);
    setComments(posts[index].comments);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="post_details_modal">
          <div className="close_btn" onClick={props.onHide}>
            <IoMdClose />
          </div>
          <div className="post_details">
            <img src={post.image} alt="post" />
            <div className="post_details_right_side">
              <div className="post_header">
                <div className="post_header_left_side">
                  <img src={profileImg2} alt="profile" />
                  <div>
                    <span>Superman</span>
                    <small>30 seconds ago</small>
                  </div>
                </div>
                <button className="secondary_btn">report</button>
              </div>
              <hr />
              <div className="buttons">
                <button className="secondary_btn" onClick={handleLikeClick}>
                  {post.isLiked ? (
                    <>
                      <FaHeart className="hear_icon" />
                      Liked
                    </>
                  ) : (
                    <>
                      <FaRegHeart className="hear_icon" />
                      Like
                    </>
                  )}
                </button>
                <button className="primary_btn">Comment</button>
              </div>
              <div className="comments_list">
                {comments.length !== 0 &&
                  comments.map((comment, i) => (
                    <CommentItem comment={comment} key={i} />
                  ))}
              </div>
              <div className="comments_input_box_container">
                <div className="comment_input_box">
                  <img src={profileImg2} alt="profile" />
                  <input
                    type="text"
                    placeholder="Type something..."
                    value={input}
                    onChange={handleCommentChange}
                  />
                  <div className="send_btn" onClick={addComment}>
                    <IoMdSend />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="latest_posts">
            <h6>Latest Images</h6>
            <div className="posts_list">
              {posts[0] && (
                <img
                  src={posts[0].image}
                  alt="post"
                  onClick={() => handlePostChange(0)}
                />
              )}
              {posts[1] && (
                <img
                  src={posts[1].image}
                  alt="post"
                  onClick={() => handlePostChange(1)}
                />
              )}
              {posts[2] && (
                <img
                  src={posts[2].image}
                  alt="post"
                  onClick={() => handlePostChange(2)}
                />
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
