type Props = {
  title: string;
  price: string;
  image: string;
  duration: string;
  location: string;
  rating: string;
  tags: string[];
};

export default function PackageCard({
  title,
  price,
  image,
  duration,
  location,
  rating,
  tags
}: Props) {
  return (
    <div className="package-card">
      <img src={image} alt={title} />

      <div className="package-content">
        <div className="package-top">
          <span className="duration">{duration}</span>
          <span className="rating">⭐ {rating}</span>
        </div>

        <h3>{title}</h3>
        <p className="location">📍 {location}</p>

        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        <div className="package-bottom">
          <h4>{price}</h4>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}
