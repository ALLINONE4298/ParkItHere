import "./home.styles.css";

const Hero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__inner">
        <div className="home-hero__badge">🚗 Smart Parking Solutions</div>
        <h1 className="home-hero__title">
          Find parking <span className="highlight">instantly</span>
        </h1>
        <p className="home-hero__subtitle">
          Search, reserve, and park with confidence — all from your phone,
          wherever you go.
        </p>
        <div className="home-hero__cta">
          <button className="btn btn-primary">
            <span>Find Parking Now</span>
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
        <div className="home-hero__stats">
          <div className="stat">
            <strong>10,000+</strong>
            <span>Parking Spots</span>
          </div>
          <div className="stat">
            <strong>50+</strong>
            <span>Cities</span>
          </div>
          <div className="stat">
            <strong>4.8★</strong>
            <span>User Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
