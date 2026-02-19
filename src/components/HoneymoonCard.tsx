type Props = {
  title: string;
  price: string;
  image: string;
  duration: string;
  rating: string;
};

export default function HoneymoonCard({
  title,
  price,
  image,
  duration,
  rating
}: Props) {
  return (
    <div className="honeymoon-card">
      <img src={image} alt={title} />

      <div className="honeymoon-content">
        <div className="card-top">
          <span className="badge">Best Seller</span>
          <span className="rating">⭐ {rating}</span>
        </div>

        <h3>{title}</h3>
        <p className="duration">🗓 {duration}</p>

        <div className="card-bottom">
          <h4>{price}</h4>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}
