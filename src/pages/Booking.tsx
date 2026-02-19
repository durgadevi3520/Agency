import { FormEvent, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/booking.css";

type BookingForm = {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travelers: string;
  requests: string;
};

const initialForm: BookingForm = {
  fullName: "",
  email: "",
  phone: "",
  destination: "",
  travelDates: "",
  travelers: "",
  requests: "",
};

export default function Booking() {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.destination.trim() ||
      !form.travelDates.trim() ||
      !form.travelers.trim()
    ) {
      setSuccessMessage("");
      setErrorMessage("Please fill all required fields before submitting.");
      return;
    }

    if (Number(form.travelers) < 1) {
      setSuccessMessage("");
      setErrorMessage("Number of travelers must be at least 1.");
      return;
    }

    setErrorMessage("");
    setSuccessMessage("Booking request submitted successfully. Our team will contact you shortly.");
    setForm(initialForm);
  };

  return (
    <>
      <Navbar />

      <section className="booking-page">
        <h1>Book Your Journey</h1>
        <p className="subtitle">Complete the form below to reserve your travel experience</p>

        <div className="booking-container">
          <div className="booking-form-card">
            <h3>Booking Details</h3>
            <p>Please provide your information and travel preferences</p>

            <form className="booking-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="fullName">Full Name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={form.fullName}
                onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                required
              />

              <div className="row">
                <div>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    required
                  />
                </div>
              </div>

              <label htmlFor="destination">Package or Destination *</label>
              <input
                id="destination"
                name="destination"
                type="text"
                placeholder="e.g., European Adventure"
                value={form.destination}
                onChange={(event) => setForm({ ...form, destination: event.target.value })}
                required
              />

              <div className="row">
                <div>
                  <label htmlFor="travelDates">Preferred Travel Dates *</label>
                  <input
                    id="travelDates"
                    name="travelDates"
                    type="text"
                    placeholder="e.g., June 15-25, 2026"
                    value={form.travelDates}
                    onChange={(event) => setForm({ ...form, travelDates: event.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="travelers">Number of Travelers *</label>
                  <input
                    id="travelers"
                    name="travelers"
                    type="number"
                    min={1}
                    placeholder="2"
                    value={form.travelers}
                    onChange={(event) => setForm({ ...form, travelers: event.target.value })}
                    required
                  />
                </div>
              </div>

              <label htmlFor="requests">Special Requests or Notes</label>
              <textarea
                id="requests"
                name="requests"
                placeholder="Any travel restrictions, accessibility needs, or special occasions..."
                value={form.requests}
                onChange={(event) => setForm({ ...form, requests: event.target.value })}
              />

              {errorMessage && (
                <p className="form-message form-message-error" role="alert">
                  {errorMessage}
                </p>
              )}
              {successMessage && (
                <p className="form-message form-message-success" role="status">
                  {successMessage}
                </p>
              )}

              <button type="submit">Submit Booking Request</button>
            </form>
          </div>

          <div className="booking-side">
            <div className="payment-card">
              <h3>Payment Method</h3>
              <p>Scan the QR code to make payment</p>
              <h4>Scan to Pay</h4>
              <div className="qr-box">
                <img src="/images/qr.png" alt="QR code for payment" />
              </div>
              <small>Scan this QR code with any UPI app to make payment</small>
            </div>

            <div className="contact-card">
              <h3>Contact Us</h3>
              <p>Prefer to book directly? Reach out to us</p>

              <div className="contact-item">
                <span>{"\uD83D\uDCDE"}</span>
                <div>
                  <strong>Phone</strong>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="contact-item">
                <span>{"\uD83D\uDCAC"}</span>
                <div>
                  <strong>WhatsApp</strong>
                  <a className="whatsapp-btn" href="https://wa.me/15551234567" target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span>{"\u2709"}</span>
                <div>
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
