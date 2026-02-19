import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Archiv Agency</h3>
          <p>Your Trusted Partner for Unforgettable Travel Experiences</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/tourguide">Tour Guide</Link>
          <Link to="/services">Services</Link>
          <Link to="/packages">Tour Packages</Link>
        </div>

        <div className="footer-col">
          <h4>More</h4>
          <Link to="/vehicles">Vehicles</Link>
          <Link to="/honeymoon">Honeymoon Offers</Link>
          <Link to="/booking">Booking</Link>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-col">
          <h4>Connect With Us</h4>
          <div className="social-icons" aria-label="Social links">
            <span aria-label="Facebook">{"\uD83D\uDCD8"}</span>
            <span aria-label="Instagram">{"\uD83D\uDCF8"}</span>
            <span aria-label="X">{"\u274C"}</span>
            <span aria-label="YouTube">{"\u25B6"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
