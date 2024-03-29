import { Modal } from "react-bootstrap";
import "./AddPostModal.scss";
import { useDispatch } from "react-redux";
import { addPost } from "../Redux/storeSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const AddPostModal = ({ selectedImg, setSelectedImg, ...props }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const handleClose = () => {
    props.onHide();
    setSelectedImg("");
    setDescription("");
  };

  const uploadPost = () => {
    const date = new Date();
    let data = {
      id: date.getTime(),
      image: selectedImg,
      description,
      isLiked: false,
      comments: [],
    };
    dispatch(addPost(data));
    setSelectedImg("");
    setDescription("");
    props.onHide();
    toast.success('Post uploaded!')
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="selected_image">
          <div className="input_box">
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols=""
              rows="2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <img src={selectedImg} alt="selected file" />
          <div className="buttons">
            <button className="primary_btn" onClick={uploadPost}>
              Upload
            </button>
            <button className="secondary_btn" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
