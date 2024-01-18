import React from "react";
import abtImg from "../assets/about.PNG";
function About() {
  const deg = [
    {
      name: "Professional Year Programme",
      institute: "William Light Institute",
      place: "Melbourne, VIC",
      year: "DECEMBER 2020",
    },
    {
      name: "Bachelor in Information Technology",
      institute: "Federation University",
      place: "Ballarat, VIC",
      year: "DECEMBER 2019 ",
    },
    {
      name: "Bachelor in Computer Science Engineering",
      institute: "Chitkara University",
      place: "Punjab, India",
      year: "JUNE 2017",
    },
  ];
  return (
    <>
      <div
        id="about"
        className=" bg-dark d-flex justify-content-center align-items-center p-5"
      >
        <div className=" p-5 d-flex justify-content-center align-items-center">
          <img src={abtImg} width={"400px"} />
          <div className="about-section gap-4 d-flex justify-content-center align-items-center flex-column">
            <div className="about-text mx-5">
              I am Antarpreet Kaur, originally from India, relocated to
              Australia in 2017. As a web developer, I specialize in creating
              web-based applications and possess a keen interest in the field.
            </div>
            <div className="d-flex justify-content-start align-items-start gap-4 flex-column flex-wrap  ">
              {deg.map((d) => (
                <span className="qual d-flex">
                  <i className="fa-solid fa-award "></i>
                  <span className="info-divider"></span>
                  <span>
                    <h5>{d.name}</h5>
                    <h6>{d.institute}</h6>
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
