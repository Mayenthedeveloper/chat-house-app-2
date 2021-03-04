import React, { useState } from "react";
import registerImage from "../../assets/images/register.png";
import { Link } from "react-router-dom";
import "./Auth.scss";

const Register = () => {
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={registerImage} alt="login" />
          </div>
          <div id="form-section">
            <h2>Create an account</h2>
            <form>
              <div className="input-field mb-1">
                <input placeholder="First name" />
              </div>
              <div className="input-field mb-1">
                <input placeholder="Last name" />
              </div>
              <div className="input-field mb-1">
                <input placeholder="Email" />
              </div>
              <div className="input-field mb-1">
                <select>
                  <option value="male">Male</option>
                  <option value="male">Female</option>
                </select>
              </div>
              <div className="input-field mb-1">
                <input placeholder="Password" />
              </div>
              <button>Register</button>
            </form>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
