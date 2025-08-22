import "./Selectpath.css";
function SelectPath() {
  return (
    <div className="All-container">
      <div className="opd-container">
        <h1 className="header">Check OPD</h1>
        <p className="para">
          See your OPD appointment details and easily book a time and number to
          visit the doctor without waiting or getting tired.
        </p>
        <input type="submit" className="button" value="View OPD" />
      </div>
      <div className="register-container">
        <h1 className="header">Register Now</h1>
        <p className="para">
          Enter your details to registration. This helps us get ready your visit
          and make everything run smoothly
        </p>
        <input type="submit" className="button" value="Register OPD" />
      </div>
      <div className="clinic-container">
        <h1 className="header">Clinic Access</h1>
        <p className="para">
          See all your upcoming appointments in one place. Know your visit dates
          and locations to get care on time
        </p>
        <input type="submit" className="button" value="Clinic" />
      </div>
    </div>
  );
}
export default SelectPath;
