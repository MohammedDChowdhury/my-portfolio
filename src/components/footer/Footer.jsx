import React from "react";
import "./footer.css";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        MC
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohammed-chowdhury-917127200">
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/MohammedDChowdhury">
          <IoLogoGithub />
        </a>
        <a href="https://twitter.com/lMohammedCl">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MC. All Rights reserved</small>
      </div>
    </footer>
  );
}
