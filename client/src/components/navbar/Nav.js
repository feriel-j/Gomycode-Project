import React, { useEffect } from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import { logout, userCurrent } from "../../JS/userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";
import { TiInfoLarge } from "react-icons/ti";
import { GiBurningBlobs } from "react-icons/gi";
import { FaRegComments } from "react-icons/fa";
import { FaMeetup } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";

const Nav = ({ ping, setping }) => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);

  return (
    <div className="header">
      <div className="nav1">
        <div className="subnav">
          <Link className="link" to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          <button>
            <input placeholder="Search you option" />
            <img src="/icons/search.svg" alt="search" />
          </button>
          <div className="social-menu">
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
      </div>
      <div className="nav2">
        <ul className="nav">
          <Link className="link" to="/">
            <span>
              <AiFillHome className="ic" />
              Home
            </span>
          </Link>
          <Link className="link" to="/about">
            <span>
              <TiInfoLarge className="ic" />
              About
            </span>
          </Link>
          <Link className="link" to="/stories">
            <span>
              <GiBurningBlobs className="ic" />
              Stories
            </span>
          </Link>
          <Link className="link" to="/posts">
            <span>
              <FaRegComments className="ic" />
              Posts
            </span>
          </Link>
          <Link className="link" to="meet">
            <span>
              <FaMeetup className="ic" />
              Meet Up
            </span>
          </Link>
          <Link className="link" to="contact">
            <span>
              <MdOutlineContactPage className="ic" />
              Contact
            </span>
          </Link>
        </ul>

        {isAuth ? (
          <>
            <button
              onClick={() => {
                navigate("/profile");
              }}
              className="signn"
            >
              Profil
            </button>
            <button
              onClick={() => {
                dispatch(logout());
                setping(!ping);
              }}
              className="log-drop"
            >
              Logout
            </button>

            {user?.isAdmin ? (
              <button
                onClick={() => {
                  navigate("/dashbord");
                }}
                className="log-drop"
              >
                Dashboard
              </button>
            ) : null}
          </>
        ) : (
          <div className="sign-bt">
            <Link className="link" to="login">
              <button className="signnn">Sign In</button>
            </Link>
            <Link className="link" to="register">
              <button className="regist">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
