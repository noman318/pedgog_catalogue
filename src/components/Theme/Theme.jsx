import React from "react";
import "./Theme.css";
import { useLocation } from "react-router-dom";
import { ThemeOneData, ThemeTwoData } from "../../data/theme";
import Cards from "../cards/Cards";
import { useModal } from "../../ModalContext";
const Theme = () => {
  const location = useLocation();
  let path = location.pathname.split("/")[1];
  // eslint-disable-next-line
  const { modal, setModal } = useModal(false);
  console.log("modal in theme", modal);
  //   console.log("ThemeOneData", ThemeOneData);
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
      <h2>Theme 1</h2>
      <section className="theme_cards">
        {ThemeOneData?.map((theme) => (
          <Cards data={theme} key={theme.id} />
        ))}
      </section>

      <h2 style={{ marginTop: "5%" }}>Theme 2</h2>
      <section className="theme_cards">
        {ThemeTwoData?.map((theme) => (
          <Cards data={theme} key={theme?.id} color={"grey"} />
        ))}
      </section>
      {/* </main> */}
    </div>
  );
};

export default Theme;
