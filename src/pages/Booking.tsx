import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/booking.css";

export default function Booking() {
  return (
    <>
      <Navbar />

      <section className="booking-page">
        <h1>Book Your Journey</h1>
        <p className="subtitle">
          Complete the form below to reserve your travel experience
        </p>

        <div className="booking-container">
          {/* LEFT – FORM */}
          <div className="booking-form-card">
            <h3>Booking Details</h3>
            <p>Please provide your information and travel preferences</p>

            <form>
              <label>Full Name *</label>
              <input type="text" placeholder="John Doe" />

              <div className="row">
                <div>
                  <label>Email Address *</label>
                  <input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label>Phone Number *</label>
                  <input type="text" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <label>Package or Destination *</label>
              <input type="text" placeholder="e.g., European Adventure" />

              <div className="row">
                <div>
                  <label>Preferred Travel Dates *</label>
                  <input type="text" placeholder="e.g., June 15-25, 2026" />
                </div>

                <div>
                  <label>Number of Travelers *</label>
                  <input type="number" placeholder="2" />
                </div>
              </div>

              <label>Special Requests or Notes</label>
              <textarea placeholder="Any travel restrictions, accessibility needs, or special occasions..."></textarea>

              <button type="submit">Submit Booking Request</button>
            </form>
          </div>

          {/* RIGHT */}
          <div className="booking-side">
            {/* Payment */}
            <div className="payment-card">
              <h3>Payment Method</h3>
              <p>Scan the QR code to make payment</p>

              <h4>Scan to Pay</h4>

              <div className="qr-box">
                <img src="/images/qr.png" alt="QR Code" />
              </div>

              <small>
                Scan this QR code with any UPI app to make payment
              </small>
            </div>

            {/* Contact */}
            <div className="contact-card">
              <h3>Contact Us</h3>
              <p>Prefer to book directly? Reach out to us</p>

              <div className="contact-item">
                📞 <div>
                  <strong>Phone</strong>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="contact-item">
                💬 <div>
                  <strong>WhatsApp</strong>
                  <button className="whatsapp-btn">
                    Chat on WhatsApp
                  </button>
                </div>
              </div>

              <div className="contact-item">
                ✉ <div>
                  <strong>Email</strong>
                  <span>booking@archivagency.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
