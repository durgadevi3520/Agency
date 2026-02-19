import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/home.css";

export default function Home() {
  const featuredDestinations = [
    {
      id: 1,
      title: "Monte Carlo",
      description: "Luxury and sophistication await",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Asian Wonders",
      description: "Discover vibrant cultures and traditions",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Island Escape",
      description: "Serene sunsets and pristine beaches",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Urban Paradise",
      description: "Modern cityscape and adventure",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
    },
  ];

  const services = [
    {
      id: 1,
      icon: "✈",
      title: "Flight Booking",
      description: "Easy and quick flight reservations worldwide",
    },
    {
      id: 2,
      icon: "🏨",
      title: "Hotel Booking",
      description: "Best hotel rates and exclusive deals",
    },
    {
      id: 3,
      icon: "🗺",
      title: "Tour Planning",
      description: "Customized itineraries for your journey",
    },
    {
      id: 4,
      icon: "🌍",
      title: "24/7 Support",
      description: "Always here to help you",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Explore the World With <span>Archiv Agency</span>
          </h1>

          <p>
            Discover unforgettable destinations and curated travel experiences.
          </p>

          <div className="hero-buttons">
            <Link to="/booking">
              <button>Plan Your Trip</button>
            </Link>

            <Link to="/packages">
              <button className="outline">View Packages</button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img src="/images/hero.png" alt="Travel" />
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="featured-destinations">
        <h2>Featured Destinations</h2>
        <p className="section-subtitle">Handpicked locations for your next adventure</p>

        <div className="grid-4">
          {featuredDestinations.map((d) => (
            <div key={d.id} className="destination-card">
              <div className="card-image">
                <img src={d.image} alt={d.title} />
              </div>
              <div className="card-content">
                <h3>{d.title}</h3>
                <p>{d.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/packages">
          <button className="primary-btn">View All →</button>
        </Link>
      </section>

      {/* HONEYMOON PACKAGES */}
      <section className="honeymoon-section">
        <div className="honeymoon-content">
          <div className="honeymoon-tag">Special Honeymoon</div>
          <h2>Special Honeymoon Packages</h2>
          <p>Create unforgettable memories with your beloved on our exclusive honeymoon packages designed for romance and adventure.</p>

          <ul className="honeymoon-features">
            <li>✓ Luxury accommodations in exotic locations</li>
            <li>✓ Private dining experiences and spa treatments</li>
            <li>✓ Customized romantic itineraries</li>
            <li>✓ 24/7 concierge service</li>
          </ul>

          <Link to="/honeymoon">
            <button className="explore-btn">Explore Packages →</button>
          </Link>
        </div>

        <div className="honeymoon-image">
          <img src="/images/honeymoon.jpg" alt="Honeymoon" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-left">
          <div className="about-tag">About Us</div>
          <h2>About Archiv Agency</h2>
          <p>
            We are a leading travel agency dedicated to creating extraordinary travel experiences. With years of expertise and passionate travel consultants, we curate bespoke journeys that transform the way you explore the world.
          </p>

          <div className="stats-container">
            <div className="stat">
              <h3>55+</h3>
              <p>Destinations</p>
            </div>
            <div className="stat">
              <h3>300+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Tour Packages</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <img src="/images/about.png" alt="About Us" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <h2>Our Services</h2>
        <p className="section-subtitle">Everything you need for a perfect journey</p>

        <div className="grid-4">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
