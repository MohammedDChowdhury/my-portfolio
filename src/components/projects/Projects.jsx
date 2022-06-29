import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

export default function Projects() {
  return (
    <section id="projects">
      <h5>What Skills I have</h5>
      <h2>My Projects</h2>
      <div className="container projects__container">
        <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <a href="https://github.com" className="btn">
            Github
          </a>
          <a
            href="https://dribbble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
}
