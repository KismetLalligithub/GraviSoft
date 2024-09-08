import React, { useState, useEffect } from "react";
import "./home.css"; // Import the CSS file

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  // Track scroll position
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Determine if the user is scrolling down or up
    setIsScrollingDown(currentScrollY > scrollY);
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const overlayOpacity = Math.max(1 - scrollY / 300, 0);
  const overlayHeight = Math.max(100 - scrollY / 4, 0);

  return (
    <div className="home">
      {/* Section 1: Welcome (Overlay Section) */}
      <div
        className="welcome-overlay"
        style={{
          opacity: overlayOpacity,
          height: overlayHeight + "vh",
          transition: isScrollingDown
            ? "opacity 0.3s ease, height 0.4s ease"
            : "opacity 0.2s ease, height 0s ease",
        }}
      >
        <span>AI</span>
        <h1 className="overlay-text">Transforming Game Design</h1>
        <p className="overlay-subtext">Explore our mission and vision</p>
      </div>

      {/* Section 2: Company Info */}
      <div className="home-section section2">
        <div className="section2-inner">
          <div className="section2-left">

          </div>
          <div className="section2-right">

          </div>
        </div>
       </div>

      {/* Section 3: Projects */}
      <div className="home-section section3">
        Home 3: Projects
      </div>

      {/* Section 4: Contact */}
      <div className="home-section section4">
        Home 4: Contact Us
      </div>
    </div>
  );
};

export default Home;
