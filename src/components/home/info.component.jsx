import "./home.styles.css";

const steps = [
  {
    id: 1,
    title: "Search",
    desc: "Enter your destination and find available parking spots nearby in seconds.",
  },
  {
    id: 2,
    title: "Reserve",
    desc: "Select your spot, confirm your booking, and get turn-by-turn directions.",
  },
  {
    id: 3,
    title: "Park & Go",
    desc: "Drive straight to your reserved spot. Your space is guaranteed and waiting.",
  },
];

const Info = () => {
  return (
    <section className="home-info">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Three simple steps to hassle-free parking
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-card">
              <div className="step-number">{step.id}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="info-footer">
          <p className="info-note">
            🌍 Available in 50+ cities across the country
          </p>
          <button className="btn btn-secondary">View All Locations</button>
        </div>
      </div>
    </section>
  );
};

export default Info;
