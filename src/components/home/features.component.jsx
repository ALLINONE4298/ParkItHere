import "./home.styles.css";

const features = [
  {
    id: 1,
    icon: "⚡",
    title: "Real-time Availability",
    desc: "See available spots near you with live updates. No more circling blocks.",
  },
  {
    id: 2,
    icon: "🎯",
    title: "Reserve Ahead",
    desc: "Book your space before you arrive. Drive straight to your spot stress-free.",
  },
  {
    id: 3,
    icon: "💳",
    title: "Flexible Payments",
    desc: "Pay with card, digital wallet, or in-app credits. Fast and secure.",
  },
];

const Features = () => {
  return (
    <section className="home-features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose ParkItHere?</h2>
          <p className="section-subtitle">
            Simple, fast, and reliable parking at your fingertips
          </p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.id} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
