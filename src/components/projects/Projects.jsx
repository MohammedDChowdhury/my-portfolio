import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto currency Dashboard & Financial Visualisation",
    github: "https://github.com",
    demo: "https://dribble.com/shots/1667315-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18543062-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17393923-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    image: IMG4,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16272177-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 5,
    image: IMG5,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18308127-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 6,
    image: IMG6,
    title: "Mi Home - Mobile App",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18616047-Mi-Home-Mobile-App",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>
      <div className="container projects__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="projects__item">
              <div className="projects__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="projects__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
