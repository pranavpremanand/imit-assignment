import React from "react";
import "./Post.scss";
import profileImg from "../../assets/images/profile2.png";
import profileImg2 from "../../assets/images/profile1.png";
import postImg from "../../assets/images/Mask group.png";

const Post = () => {
  return (
    <div className="post">
      <div className="post_header">
        <div className="post_header_left_side">
          <img src={profileImg} alt="profile" />
          <div>
            <span>Anitta KC</span>
            <small>3 days ago</small>
          </div>
        </div>
        <button className="secondary_btn">report</button>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        ullam accusamus deserunt inventore, tempora vitae totam possimus illum!
      </p>
      <img src={postImg} alt="post" />
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
            <button className="primary_btn">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
