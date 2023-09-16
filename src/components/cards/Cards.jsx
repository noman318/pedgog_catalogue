import React, { useState } from "react";
import "./Cards.css";
import Modal from "../modal/Modal";
import { useModal } from "../../ModalContext";
import courses_data from "../../data/courses_data.json";
const { courses } = courses_data;

const Cards = ({ data, color }) => {
  // console.log("props", data);
  // console.log("data in props", data);
  // console.log("data in props", color);
  // const { sessions } = data;
  // console.log("sessions", sessions);
  const { modal, setModal } = useModal(false);
  const [modalData, setModalData] = useState();
  // console.log("modal", modal);

  return (
    <React.Fragment>
      {/* {console.log("TAG:", data)} */}
      {}
      <Modal open={modal} onClose={() => setModal(false)} />
      <div
        className={`cards ${color === "grey" ? "row2" : "row1"}`}
        onClick={(e) => {
          console.log("event", e.target);
          setModalData(data);
          setModal(true);
        }}
      >
        <div className="card_title">
          <div>{data?.name}</div> <p className="icon"> &rarr;</p>
        </div>
        <img className="card_image" src={data?.image} alt="" />
        <span className="card_data">
          {data?.subscriberCount && <p>{data?.subscriberCount} subscribers</p>}
          <button>{data?.buttonText}</button>
        </span>
      </div>
      {console.log("modalDataAftercomponent", modalData)}
    </React.Fragment>
  );
};

export default Cards;
