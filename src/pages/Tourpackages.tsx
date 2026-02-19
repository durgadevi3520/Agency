import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";
import "../styles/tour-packages.css";

export default function TourPackages() {
  const packages = [
    {
      title: "European Grand Tour",
      price: "$2,499",
      image: "/images/pack1.png",
      duration: "14 Days",
      location: "Paris, Rome, Barcelona",
      rating: "4.8 (271)",
      tags: ["Flights", "Hotels", "Guided Tours"]
    },
    {
      title: "Asian Discovery",
      price: "$1,999",
      image: "/images/pack2.png",
      duration: "12 Days",
      location: "Tokyo, Bangkok, Singapore",
      rating: "4.8 (198)",
      tags: ["Flights", "Hotels", "Local Tours"]
    },
    {
      title: "Tropical Paradise",
      price: "$1,799",
      image: "/images/pack3.png",
      duration: "10 Days",
      location: "Maldives, Bali, Phuket",
      rating: "5.0 (145)",
      tags: ["Resorts", "Transfers", "All Meals"]
    },
    {
      title: "African Safari Adventure",
      price: "$3,299",
      image: "/images/pack4.png",
      duration: "9 Days",
      location: "Kenya, Tanzania",
      rating: "4.9 (164)",
      tags: ["Flights", "Lodges", "Safari Tours"]
    },
    {
      title: "South American Explorer",
      price: "$2,899",
      image: "/images/pack5.png",
      duration: "13 Days",
      location: "Peru, Chile, Argentina",
      rating: "4.8 (87)",
      tags: ["Flights", "Hotels", "Tours"]
    },
    {
      title: "Australian Wonders",
      price: "$2,599",
      image: "/images/pack6.png",
      duration: "11 Days",
      location: "Sydney, Melbourne",
      rating: "4.7 (91)",
      tags: ["Flights", "Hotels", "City Tours"]
    }
  ];

  return (
    <>
      <Navbar />

      <section className="packages-page">
        <h1>Tour Packages</h1>
        <p className="subtitle">
          Curated experiences to the world’s most amazing destinations
        </p>

        <div className="banner">
          <img src="/images/banner.png" alt="Discover the World" />
        </div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
