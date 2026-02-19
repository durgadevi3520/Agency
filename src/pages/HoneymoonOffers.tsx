import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HoneymoonCard from "../components/HoneymoonCard";
import "../styles/honeymoon.css";

export default function HoneymoonOffers() {
  const packages = [
    {
      title: "Maldives Romance",
      price: "$4,499",
      image: "/images/honeymoon1.png",
      duration: "7 Days / 6 Nights",
      rating: "4.9 (120)"
    },
    {
      title: "Paris & Venice",
      price: "$4,299",
      image: "/images/honeymoon2.png",
      duration: "8 Days / 7 Nights",
      rating: "4.8 (98)"
    },
    {
      title: "Santorini Escape",
      price: "$2,899",
      image: "/images/honeymoon3.png",
      duration: "6 Days / 5 Nights",
      rating: "4.7 (87)"
    },
    {
      title: "Bali Retreat",
      price: "$2,599",
      image: "/images/honeymoon4.png",
      duration: "7 Days / 6 Nights",
      rating: "4.8 (110)"
    },
    {
      title: "Swiss Alps",
      price: "$3,899",
      image: "/images/honeymoon5.png",
      duration: "7 Days / 6 Nights",
      rating: "4.9 (76)"
    },
    {
      title: "Caribbean Bliss",
      price: "$3,199",
      image: "/images/honeymoon6.png",
      duration: "7 Days / 6 Nights",
      rating: "4.8 (65)"
    }
  ];

  return (
    <>
      <Navbar />

      <section className="honeymoon-page">
        <h1>Honeymoon Offers</h1>
        <p className="subtitle">
          Discover our romantic getaway packages designed for couples
        </p>

        {/* Banner */}
        <div className="honeymoon-banner">
          <img src="/images/honeymoon-banner.png" alt="Honeymoon Banner" />
        </div>

        {/* Why Choose */}
        <section className="why-section">
          <h2>Why Choose Our Honeymoon Packages</h2>

          <div className="why-grid">
            <div className="why-card">
              ❤ Romantic Experiences
              <p>Curated moments designed for unforgettable memories.</p>
            </div>

            <div className="why-card">
              🌍 Dream Destinations
              <p>Explore the world’s most romantic locations.</p>
            </div>

            <div className="why-card">
              🏨 Luxury Stays
              <p>Premium resorts & handpicked accommodations.</p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="packages-section">
          <h2>Our Honeymoon Packages</h2>
          <p>Handpicked romantic escapes for your perfect honeymoon</p>

          <div className="honeymoon-grid">
            {packages.map((pkg, index) => (
              <HoneymoonCard key={index} {...pkg} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Ready to Start Your Journey Together?</h2>
          <p>
            Let us plan the perfect romantic getaway for you and your partner
          </p>

          <button>Contact Us</button>
        </section>
      </section>

      <Footer />
    </>
  );
}
