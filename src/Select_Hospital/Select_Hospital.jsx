import { useState } from "react";
import "./Select_Hospital.css";
function Select_Hospital() {
  const [hospital, setHospital] = useState("");

  const handleChange = (e) => {
    setHospital(e.target.value);
  };

  return (
    <div className="Select_Hospital">
      <div className="Title">Select Your Hospital</div>
      <select value={hospital} onChange={handleChange}>
        <option value=""> Select a hospital </option>{" "}
        <option value="Matra Hospital">Matra Hospital</option>
        <option value="Galle Hospital">Galle Hospital</option>
        <option value="Hambanthota Hospital">Hambanthota Hospital</option>
        <option value="Tangalle Hospital">Tangalle Hospital</option>
        <option value="Colombo Hospital">Colombo Hospital</option>
        <option value="Kandy Hospital">Kandy Hospital</option>
        <option value="RAgama Hospital">RAgama Hospital</option>
      </select>
      <div className="hos_name">{hospital}</div>
    </div>
  );
}

export default Select_Hospital;
