import React, { useState } from "react";
import logo from "./Emblem_of_Sri_Lanka.svg";
import "./CSS_files/Main_loggin.css";

function Loggin() {
  const [form, setForm] = useState({
    email: "",
    nic: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="loggin-page">
      {/*Left*/}
      <div className="loggin-left">
        <img src={logo} alt="Logo" className="loggin-logo" />
        <h1 className="loggin-title">
          GOV-HOSPITAL <br />
          HEALTHCARE <br />
          SYSTEM
        </h1>
      </div>

      {/*Right*/}
      <div className="loggin-right">
        <div className="lang-select">
          English{" "}
          <span>
            LK<span>&#9660;</span>
          </span>
        </div>
        <h2 className="create-title">Create Account</h2>

        <button className="google-btn">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google"
          />
          Sign in Google
        </button>

        <div className="divider">OR</div>

        <div className="form-container">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nic"
            placeholder="National id number/driving card num"
            value={form.nic}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="mobile num"
            value={form.phone}
            onChange={handleChange}
          />
          <div className="create-acc">
            <button className="create-btn">Create Account</button>
          </div>
          <div className="footer-text">
            Already Have a Account ?{" "}
            <a href="/login" className="signin-link">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loggin;
