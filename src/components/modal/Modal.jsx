import React from "react";
import "./Modal.css";

const Modal = ({ open, onClose, modal_data }) => {
  console.log("modal_data", modal_data);
  const { sessions } = modal_data;
  const { versions } = modal_data;
  const { Languages } = modal_data;
  const { programTags } = modal_data;
  // console.log("sessions", sessions);
  // console.log("version", versions);
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modal_container">
        <div className="gradient_style" />
        <header className="header_block">
          <p onClick={onClose}>Back</p>
          <button className="button_div_modal">Subscribe</button>
        </header>
        <div className="modal_content">
          <h1 className="modal_title">{modal_data?.name}</h1>
          <p>{modal_data?.description}</p>
          <div className="modal_maps">
            <div className="version_data">
              <p>Verisons : </p>
              {versions?.map((data, index) => (
                <p key={index}>{data},</p>
              ))}
            </div>
            <p>Subscriber count: {modal_data?.subscriberCount}</p>
            <div className="version_data">
              <p>Languages : </p>
              {Languages?.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
            <div className="version_data">
              <p>Tag : </p>
              {programTags?.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          </div>
          <div className="sessions_data">
            <h3>Sessions:</h3>
            {sessions?.map((data, index) => (
              <div className="session_content" key={index}>
                <div className="session_details">
                  <img src={data.ModuleThumbnailImage} alt="" />
                  <p>{data.title}</p>
                  <p>{data.description}</p>
                  <p>Duration: {data.duration}</p>
                </div>
                <hr />
                <div className="modules">
                  {data.ModuleTags?.map((data, index) => (
                    <div key={index} className="module_tags">
                      <p>{data},</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
