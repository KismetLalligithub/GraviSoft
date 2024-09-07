import React from "react";
import "./sidebar-menu-icon.css";

interface SidebarMenuIconProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const SidebarMenuIcon: React.FC<SidebarMenuIconProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <div className="menu-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
      <div className={`menu-line ${sidebarOpen ? "open" : ""}`}></div>
      <div className={`menu-line ${sidebarOpen ? "open" : ""}`}></div>
      <div className={`menu-line ${sidebarOpen ? "open" : ""}`}></div>
    </div>
  );
};

export default SidebarMenuIcon;
