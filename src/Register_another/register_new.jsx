import React, { useState } from "react";
import "./Register_another.css";
import image from "./image.jpg";

function Register_another() {
  const [form, setForm] = useState({
    NIC: "",
    Name: "",
    Age: "",
    Mobile: "",
    Your_relation: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-page">
      {/* Left */}
      <div className="register-left">
        <img src={image} alt="Logo" className="image" />
      </div>

      {/* Right */}
      <div className="register-right">
        <div className="lang-select">
          English{" "}
          <span>
            LK <span>&#9660;</span>
          </span>
        </div>
        <h2 className="title">Register Another Patient</h2>

        <div className="form-container">
          <input
            type="text"
            name="NIC"
            placeholder="National ID Number"
            value={form.NIC}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={form.Name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Age"
            placeholder="Age"
            value={form.Age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Mobile"
            placeholder="Mobile Number"
            value={form.Mobile}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Your_relation"
            placeholder="Your Relation"
            value={form.Your_relation}
            onChange={handleChange}
          />

          <div className="btn-container">
            <button className="btn">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register_another;
