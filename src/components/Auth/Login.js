import React, { useState } from "react";
import loginImage from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import "./Auth.scss";
import AuthService from "../../services/authService";

import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [password, setPassword] = useState("secret");

  const submitForm = (e) => {
    e.preventDefault();

    AuthService.login({ email, password }).then((res) => console.log(res));
    // axios
    //   .post("http://localhost:8000/login", { email, password })
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });

    console.log({ email, password });

    // dispatch(login({ email, password }, history));
  };

  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={loginImage} alt="login" />
          </div>
          <div id="form-section">
            <h2>Welcome back</h2>
            <form onSubmit={submitForm}>
              <div className="input-field mb-1">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required="required"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="input-field mb-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required="required"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button>LOGIN</button>
            </form>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
