import React from "react";
import { SiGnuprivacyguard } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import { BsFlag } from "react-icons/bs";
import "./about.css";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const About = () => {
  return (
    <div className="about-containerr">
      <img className="image-quote" src="/images/quote2.png" alt="quote" />
      <div className="happy-desc">
        <h2 className="title-about">
          <span>W</span>ho <span>are</span> we <span>?</span>{" "}
        </h2>
        <h2>Happy Travelling</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          accusantium aliquid in. Recusandae, necessitatibus iusto dicta ullam
          iste soluta deserunt ea porro explicabo non? Perspiciatis delectus
          ipsam molestias labore eum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias accusantium aliquid in. Recusandae,
          necessitatibus iusto dicta ullam iste soluta deserunt ea porro
          explicabo non? Perspiciatis delectus ipsam molestias labore eum.
        </p>
      </div>

      <div className="about-section">
        <div className="about-happyT">
          <img className="image-quote" src="/images/quote3.png" alt="" />
          <div className="photoos">
            <img className="ferii" src="/images/feriel.jpg" alt="" />

            <img className="ferii" src="/images/feriel.jpg" alt="" />

            <img className="ferii" src="/images/feriel.jpg" alt="" />

            <img className="ferii" src="/images/feriel.jpg" alt="" />

            <img className="ferii" src="/images/feriel.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="happy-values">
        <h2 className="title-about">
          <span>O</span>ur <span>Valu</span>es <span>?</span>{" "}
        </h2>
        <div className="value-boxes">
          <div className="value-box">
            <SiGnuprivacyguard className="values-icon" />
            <h3>Privacy</h3>
            <p>
              When it comes to your data, your privacy is our top priority. If
              it wasn’t, we’d all quit.
            </p>
          </div>
          <div className="value-box">
            <GiHeartBeats className="values-icon" />
            <h3>Passion</h3>
            <p>
              We are passionate about supporting each other, our users, and our
              product.
            </p>
          </div>
          <div className="value-box">
            <BsFlag className="values-icon" />
            <h3>Integrity</h3>
            <p>
              We’ll always do our work honestly. When we make mistakes, we’ll
              apologize and focus on making things right. We’ll always learn
              from our mistakes.
            </p>
          </div>
        </div>
      </div>
      <h2 className="title-about fer">
        <span>W</span>ho <span>are</span> we <span>?</span>{" "}
      </h2>
      <div className="about-feriel">
        <div className="feri-info">
          <h2>
            <span>F</span>eriel <span>J</span>abri
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            sequi, obcaecati debitis ipsam voluptates nulla iure voluptate in
            culpa.
          </p>
          <div className="follow-me">
            <h4>Follow me :</h4>
            <div className="media">
              <a href="https://www.facebook.com/ange.f.tunisie/">
                <ImFacebook2 />
              </a>
              <a href="https://www.instagram.com/feri878/?hl=fr">
                <BsInstagram />
              </a>
              <a href="https://www.linkedin.com/in/feriel-jabri/">
                <ImLinkedin />
              </a>
            </div>
          </div>
          <div className="contact-me">
            <h4>Contact-me</h4>
            <div className="media2">
              <h5>
                <MdAlternateEmail className="about-icon" />
                Email: feriel.jabri@yahoo.fr
              </h5>
              <h5>
                <FaPhoneAlt className="about-icon" />
                Phone: (+216) 21 122 439
              </h5>
            </div>
          </div>
        </div>
        <img className="feriel" src="/images/feriel.jpg" alt="" />
      </div>
      <div className="btns-bar">
        <Link className="link" to="/">
          <button> Home</button>
        </Link>
        <Link className="link" to="/stories">
          <button>Stories</button>
        </Link>
        <Link className="link" to="/posts">
          <button>Posts</button>
        </Link>
        <Link className="link" to="/meet">
          <button>Meet Up</button>
        </Link>
        <Link className="link" to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
