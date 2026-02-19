import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VehicleCard from "../components/VehicleCard";
import "../styles/vehicles.css";

export default function Vehicles() {
  const vehicles = [
    {
      name: "Economy Sedan",
      passengers: "4 Passengers",
      bags: "2 Large Bags",
      price: "$50/day",
      features: ["Air Conditioning", "GPS Navigation", "Insurance Included"]
    },
    {
      name: "Luxury SUV",
      passengers: "6 Passengers",
      bags: "4 Large Bags",
      price: "$120/day",
      features: ["Premium Interior", "Advanced Safety", "Professional Driver"]
    },
    {
      name: "Executive Van",
      passengers: "8 Passengers",
      bags: "6 Large Bags",
      price: "$150/day",
      features: ["Spacious Interior", "Entertainment System", "Wi-Fi Available"]
    },
    {
      name: "Minibus",
      passengers: "15 Passengers",
      bags: "10 Large Bags",
      price: "$200/day",
      features: ["Group Travel", "Comfortable Seating", "Professional Driver"]
    },
    {
      name: "Luxury Coach",
      passengers: "30 Passengers",
      bags: "20 Large Bags",
      price: "$350/day",
      features: ["Premium Comfort", "Restroom", "Entertainment System"]
    },
    {
      name: "Premium Sedan",
      passengers: "4 Passengers",
      bags: "3 Large Bags",
      price: "$90/day",
      features: ["Luxury Interior", "Chauffeur Service", "VIP Treatment"]
    }
  ];

  return (
    <>
      <Navbar />

      <section className="vehicles-page">
        <h1>Our Fleet</h1>
        <p className="subtitle">
          Comfortable and reliable transportation for every journey
        </p>

        <div className="fleet-banner">
          <img src="/images/fleet-banner.png" alt="Fleet Banner" />
        </div>

        <div className="vehicles-heading">
          <h2>Choose Your Vehicle</h2>
          <p>
            From economy to luxury, we have the perfect vehicle for your needs
          </p>
        </div>

        <div className="vehicles-grid">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
