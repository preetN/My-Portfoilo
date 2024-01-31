import React from "react";
import { TypeAnimation } from "react-type-animation";
import myimg from "../assets/homeImg.jpeg";
import SideBar from "./SideBar";
function Home() {
  return (
    <section id="home">
      <div className="row">
        <div className="col-3 col-sm-2 d-inline-flex justify-content-center">
          <SideBar />
        </div>
        <div className="col-9 col-sm-10">
          <div className="row">
            <div className="col-12 col-sm-8  col-md-6 row gap-5">
              <div className="content row">
                <h1 className="welcome-1">Hi! I'm</h1>
                <h1 className="welcome-2">Antarpreet Kaur.</h1>
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
                  speed={25}
                  className="loop"
                  repeat={Infinity}
                />
                <p>
                  Web Developer possesses a robust foundation in HTML/CSS and
                  JavaScript, coupled with proficiency in cutting-edge
                  technologies
                </p>
              </div>
              <div className="row btn-box">
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
            <div className="col-sm-4 col-md-6 d-inline-flex justify-content-center align-items-center">
              <img
                style={{ overflow: "hidden" }}
                className="home-image"
                src={myimg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
