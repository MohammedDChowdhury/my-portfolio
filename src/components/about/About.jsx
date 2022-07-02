import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GiGraduateCap } from "react-icons/gi";

export default function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 Years of Web Development</small>
            </article>
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Graduate in Software Engineering (BEng)</h5>
              <small>Upper Second-Class Honours (2:1)</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>About More</h5>
              <small>
                A enthusiastic Front-End Developer passionate about building and
                designing websites to the next level
              </small>
            </article>
          </div>
          <p>
            A enthusiastic Front-End Developer passionate about building and
            designing websites to a new level in order to enhance
            user-experience
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
