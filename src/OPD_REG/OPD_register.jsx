import leftimage from "./leftimg.jpg";
import "./OPD_register.css";

function OPD_register() {
  return (
    <div className="container">
      <div className="left-image">
        <img src={leftimage} alt="Left Image" />
      </div>
      <div className="right-form">
        <div className="up-link">
          <a href="/" className="home">
            Home
          </a>
          <a href="/Select_path" className="clinic">
            Clinic
          </a>
        </div>
        <div className="form-container">
          <input type="date" className="date" />
        </div>
        <div className="buttons">
          <button className="new-patient">Register Me</button>
          <button className="old-patient">Register Another Patient</button>
        </div>
      </div>
    </div>
  );
}
export default OPD_register;
