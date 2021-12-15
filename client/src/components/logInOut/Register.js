import React, { useState } from "react";
import "./log.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../JS/userSlice/userSlice";
const Register = () => {
  const navigate = useNavigate();
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div className="body-form">
      <img
        src="https://www.downloadclipart.net/large/happy-girl-png-file.png"
        alt="register"
      />
      <div className="register-form log">
        <h1>Register </h1>
        <form onSubmit={(e) => e.preventDefault()} className="signup">
          <input
            type="text"
            required
            placeholder="Please fill in your  name..."
            onChange={(e) => setregister({ ...register, name: e.target.value })}
          />
          <input
            type="text"
            required
            placeholder="Please fill in your  lastname..."
            onChange={(e) =>
              setregister({ ...register, lastname: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="example@gmail.com..."
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
          />
          <input
            type="password"
            required
            placeholder="Please fill in your password..."
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              dispatch(userRegister(register));
              setTimeout(() => {
                navigate("/profile");
              }, 1000);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
          >
            Sign Up
          </button>
          <h5>Or</h5>
          <button>Sign Up with Gmail</button>
          <p>
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>

          <h6>
            Have an account <Link to="/login"> Log In</Link>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Register;
