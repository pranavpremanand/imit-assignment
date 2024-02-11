import React, { useEffect, useRef, useState } from "react";
import "./Post.scss";
import profileImg2 from "../../assets/images/profile1.png";
import postImg from "../../assets/images/Mask group.png";
import CommentBox from "../CommentBox/CommentBox";
import { PostDetailsModal } from "../PostDetailsModal/PostDetailsModal";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Post = () => {
  const [showComments, setShowComments] = useState(false);
  const divRef = useRef(null);
  const [showPostDetails, setShowPostDetails] = useState(true);

  const handleShowCommentClick = () => {
    setShowComments((prev) => !prev);
  };

  useEffect(() => {
    if (showComments && divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showComments]);

  const renderTooltip = (props) => (
    <Tooltip id="tooltip-bottom" {...props}>
      Click for post details
    </Tooltip>
  );
  return (
    <>
      <div className="post">
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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          ullam accusamus deserunt inventore, tempora vitae totam possimus
          illum!
        </p>
        <div className="image">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <img
              src={postImg}
              alt="post"
              loading="lazy"
              onClick={() => setShowPostDetails(!showPostDetails)}
            />
          </OverlayTrigger>
        </div>
        <div className="like_and_comments">
          <div className="like_and_comments_header">
            <div className="likes">
              <div className="likes_imgs">
                <img src={postImg} alt="profile" />
                <img src={profileImg2} alt="profile" />
                <img src={postImg} alt="profile" />
              </div>
              <small>Liked by You and others</small>
            </div>
            <small>3 Comments</small>
          </div>
          <div className="buttons">
            <button className="secondary_btn">Like</button>
            <button className="primary_btn" onClick={handleShowCommentClick}>
              Comment
            </button>
          </div>
          {showComments && (
            <div id="collapse-text" ref={divRef}>
              <CommentBox />
            </div>
          )}
        </div>
      </div>
      <PostDetailsModal
        show={showPostDetails}
        onHide={() => setShowPostDetails(false)}
      />
    </>
  );
};

export default Post;
