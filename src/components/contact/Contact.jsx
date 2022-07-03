import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const SendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_v9jpy0a",
      "template_8tytd1k",
      form.current,
      "MuZeJXYD6mwFOcwaT"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      Contact
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>d2018c@gmail.com</h5>
            <a href="mailto:d2018c@gmail.com">Send a message </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Mobile</h4>
            <h5>+44 7568736973</h5>
            <a href="https://api.whatsapp.com/send?phone=07568736973">
              Send a message{" "}
            </a>
          </article>{" "}
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>MC</h5>
            <a href="https://www.linkedin.com/in/mohammed-chowdhury-917127200/">
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={SendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
