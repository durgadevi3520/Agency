export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Archiv Agency planned our honeymoon perfectly. Amazing experience!",
    },
    {
      name: "David Miller",
      text: "Best travel service. Everything was smooth and stress-free.",
    },
    {
      name: "Priya Sharma",
      text: "Loved the destinations and hotel arrangements. Highly recommended!",
    },
  ];

  return (
    <div className="testimonials">
      {testimonials.map((t, i) => (
        <div key={i} className="testimonial-card">
          <p>"{t.text}"</p>
          <h4>- {t.name}</h4>
        </div>
      ))}
    </div>
  );
}
