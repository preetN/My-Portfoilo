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
    <>
      <div
        id="skills"
        className="container-fluid min-vh-100 d-flex align-items-center"
      >
        <div className="row">
          <h1 className="d-inline-flex justify-content-center mb-5">
            My skills
          </h1>

          <div className="row">
            {skills.map((skill) => (
              <div key={skill} className="col">
                <div className="circle1">
                  <div className="circle">{skill}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
