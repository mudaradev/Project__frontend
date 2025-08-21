import "./CSS_files/Navbar.css";
import logo from "./Emblem_of_Sri_Lanka.svg";

const UserIcon = () => (
  <svg
    height="20"
    width="20"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    style={{ verticalAlign: "middle" }}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
  </svg>
);

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
          <div className="navbar-title-group">
            <span className="navbar-title">GOV-HOSPITAL</span>
            <span className="navbar-subtitle">HEALTHCARE SYSTEM</span>
          </div>
        </div>
      </div>

      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">Register Opd</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">View Opd</a>
        </li>
      </ul>
      <div className="navbar-right">
        <span className="navbar-lang">English LK</span>
        <span className="navbar-user-icon">
          <UserIcon />
        </span>
      </div>
    </nav>
  );
}
export default Navbar;
