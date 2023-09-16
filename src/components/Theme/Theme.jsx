import React, { useState } from "react";
import "./Theme.css";
import { useLocation } from "react-router-dom";
import Cards from "../cards/Cards";
import { useModal } from "../../ModalContext";
import courses_data from "../../data/courses_data.json";
import Modal from "../modal/Modal";
const Theme = () => {
  // console.log("courses_data", courses_data);
  const location = useLocation();
  let path = location.pathname.split("/")[1];
  // eslint-disable-next-line
  const { modal, setModal } = useModal(false);
  // console.log("modal in theme", modal);
  const [modalData, setModalData] = useState();
  const { themes } = courses_data;
  const { courses } = courses_data;

  // console.log("themes", themes);
  // console.log("courses", courses);
  const openModal = (data) => {
    setModalData(data);
    setModal(true);
  };
  return (
    <div className="theme_container">
      <section>
        <p className="breadcrumb">home &gt; {path}</p>
        <h2 className="heading">Vivek Units Catalogue</h2>
      </section>
      <section className="button_div_theme">
        <button>Discover more</button>
      </section>
      {/* <main className={`${modal ? "theme_hide" : ""}`}> */}
      {modalData && (
        <Modal
          open={modal}
          onClose={() => {
            setModal(false);
            setModalData(null);
          }}
          modal_data={modalData}
        />
      )}

      {themes?.map((theme) => (
        <>
          <h2>{theme}</h2>
          <section className="theme_cards">
            {courses
              ?.filter((theme_data) => theme_data?.theme === theme)
              ?.map((data, index) => (
                <>
                  <Cards
                    data={data}
                    index={index}
                    color={theme === "Citizenship series" ? "grey" : ""}
                    openModal={openModal}
                  />
                </>
              ))}
          </section>
        </>
      ))}
      {/* </main> */}
    </div>
  );
};

export default Theme;
