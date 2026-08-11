import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main_container">
      <main className="home">
        <section className="left_section">
          <h4>What is this catalogue website is all about created by Noman</h4>
          <br />
          <i>THIS WAS A CI-CD PRACTICE WITH AWS CODE BUILD AND CODE PIPELINE</i>
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
