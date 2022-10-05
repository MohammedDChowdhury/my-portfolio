import React from "react";
import "./projects.css";
import IMG1 from "../../assets/property-searcher.jpeg";
import IMG2 from "../../assets/travel-adv.png";
import IMG3 from "../../assets/amazon-scraper.png";
import IMG4 from "../../assets/currency-convertor.png";
import IMG5 from "../../assets/task-manager.png";
import IMG6 from "../../assets/ecom-app.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "Real Estate Property Searcher - A Web Application to search for Properties in both for Rental and for Sale!",
    github: "https://github.com/MohammedDChowdhury/real-estate-next",
    domain: "https://real-estate-next-flame.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title:
      "Travel Advisor - A Web Application to search for Restaurants, Hotels, and Attractions in any Location!",
    github: "https://github.com/MohammedDChowdhury/travel_advisor",
    domain: "https://travel-adv-webapp.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title:
      "Amazon Scraper API - A Backend Application/API Built for scraping product data from Amazon for your website!",
    github: "https://github.com/MohammedDChowdhury/amazon_scraper_api",
    domain: "https://github.com/MohammedDChowdhury/amazon_scraper_api",
  },
  {
    id: 4,
    image: IMG4,
    title:
      "Currency Convertor - a Web Tool allowing the quick conversion of any currency into any other currency!",
    github: "https://github.com/MohammedDChowdhury/currency-conversion-app",
    domain: "https://practical-allen-9cfada.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title:
      "Task Manager - A Web Application to maintain your day-to-day tasks or list of everything that you have to do!",
    github: "https://github.com/MohammedDChowdhury/fullstack-pern-todo-list",
    domain: "https://competent-nobel-ee695d.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title:
      "An E-Commerce Mobile UI Application built using React Native CLI - Available for download on Android!",
    github: "https://github.com/MohammedDChowdhury/EcomApp",
    domain: "https://github.com/MohammedDChowdhury/EcomApp",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>
      <div className="container projects__container">
        {data.map(({ id, image, title, github, domain }) => {
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
                <a href={domain} className="btn btn-primary">
                  Domain
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
