import React from "react";
import { Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import myimg from "../assets/homeImg.jpeg";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
function Home() {
  return (
    <>
      <div className="d-flex p-2">
        <SideBar />
        <div className="home w-75 flex-grow-1">
          <NavBar />
          <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="d-flex flex-column  justify-content-center align-items-center">
              <div className="content">
                <h1 style={{ fontSize: "4em" }}>Hi! I'm</h1>
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
              <div className="btn-box d-flex flex-column justify-content-center align-items-center">
                <Button className="btn-home" variant="warning">
                  Explore More
                </Button>
                <span className="down-arrow">
                  <i class="fa-solid fa-arrow-down-long"></i>
                </span>
              </div>
            </div>
            <div className="w-50">
              <img src={myimg} width="90%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
