import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Bootstrap",
    "Material UI",
    "Tailwind CSS",
    "C/C++",
    "Java",
    "Spring Boot",
    "SQL",
    "MongoDB",
    "PostgreSQL",
  ];
  return (
    <div id="skills" className=" min-vh-100 ">
      <div className="skill-page d-flex flex-column align-items-center p-5">
        <h2>My skills</h2>
        <div className="d-flex flex-wrap justify-content-center align-item-center">
          {skills.map((skill) => (
            <div className="circle1">
              <div className="circle">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
