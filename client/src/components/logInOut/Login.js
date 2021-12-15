import React, { useState } from "react";
import "./log.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../JS/userSlice/userSlice";

const Login = () => {
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  return (
    <div className="body-form body-f">
      <div className="register-form logF">
        <h1>Log In </h1>
        <form onSubmit={(e) => e.preventDefault()} className="signup">
          <input
            type="email"
            required
            placeholder="example@gmail.com..."
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
          />
          <input
            type="password"
            required
            placeholder="Please fill in your address..."
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
          />
          <button
            onClick={() => {
              dispatch(userLogin(login));

              setTimeout(() => {
                navigate("/profile");
              }, 1000);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
          >
            Log In
          </button>
          <h5>Or</h5>
          <button>Log In with Gmail</button>
          <p className="pass">Forgot your password?</p>
          <br />
          <h6>
            Don't Have an account <Link to="/register">Register now</Link>
          </h6>
          <br />
        </form>
      </div>
      <img
        className="log-photo"
        src="http://i1.wp.com/praetourism.com/wp-content/uploads/2017/11/flight-ticket.png"
        alt="register"
      />
    </div>
  );
};

export default Login;
