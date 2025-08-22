function SelectPath() {
  return (
    <div className="All-container">
      <div className="View-opd">
        <h1 className="View-opd-header">Check OPD</h1>
        <p className="View-opd-p">
          See your OPD appointment details and easily book a time and number to
          visit the doctor without waiting or getting tired.
        </p>
        <input type="submit" className="View-opd-button" value="View OPD" />
      </div>
      <div className="Register-opd">
        <h1 className="Register-opdr">Check OPD</h1>
        <p className="Register-opd-p">
          Enter your details to registration. This helps us get ready your visit
          and make everything run smoothly
        </p>
        <input type="submit" className="Register-opd-button" value="View OPD" />
      </div>
      <div className="Clinic">
        <h1 className="Clinic-header">Check OPD</h1>
        <p className="Clinic-p">
          See all your upcoming appointments in one place. Know your visit dates
          and locations to get care on time
        </p>
        <input type="submit" className="Clinic-button" value="View OPD" />
      </div>
    </div>
  );
}
export default SelectPath;
