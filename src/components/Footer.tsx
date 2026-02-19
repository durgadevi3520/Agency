import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LEFT */}
        <div className="footer-col">
          <h3>Archiv Agency</h3>
          <p>Your Trusted Partner for Unforgettable Travel Experiences</p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/tour-guide">Tour Guide</a>
          <a href="/services">Services</a>
          <a href="/packages">Tour Packages</a>
        </div>

        {/* MORE */}
        <div className="footer-col">
          <h4>More</h4>
          <a href="/vehicles">Vehicles</a>
          <a href="/honeymoon">Honeymoon Offers</a>
          <a href="/booking">Booking</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h4>Connect With Us</h4>

          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>❌</span>
            <span>▶</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
