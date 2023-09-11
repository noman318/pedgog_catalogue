import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navArr = ["Home", "Theme", "Popular", "Student Group"];
  return (
    <header>
      <main className="navbar">
        <section className="left_nav">
          <img
            className="pedgog_logo"
            src="/pedgog_logo.svg"
            alt="pedgog_logo"
          />
          <div className="left_nav_text">
            <h1>Pedgog</h1>
            <h1>Catalogue</h1>
          </div>
        </section>
        <section className="center_nav">
          {navArr?.map((nav, index) => (
            <Link to={`/${nav.toLowerCase()}`} className="link_styles">
              <div key={index} className="center_nav_text">
                <h4>{nav}</h4>
              </div>
            </Link>
          ))}
        </section>
        <section className="right_nav">
          <h4>LOGIN/ SIGNIN</h4>
        </section>
      </main>
    </header>
  );
};

export default Navbar;
