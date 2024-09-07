import React, { useState } from "react";
import "./navbar.css";
import SidebarMenuIcon from "../util/sidebar-menu-icon/sidebar-menu-icon";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-right">
          <div className="sidebar-icon">
            <SidebarMenuIcon
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </div>
          <div className="navbar-brand">
            <h3>GraviSoft<span>AI</span></h3>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="\" className="nav-item">
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
      </div>
    </nav>
  );
};

export default Navbar;
