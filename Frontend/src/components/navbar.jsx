import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        <span className="logo-icon">✦</span>
        <span>CodeDoc AI</span>
        <p>hiii</p>
      </Link>

      <div className="navbar-links">

        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/documentation" className="nav-link">
          Documentation
        </Link>

        <Link to="/explorer" className="nav-link">
          Code Explorer
        </Link>

        <Link to="/about" className="nav-link">
          About
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;