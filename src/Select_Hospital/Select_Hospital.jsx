import { useState } from "react";
import "./Select_Hospital.css";
function Select_Hospital() {
  const [hospital, setHospital] = useState("");

  const handleChange = (e) => {
    setHospital(e.target.value);
  };

  return (
    <div className="Select_Hospital">
      <div className="Card">
        <div className="card-content">
          <div className="Title">
            <h1>Select Your Hospital</h1>
          </div>
          <select className="select" value={hospital} onChange={handleChange}>
            <option value="" className="option">
              {" "}
              Select a hospital{" "}
            </option>{" "}
            <option value="Matra Hospital" className="option">
              Matra Hospital
            </option>
            <option value="Galle Hospital" className="option">
              Galle Hospital
            </option>
            <option value="Hambanthota Hospital" className="option">
              Hambanthota Hospital
            </option>
            <option value="Tangalle Hospital" className="option">
              Tangalle Hospital
            </option>
            <option value="Colombo Hospital" className="option">
              Colombo Hospital
            </option>
            <option value="Kandy Hospital" className="option">
              Kandy Hospital
            </option>
            <option value="RAgama Hospital" className="option">
              RAgama Hospital
            </option>
          </select>
          <div className="hos_name">{hospital}</div>
        </div>
      </div>
    </div>
  );
}

export default Select_Hospital;
