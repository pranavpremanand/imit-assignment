import React, { useEffect, useRef, useState } from "react";
import "./Post.scss";
import profileImg2 from "../../assets/images/profile1.png";
import postImg from "../../assets/images/Mask group.png";
import CommentBox from "../CommentBox/CommentBox";
import { PostDetailsModal } from "../PostDetailsModal/PostDetailsModal";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setLikedStatus } from "../Redux/storeSlice";
import { toast } from "react-hot-toast";
import { toastCustomStyles } from "../../App";

const Post = ({ post }) => {
  const [data, setData] = useState(post);
  const [showComments, setShowComments] = useState(false);
  const divRef = useRef(null);
  const [showPostDetails, setShowPostDetails] = useState(false);
  const dispatch = useDispatch();  

  const handleShowCommentClick = () => {
    setShowComments((prev) => !prev);
  };

  useEffect(() => {
    if (showComments && divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showComments,post.comments]);

  const renderTooltip = (props) => {
    return (
      <Tooltip id="tooltip-bottom" {...props}>
        Click for post details
      </Tooltip>
    );
  };

  // display post details popup
  const handleShowPostDetailsClick = () => {
    setShowPostDetails(true);
    setData(post)
  };

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
  };
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
        {post.description && <p>{post.description}</p>}
        <div className="image">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip}
          >
            <img
              src={post.image}
              alt="post"
              loading="lazy"
              onClick={handleShowPostDetailsClick}
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
            <small>{post.comments.length} Comments</small>
          </div>
          <div className="buttons">
            <button className="secondary_btn" onClick={handleLikeClick}>
              {post.isLiked ? "Liked" : "Like"}
            </button>
            <button className="primary_btn" onClick={handleShowCommentClick}>
              Comment
            </button>
          </div>
          {showComments && (
            <div id="collapse-text" ref={divRef}>
              <CommentBox comments={post.comments} postId={post.id}/>
            </div>
          )}
        </div>
      </div>
      <PostDetailsModal
        setData={setData}
        post={data}
        show={showPostDetails}
        onHide={() => setShowPostDetails(false)}
      />
    </>
  );
};

export default Post;
