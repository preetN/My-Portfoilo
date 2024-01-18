import React from "react";
import { TypeAnimation } from "react-type-animation";
import myimg from "../assets/homeImg.jpeg";
import SideBar from "./SideBar";

function Home() {
  return (
    <div id="home" className="home d-flex p-2">
      <SideBar />

      <div className="d-flex m-5 pt-5 justify-content-center align-item-center home">
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
                <a href="#skills">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIklEQVR4nO2YzQqCQBSFz3uJy9rXol2vIKLiyv+V7xU9Ratq7y4KCicmLMQaDaG5TtwPLszqzjl+sxJg/o8tAKGYDQxADMzkEXK6cAGNsAFq2AA1bIAaNkANG6CGDVDDBqhhA9SwAWrYADVsgBo2QA0boMYIA3MAh76/0D0FPs0ewExngXNfINu23wpYljVU4qSzQC0vdRxH1HUtxlBV1WM8z3sWkDu1cXl+Odd1xVjyPG8bkDu1sWvrH1OiLMvuE5I7tbEAcGsHkE/hW9I07Ya/NTu1sgJwbQfxfX8wfJIkn8KvdYdXlgiCQBk+juNJhVeWCMPQmPDKElmWvcJHUTTp8MoSRVE8bJgQXlnCpPBDJYwIryphVHg0LAEcm5Hnn3AHJpA6f8bbAk0AAAAASUVORK5CYII=" />
                </a>
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
