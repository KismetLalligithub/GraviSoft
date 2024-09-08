import React, { useState } from "react";
import "./navbar.css";
import SidebarMenuIcon from "../util/sidebar-menu-icon/sidebar-menu-icon";

interface DropdownState {
  products: boolean;
  pricing: boolean;
}

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    products: false,
    pricing: false
  });

  const toggleDropdown = (menu: keyof DropdownState) => {
    setDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <div className="sidebar-icon">
            <SidebarMenuIcon
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </div>
          <div className="navbar-brand">
            <h3>
              GraviSoft<span>AI</span>
            </h3>
          </div>
          <ul className="nav-links-left">
            <li className="dropdown">
              <a
                href="#"
                className="nav-item"
                onClick={() => toggleDropdown('products')}
              >
                Products
                <span className={`chevron ${dropdownOpen.products ? 'rotate' : ''}`}>▼</span>
              </a>
              {dropdownOpen.products && (
                <ul className="dropdown-menu">
                  <li><a href="#product1">Product 1</a></li>
                  <li><a href="#product2">Product 2</a></li>
                </ul>
              )}
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="nav-item"
                onClick={() => toggleDropdown('pricing')}
              >
                Pricing
                <span className={`chevron ${dropdownOpen.pricing ? 'rotate' : ''}`}>▼</span>
              </a>
              {dropdownOpen.pricing && (
                <ul className="dropdown-menu">
                  <li><a href="#basic">Basic Plan</a></li>
                  <li><a href="#premium">Premium Plan</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <ul className="nav-links-right">
          <li>
            <a href="link here" className="nav-item">Login</a>
          </li>
          <li>
            <a href="link here" className="nav-item contact">Contact</a>
          </li>
          <li>
            <a href="link here" className="nav-item-register">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
