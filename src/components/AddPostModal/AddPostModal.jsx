import { Modal } from "react-bootstrap";
import "./AddPostModal.scss";

export const AddPostModal = ({ selectedImg, setSelectedImg, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="selected_image">
          <img src={selectedImg} alt="selected file" />
          <div className="buttons">
            <button className="primary_btn" onClick={props.onHide}>
              Upload
            </button>
            <button className="secondary_btn" onClick={props.onHide}>
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
