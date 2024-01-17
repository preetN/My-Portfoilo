import React from "react";
import { TypeAnimation } from "react-type-animation";
import myimg from "../assets/homeImg.jpeg";
import SideBar from "./SideBar";

function Home() {
  return (
    <div className="home d-flex ">
      <SideBar />

      <div
        id="home"
        className="d-flex m-5 justify-content-center align-item-center home"
      >
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="d-flex flex-column  justify-content-center align-items-center p-4 ">
            <div className="content">
              <h1 style={{ fontSize: "3em" }}>Hi! I'm</h1>
              <h1 style={{ fontSize: "4em" }}>Antarpreet Kaur.</h1>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Front-end Developer",
                  1000,
                  "Back-end Developer",
                  1000,
                  "Full-stack Developer",
                  1000,
                  "HTML/CSS Developer",
                  1000,
                  "React Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "3em", display: "inline-block" }}
                repeat={Infinity}
              />
              <p>
                Web Developer possesses a robust foundation in HTML/CSS and
                JavaScript, coupled with proficiency in cutting-edge
                technologies
              </p>
            </div>
            <div className="btn-box d-flex flex-column justify-content-center align-items-center mt-4">
              <a href="#skills" className="btn-home btn btn-warning">
                Explore More
              </a>
              <span className="down-arrow">
                <i class="fa-solid fa-arrow-down-long"></i>
                <small>scroll down</small>
              </span>
            </div>
          </div>
          <div className="w-50">
            <img className="mx-auto home-image" src={myimg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
