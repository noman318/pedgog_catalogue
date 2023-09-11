import React from "react";
import "./Modal.css";
const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal_container">
        <header className="header">
          <p onClick={onClose}>Back</p>
          <button>Subscribe</button>
        </header>
        <div className="modal_content">
          <h5>Contributor Program</h5>
          {/* <h5>Contributor Program</h5> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
