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
import { setLikedStatus } from "../Redux/storeSlice";
import { useState } from "react";

export const PostDetailsModal = ({ post, setData, ...props }) => {
  const dispatch = useDispatch();
  const [liked,setLiked] = useState(post.isLiked)
  const [newPost1, newPost2, newPost3] = useSelector(
    (state) => state.store.posts
  );

  // handle user like click
  const handleLikeClick = () => {
    if (post.isLiked) {
      toast.success("Post unliked", {
        style: toastCustomStyles,
      });
    } else {
      toast.success("Post liked", { style: toastCustomStyles });
    }
    setLiked(!liked)
    dispatch(setLikedStatus(post.id));
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
                  {liked ? (
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
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <div className="comments_input_box_container">
                  <div className="comment_input_box">
                    <img src={profileImg2} alt="profile" />
                    <input type="text" placeholder="Type something..." />
                    <div className="send_btn">
                      <IoMdSend />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="latest_posts">
            <h6>Latest Images</h6>
            <div className="posts_list">
              {newPost1 && (
                <img
                  src={newPost1.image}
                  alt="post"
                  onClick={() => setData(newPost1)}
                />
              )}
              {newPost2 && (
                <img
                  src={newPost2.image}
                  alt="post"
                  onClick={() => setData(newPost2)}
                />
              )}
              {newPost3 && (
                <img
                  src={newPost3.image}
                  alt="post"
                  onClick={() => setData(newPost3)}
                />
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
