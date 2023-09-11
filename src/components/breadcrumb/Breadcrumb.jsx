import React from "react";
import "./Breadcrumb.css";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <header>
      <main className="navbar">
        <section className="left_nav">
          <Link to={"/home"}>
            <img
              className="pedgog_logo"
              src="/pedgog_logo.svg"
              alt="pedgog_logo"
            />
          </Link>
        </section>
        <section className="right_nav">
          <img src="/user12.png" alt="user_logo" />
        </section>
      </main>
    </header>
  );
};

export default Breadcrumb;
