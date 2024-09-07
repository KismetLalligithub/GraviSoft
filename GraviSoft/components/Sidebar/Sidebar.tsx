import React, { useState } from "react";
import "./sidebar.css";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
    <div className={`sidebar ${!isOpen ? 'close' : ''}`}>
        
    </div>
  );
};

export default Sidebar;
