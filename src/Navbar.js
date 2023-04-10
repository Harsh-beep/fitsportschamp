import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        My Website
      </Link>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/about" className="navbar-item">
          About
        </Link>
        <Link to="/services" className="navbar-item">
          Services
        </Link>
        <Link to="/contact" className="navbar-item">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
