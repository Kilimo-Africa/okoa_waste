import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link id="logo" to="/">
        <span id="logo-title">Okoa Organics</span>
        <span id="logo-phrase">COLLECT SORT DECOMPOSE</span>
      </Link>
      
      <div id="nav-info">
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div id="auth-login">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}
