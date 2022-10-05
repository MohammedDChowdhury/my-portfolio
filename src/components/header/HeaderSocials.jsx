import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mohammed-chowdhury-917127200/"
        target="_blank"
      >
        <BsLinkedin />{" "}
      </a>
      <a href="https://github.com/MohammedDChowdhury" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/lMohammedCl" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
}
