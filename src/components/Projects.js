import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";

import img3 from "../assets/projects/Library.png";
import img4 from "../assets/projects/Movie.png";
import img5 from "../assets/projects/PrankC.png";
import img2 from "../assets/projects/Quiz.png";
import img1 from "../assets/projects/flowesShop.png";
function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const projects = [
    {
      name: "Flower Shop",
      description: "React.JS, Material UI, and Firebase",
      linkW: "https://flowershop-teal.vercel.app/",
      linkG: " https://github.com/preetN/flowershop",
      image: img1,
    },
    {
      name: "Quiz using API",
      description: "HTML, CSS, Bootstrap, JavaScript, and Restful API",
      linkW: "https://quiz-api-liart.vercel.app/",
      linkG: "  https://github.com/preetN/quiz-API",
      image: img2,
    },
    {
      name: "Library Rentals",
      description: "React.JS, Bootstrap, and Firebase",
      linkW: "https://library-rentals-l43r4aq8m-preetn.vercel.app/",
      linkG: " https://github.com/preetN/Library-rentals",
      image: img3,
    },
    {
      name: "MovieAPI",
      description: "React.JS, Bootstrap, and Restful API",
      linkW: "https://movie-api-weld.vercel.app/",
      linkG: " https://github.com/preetN/MovieAPI/tree/main",
      image: img4,
    },
    {
      name: "Prank Calculator",
      description: "HTML, CSS, Bootstrap and JavaScript",
      linkW: "https://preetn.github.io/Prankcalculator/",
      linkG: "https://github.com/preetN/Prankcalculator",
      image: img5,
    },
  ];
  const handleOnClick = (project) => {
    window.open(project.linkG);
  };
  const handleOnWeb = (project) => {
    window.open(project.linkW);
  };

  return (
    <div id="projects" className="project-page min-vh-100">
      <Slider {...settings}>
        {projects.map((project) => (
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img
              onClick={() => handleOnWeb(project)}
              variant="top"
              src={project.image}
            />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button
                variant="outline-dark border-0"
                className="btn-project"
                onClick={() => handleOnClick(project)}
              >
                <i class="fa-solid fa-less-than"></i>
                <span className="tag">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <i class="fa-solid fa-greater-than"></i>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
