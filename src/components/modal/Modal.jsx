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
            {versions && (
              <>
                <h3 className="title_tags">Verisons : </h3>
                <div className="version_data">
                  {versions?.map((data, index) => (
                    <p key={index}>{data},</p>
                  ))}
                </div>
              </>
            )}
            {modal_data?.subscriberCount && (
              <div className="subs_count">
                <h3 className="title_tags">Subscriber count:</h3>
                <p>{modal_data?.subscriberCount}</p>
              </div>
            )}
            {Languages && (
              <>
                <h3 className="title_tags">Available in : </h3>
                <div className="version_data">
                  {Languages?.map((data, index) => (
                    <p key={index}>{data},</p>
                  ))}
                </div>
              </>
            )}
            {programTags && (
              <>
                <h3 className="title_tags">Tag : </h3>
                <div className="version_data">
                  {programTags?.map((data, index) => (
                    <p key={index}>{data}</p>
                  ))}
                </div>
              </>
            )}
          </div>
          {sessions && (
            <div className="sessions_data">
              <h3>Sessions:</h3>
              {sessions?.map((data, index) => (
                <div className="session_content" key={index}>
                  <div className="session_details">
                    <img src={data.ModuleThumbnailImage} alt="" />
                    <div className="sessions_data_internal">
                      <p>{data.title},</p>
                      <p>{data.description},</p>
                      <p>Duration: {data.duration}</p>
                      <div className="modules">
                        {data.ModuleTags?.map((data, index) => (
                          <div key={index} className="module_tags">
                            <p>{data},</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
