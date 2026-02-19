type Props = {
  name: string;
  passengers: string;
  bags: string;
  price: string;
  features: string[];
};

export default function VehicleCard({
  name,
  passengers,
  bags,
  price,
  features
}: Props) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-top">
        <h3>{name}</h3>
        <div className="stars">★★★★★</div>
      </div>

      <p className="service-text">Professional transportation service</p>

      <div className="vehicle-meta">
        <span>👥 {passengers}</span>
        <span>🧳 {bags}</span>
      </div>

      <div className="features">
        {features.map((feature, i) => (
          <span key={i}>{feature}</span>
        ))}
      </div>

      <div className="vehicle-bottom">
        <div>
          <small>Starting from</small>
          <h4>{price}</h4>
        </div>

        <button>Book Now</button>
      </div>
    </div>
  );
}
