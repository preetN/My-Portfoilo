import AOS from "aos";
import React from "react";
import abtImg from "../assets/about.PNG";
function About() {
  AOS.init();
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
      <div id="about" className="bg-dark py-5">
        <div className="container">
          <div className="row gap-3">
            <div
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="col-md-5 about-img"
            >
              <img
                src={abtImg}
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            </div>
            <div className="col-md-6">
              <div className="text-light">
                I am Antarpreet Kaur, originally from India, relocated to
                Australia in 2017. As a web developer, I specialize in creating
                web-based applications and possess a keen interest in the field.
              </div>
              {deg.map((d) => (
                <div
                  data-aos="fade-left"
                  key={d.name}
                  className="qual border p-3 my-2 rounded bg-white text-dark"
                >
                  <h5>{d.name}</h5>
                  <i>{d.institute}</i>
                  <br />
                  <small>
                    {d.year}
                    {" | "}
                    {d.place}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
