import "../styles/tourguide.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TourGuide() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="tg-hero">
        <h1>Expert Tour Guides</h1>
        <p>
          Meet the passionate professionals who bring destinations to life
        </p>
      </section>

      {/* Why Guides Section */}
      <section className="tg-why">
        <div className="tg-why-text">
          <h2>Why Our Guides Make the Difference</h2>

          <p>
            Our tour guides are more than just navigators—they are storytellers,
            cultural ambassadors, and your personal connection to each
            destination. With extensive training and deep local knowledge, they
            transform ordinary sightseeing into extraordinary experiences.
          </p>

          <p>
            Each guide is carefully selected for their expertise, communication
            skills, and genuine passion for sharing their knowledge. They are
            fluent in multiple languages and trained to handle any situation
            with professionalism and care.
          </p>

          <p>
            Whether you're exploring ancient ruins, navigating bustling markets,
            or discovering hidden gems off the beaten path, our guides ensure
            you get the most authentic and enriching experience possible.
          </p>
        </div>

        <div className="tg-why-img">
          <img
            src="/images/guide.png"
            alt="Tour Guide"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="tg-features">
        <h2>What Sets Our Guides Apart</h2>

        <div className="tg-feature-grid">
          <div className="tg-card">
            <div className="tg-card-icon">🗣️</div>
            <h3>Multilingual</h3>
            <p>
              Our guides speak multiple languages fluently, ensuring clear
              communication throughout your journey.
            </p>
          </div>

          <div className="tg-card">
            <div className="tg-card-icon">📍</div>
            <h3>Local Experts</h3>
            <p>
              Deep knowledge of local culture, history, and hidden spots that
              only insiders know about.
            </p>
          </div>

          <div className="tg-card">
            <div className="tg-card-icon">✓</div>
            <h3>Certified</h3>
            <p>
              All guides hold professional certifications and undergo continuous
              training programs.
            </p>
          </div>

          <div className="tg-card">
            <div className="tg-card-icon">⭐</div>
            <h3>Highly Rated</h3>
            <p>
              Consistently receive 5-star reviews from travelers for their
              knowledge and hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Guides Section */}
      <section className="tg-team">
        <h2>Meet Some of Our Guides</h2>
        <p>A few of the amazing professionals on our team</p>

        <div className="tg-team-grid">
          <div className="tg-profile">
            <h3>Maria Rodriguez</h3>
            <span>European History Specialist</span>

            <p>
              15 years of experience guiding tours through Europe’s most iconic
              cities and historical sites.
            </p>

            <div className="tg-tags">
              <button>Spanish</button>
              <button>English</button>
              <button>French</button>
              <button>Italian</button>
            </div>
          </div>

          <div className="tg-profile">
            <h3>Kenji Tanaka</h3>
            <span>Asian Culture Expert</span>

            <p>
              Specializes in cultural immersion experiences across Japan, China,
              and Southeast Asia.
            </p>

            <div className="tg-tags">
              <button>Japanese</button>
              <button>English</button>
              <button>Mandarin</button>
            </div>
          </div>

          <div className="tg-profile">
            <h3>Sarah Johnson</h3>
            <span>Adventure Travel Guide</span>

            <p>
              Expert in outdoor adventures, wildlife tours, and eco-tourism
              across multiple continents.
            </p>

            <div className="tg-tags">
              <button>English</button>
              <button>Portuguese</button>
              <button>Swahili</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}