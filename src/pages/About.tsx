import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted partner in creating unforgettable travel experiences</p>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="about-story-img">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
            alt="Travel"
          />
        </div>

        <div className="about-story-text">
          <h2>Our Story</h2>
          <p>
            Founded with a passion for exploration and a commitment to excellence, we have been helping travelers discover the world's most amazing destinations for years. Our journey began with a simple belief: that travel should be accessible, enjoyable, and transformative.
          </p>

          <p>
            Today, we are proud to be a leading travel agency, offering comprehensive services that cater to every type of traveler. From solo adventurers to family vacations, from business trips to romantic getaways, we have the expertise and resources to make your travel dreams come true.
          </p>

          <p>
            Our team of dedicated travel professionals brings together decades of combined experience, intimate knowledge of destinations worldwide, and a genuine passion for helping people explore our beautiful planet.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="about-values">
        <h2>Our Values</h2>
        <p>The principles that guide everything we do</p>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Passion</h3>
            <p>
              We love what we do and it shows in every journey we plan and every client we serve.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">⭐</div>
            <h3>Excellence</h3>
            <p>
              We strive for perfection in every detail, ensuring the highest quality experiences.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">👥</div>
            <h3>Customer First</h3>
            <p>
              Your satisfaction and happiness are at the heart of everything we do.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Global Reach</h3>
            <p>
              With partners worldwide, we bring you authentic experiences in every corner of the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="stat">
          <h3>15+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h3>50K+</h3>
          <p>Happy Travelers</p>
        </div>
        <div className="stat">
          <h3>100+</h3>
          <p>Destinations</p>
        </div>
        <div className="stat">
          <h3>98%</h3>
          <p>Satisfaction Rate</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
