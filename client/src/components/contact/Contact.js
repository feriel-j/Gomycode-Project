import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [result, showresult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_592dhy9",
        "template_5hqylrt",
        e.target,
        "user_t58H4ok3tTZVVwCco0CZy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <div className="contact-page">
      <img
        src="https://www.prodefence.org/wp-content/uploads/2019/11/contact_pdc.jpg"
        alt=""
      />
      <div className="contact-section">
        <h1>Contact Us</h1>
        <p>9, Rue de la Republique Gabes, 6000</p>
        <p>(+216) 21 122 439</p>
        <p>feriel.jabri@yahoo.fr</p>
        <p>
          <h2>Or Just By filling the Form</h2>
        </p>
      </div>

      <div className="form-zone">
        <form onSubmit={sendEmail}>
          <div className="text_field">
            <input type="text" name="fullname" required />
            <span></span>
            <label>Fullname</label>
          </div>
          <div className="text_field">
            <input type="email" name="email" required />
            <label>Email</label>
            <span></span>
          </div>
          <div className="text_field">
            <input
              type="text"
              name="message"
              required
              className="message-contact"
            />
            <span></span>

            <label>your message here</label>
          </div>
          {/* <button type="submit">Send Message</button> */}
          <input type="submit" value="Send Message" className="submit-input" />
          <div className="row">
            {result ? (
              <p>
                Your message has been successfully sent. we will contact you
                soon
              </p>
            ) : null}
          </div>
        </form>
      </div>
      <div className="social-menu con">
        <a href="https://www.facebook.com/ange.f.tunisie/">
          <img src="/icons/facebook.svg" alt="facebook" />
        </a>
        <a href="https://www.instagram.com/feri878/?hl=fr">
          <img src="/icons/instagram.svg" alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/in/feriel-jabri/">
          <img src="/icons/linkedin.svg" alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
