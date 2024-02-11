import { Modal } from "react-bootstrap";
import "./PostDetailsModal.scss";
import postImg from "../../assets/images/Mask group.png";
import profileImg2 from "../../assets/images/profile1.png";
import { IoMdClose } from "react-icons/io";
import CommentItem from "../CommentItem/CommentItem";
import { IoMdSend } from "react-icons/io";

export const PostDetailsModal = (props) => {
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
            <img src={postImg} alt="post" />
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
                <button className="secondary_btn">Like</button>
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
              <img src={postImg} alt="post" />
              <img src={postImg} alt="post" />
              <img src={postImg} alt="post" />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
