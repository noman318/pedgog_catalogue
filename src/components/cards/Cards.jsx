import React from "react";
import "./Cards.css";
import Modal from "../modal/Modal";
import { useModal } from "../../ModalContext";

const Cards = ({ data, color }) => {
  // console.log("data in props", data);
  // console.log("data in props", color);
  const { modal, setModal } = useModal(false);
  // console.log("modal", modal);
  return (
    <React.Fragment>
      <Modal open={modal} onClose={() => setModal(false)} />
      <div
        key={data.id}
        className={`cards ${color === "grey" ? "row2" : "row1"}`}
        onClick={() => setModal(true)}
      >
        <span className="card_title">
          <p>{data.title}</p> <p className="icon"> &rarr;</p>
        </span>
        <span className="card_data">
          <p>{data.subscribers} subscribers</p>
          <button>{data.buttonText}</button>
        </span>
      </div>
    </React.Fragment>
  );
};

export default Cards;
