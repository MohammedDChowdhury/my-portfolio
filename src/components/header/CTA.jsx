import React from "react";
import CV from "../../assets/Mohammed-Front-End-Developer-CV.docx";
export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact me
      </a>
    </div>
  );
}
