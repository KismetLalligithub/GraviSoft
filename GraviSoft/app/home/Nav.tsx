import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="GraviSoft\app\home\Home.tsx" className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a href="link here" className="nav-item">
            About
          </a>
        </li>
        <li>
          <a href="link here" className="nav-item">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
