import React, { useState } from "react";
import logo from "./Emblem_of_Sri_Lanka.svg";
import "./CSS_files/Patient_signin.css";

function PatientSignin() {
  const [signin, setsignin] = useState({
    nic: "",
    password: "",
  });

  const handleChange = (e) => {
    setsignin({ ...signin, [e.target.name]: e.target.value });
  };

  return (
    <div className="signin-page">
      {/*Left*/}
      <div className="signin-left">
        <img src={logo} alt="Logo" className="signin-logo" />
        <h1 className="signin-title">
          GOV-HOSPITAL <br />
          HEALTHCARE <br />
          SYSTEM
        </h1>
      </div>

      {/*Right*/}
      <div className="signin-right">
        <div className="lang-select">
          English{" "}
          <span>
            LK<span>&#9660;</span>
          </span>
        </div>
        <div className="signin-container">
          <h2 className="create-title">Sign In</h2>

          <div className="form-container">
            <input
              type="text"
              name="nic"
              placeholder="National id number/driving card num"
              value={signin.nic}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signin.password}
              onChange={handleChange}
            />

            <div className="create-acc">
              <button className="create-btn">Signin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientSignin;
