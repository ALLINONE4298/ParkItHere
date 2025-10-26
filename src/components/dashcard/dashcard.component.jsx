import "./dashcard.styles.css";

const DashCard = ({ title, value, desc, icon }) => {
  return (
    <div className="dashcard-container">
      {/* <div className="dashcard-icon">{icon}</div> */}
      <div className="dashcard-info">
        <h4 className="dashcard-title">{title}</h4>
        <p className="dashcard-value">{value}</p>
        <p className="dashcard-desc">{desc}</p>
      </div>
    </div>
  );
};

export default DashCard;