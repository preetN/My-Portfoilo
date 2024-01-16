import TagCloud from "TagCloud";
import React, { useEffect } from "react";
function Skills() {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS/SCSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "Material UI",
        "Tailwind CSS",
        "SQL",
        "MongoDB",
        "PostgreSQL",
        "C/C++",
        "Java",
        "SpringBoot",
        "Figma",
      ];
      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-sphere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
}

export default Skills;
