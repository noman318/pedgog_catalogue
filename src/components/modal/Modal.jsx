import React from "react";
import "./Modal.css";
import courses_data from "../../data/courses_data.json";
const { courses } = courses_data;
const Modal = ({ open, onClose, modal_data }) => {
  // console.log("modal_data", modal_data);
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modal_container">
        <header className="header_block">
          <p onClick={onClose}>Back</p>
          <button className="button_div_modal">Subscribe</button>
        </header>
        <div className="modal_content">
          <h1 className="modal_title">{modal_data?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
