import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/navbar.css";

export default function Navbar() {
  const { theme, colorPalette, setTheme, setColorPalette } = useTheme();
  const [showColorPalette, setShowColorPalette] = useState(false);

  const colors = ["purple", "orange", "blue", "green", "red"];

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo-wrap">
        <img src="/images/logo.png" alt="Archiv logo" className="logo-img" />
        <h2 className="logo">Archiv</h2>
      </Link>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/tourguide">Tour Guide</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/packages">Packages</Link>
        </li>

        <li>
          <Link to="/vehicles">Vehicles</Link>
        </li>

        <li>
          <Link to="/honeymoon">Honeymoon Offers</Link>
        </li>
      </ul>

      {/* COLOR PALETTE BUTTON */}
      <div className="color-palette-container">
        <button 
          className="color-palette-btn"
          onClick={() => setShowColorPalette(!showColorPalette)}
          title="Change color scheme"
        >
          🎨
        </button>
        
        {showColorPalette && (
          <div className="color-palette-dropdown">
            {colors.map((color) => (
              <button
                key={color}
                className={`color-option ${colorPalette === color ? "active" : ""}`}
                style={{ backgroundColor: getColorValue(color) }}
                onClick={() => {
                  setColorPalette(color);
                  setShowColorPalette(false);
                }}
                title={color}
              />
            ))}
          </div>
        )}
      </div>

      {/* THEME TOGGLE */}
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* BOOK BUTTON */}
      <Link to="/booking" className="nav-btn">
        Book Now
      </Link>
    </nav>
  );
}

function getColorValue(color: string): string {
  const colorMap: Record<string, string> = {
    purple: "#6c4cf1",
    orange: "#ff8c42",
    blue: "#2563eb",
    green: "#16a34a",
    red: "#dc2626",
  };
  return colorMap[color] || "#6c4cf1";
}
