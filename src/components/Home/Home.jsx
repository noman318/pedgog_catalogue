import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main_container">
      <main className="home">
        <section className="left_section">
          <h1>What is this catalogue website is all about ?</h1>
          <br />
          <h1>Why we made it can be written here ?</h1>
        </section>
        <section className="right_section">
          <img src="./test.jpg" alt="" />
        </section>
      </main>
      <div className="button_div">
        <button>Explore</button>
      </div>
    </div>
  );
};

export default Home;
