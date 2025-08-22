import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import Navbar from "./Navbar";
//import Loggin from "./Main_loggin";
import PatientSignin from "./Patient_signin/Patient_signin";
//import SelectPath from "./Select_path/Select-path.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PatientSignin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
