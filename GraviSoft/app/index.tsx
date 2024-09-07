import React, { useState, useEffect } from "react";
import "./home.css"; // Import the CSS file

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);
      if (scrollTop > 50) {
        // Adjust scroll threshold as needed
        setOverlayVisible(false);
      } else {
        setOverlayVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="home">
      {/* Section 1: Welcome */}
      {overlayVisible && (
        <div
          className="welcome-overlay"
          style={{
            transform: `translateY(${Math.min(scrollY, 50)}px)`,
            opacity: Math.max(1 - scrollY / 50, 0),
          }}
        >
          <h1 className="overlay-text">Welcome</h1>
          <p className="overlay-subtext">Explore our mission and vision</p>
        </div>
      )}
      {/* Section 2: Company Info */}
      <div className="home-section2">
        Home 2
      </div>
    </div>
  );
};

export default Home;
