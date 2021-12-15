import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="section s1">
          <h3>Happy Travelling</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium asperiores pariatur ut inventore quod excepturi quae
            quaerat eligendi placeat explicabo. Fugiat alias mollitia
            perspiciatis adipisci commodi! Modi dolore sed dolores. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Praesentium asperiores
            pariatur ut inventore quod excepturi quae quaerat eligendi placeat
            explicabo.
          </p>
        </div>
        <div className="section s2">
          <h3>Helpful links</h3>
          <Link className="link" to="/">
            <p>Home</p>
          </Link>
          <Link className="link" to="/Stories">
            <p>Stories</p>
          </Link>
          <Link className="link" to="/Posts">
            <p>Posts</p>
          </Link>
          <Link className="link" to="/Contact">
            <p>Contact</p>
          </Link>
        </div>
        <div className="section s3">
          <h3>Contact</h3>

          <p>9, Rue de la Republique</p>

          <p>Gabes, 6000</p>

          <p>(+216) 21 122 439</p>

          <p>feriel.jabri@yahoo.fr</p>
        </div>
      </div>
      <div className="footer2">
        <p>All rights reserved @HappyTravelling-By Feriel Jabri 2021</p>
      </div>
    </div>
  );
};

export default Footer;
