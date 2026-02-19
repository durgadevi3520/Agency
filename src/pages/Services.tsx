import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/services.css";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="srv-hero">
        <h1>Our Services</h1>
        <p>Comprehensive travel solutions for every journey</p>
      </section>

      {/* Illustration Banner */}
      <section className="srv-banner">
        <img
          src="/images/service.png"
          alt="Services Banner"
        />
        <div className="srv-banner-labels">
          <span>AIR TRAVEL</span>
          <span>LUXURY STAYS</span>
          <span>BESPOKE ITINERARIES</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="srv-main">
        <h2>Everything You Need for Your Perfect Trip</h2>
        <p className="srv-sub">
          From planning to execution, we handle every detail
        </p>

        <div className="srv-grid">
          <div className="srv-card">
            <div className="srv-icon">✈</div>
            <h3>Flight Booking</h3>
            <p>
              Access to competitive rates with major airlines worldwide. We find
              the best routes and prices for your travel dates, whether you're flying economy or first class.
            </p>
          </div>

          <div className="srv-card">
            <div className="srv-icon">🏨</div>
            <h3>Hotel Reservations</h3>
            <p>
              From luxury resorts to budget-friendly accommodations, we partner
              with thousands of hotels globally to offer you the best options.
            </p>
          </div>

          <div className="srv-card">
            <div className="srv-icon">🚗</div>
            <h3>Ground Transportation</h3>
            <p>
              Reliable and comfortable transportation services including airport transfers, car rentals, and private chauffeurs for your journey.
            </p>
          </div>

          <div className="srv-card">
            <div className="srv-icon">🗺</div>
            <h3>Guided Tours</h3>
            <p>
              Expert-led tours with knowledgeable local guides who bring destinations to life with insights and stories.
            </p>
          </div>

          <div className="srv-card">
            <div className="srv-icon">📅</div>
            <h3>Itinerary Planning</h3>
            <p>
              Customized travel itineraries tailored to your interests, budget, and schedule so you can focus on enjoying.
            </p>
          </div>

          <div className="srv-card">
            <div className="srv-icon">🛡</div>
            <h3>Travel Insurance</h3>
            <p>
              Comprehensive travel insurance options to protect you and your investment from unexpected events and circumstances.
            </p>
          </div>

          <div className="srv-card">
            <div className="srv-icon">📄</div>
            <h3>Visa Assistance</h3>
            <p>
              Expert guidance on visa requirements and application processes to ensure you have all necessary documentation.
            </p>
          </div>

          <div className="srv-card">
            <div className="srv-icon">🎧</div>
            <h3>24/7 Support</h3>
            <p>
              Round-the-clock customer support for emergencies and assistance during your travels, we're always here for you.
            </p>
          </div>

          <div className="srv-card">
            <div className="srv-icon">⭐</div>
            <h3>Specialized Services</h3>
            <p>
              Scout travel coordination, corporate travel management, destination weddings, and other specialized services tailored to you.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}