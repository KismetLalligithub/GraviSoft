import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import Navbar from '@/components/Navbar/Nav';
import './layout.css';
import Sidebar from '@/components/Sidebar/Sidebar';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const options = [
    {path: '/', label: 'Home' },
    {path: '/about-us', label: 'About Us' },
  ]

  return (
    <div className='layout'>
      <Navbar />
        <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      <Slot />
    </div>
  );
};

export default Layout;
