import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/navbar.css";

export default function Navbar() {
  const { theme, colorPalette, setTheme, setColorPalette } = useTheme();
  const [showColorPalette, setShowColorPalette] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const colors = ["purple", "orange", "blue", "green", "red"];

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setShowColorPalette(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-wrap" onClick={closeMenus}>
        <img src="/images/logo.png" alt="Archiv logo" className="logo-img" />
        <h2 className="logo">Archiv</h2>
      </Link>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="primary-navigation"
      >
        {isMobileMenuOpen ? "\u2715" : "\u2630"}
      </button>

      <ul id="primary-navigation" className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenus}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenus}>About</Link>
        </li>
        <li>
          <Link to="/tourguide" onClick={closeMenus}>Tour Guide</Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenus}>Services</Link>
        </li>
        <li>
          <Link to="/packages" onClick={closeMenus}>Packages</Link>
        </li>
        <li>
          <Link to="/vehicles" onClick={closeMenus}>Vehicles</Link>
        </li>
        <li>
          <Link to="/honeymoon" onClick={closeMenus}>Honeymoon Offers</Link>
        </li>
      </ul>

      <div className="nav-controls">
        <div className="color-palette-container">
          <button
            type="button"
            className="color-palette-btn"
            onClick={() => setShowColorPalette((prev) => !prev)}
            title="Change color scheme"
            aria-label="Change color scheme"
          >
            {"\uD83C\uDFA8"}
          </button>

          {showColorPalette && (
            <div className="color-palette-dropdown" role="menu" aria-label="Color palette options">
              {colors.map((color) => (
                <button
                  type="button"
                  key={color}
                  className={`color-option ${colorPalette === color ? "active" : ""}`}
                  style={{ backgroundColor: getColorValue(color) }}
                  onClick={() => {
                    setColorPalette(color);
                    setShowColorPalette(false);
                  }}
                  title={color}
                  aria-label={`Set ${color} color palette`}
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "\uD83C\uDF19" : "\u2600\uFE0F"}
        </button>

        <Link to="/booking" className="nav-btn" onClick={closeMenus}>
          Book Now
        </Link>
      </div>
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
