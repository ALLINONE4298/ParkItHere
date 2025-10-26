import "./dashboard.styles.css";

// Components
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import DashCard from "../../components/dashcard/dashcard.component";


// data
import userdata from "../../data/userdata";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <h3>Welcome, {userdata.name.split(" ")[0]}</h3>
          <div className="cards-container">
            <DashCard
              title="Subscriptions"
              value={`${userdata.subscription.plan} - ${userdata.subscription.status}`}
              desc={userdata.subscription.features.join("\n")}
            />
            <DashCard
              title="Vehicles"
              value={`${userdata.vehicles.length}`}
              desc={userdata.vehicles.map(vehicle => `${vehicle.make} ${vehicle.model} (${vehicle.year}) - ${vehicle.plate}`).join("\n")}
            />
            <DashCard
              title="Bookings"
              value={`${userdata.bookings.length}`}
              desc={userdata.bookings.map(booking => `${booking.location} - ${booking.date} ${booking.time}`).join("\n")}
            />
            <DashCard
              title="Bill Amount"
              value={`$${userdata.billAmount.toFixed(2)}`}
              desc="Total amount for the current billing cycle"
            />
            <DashCard
              title="Documents"
              value={`${userdata.documents.length}`}
              desc={userdata.documents.map(doc => `${doc.type} - ${doc.status}`).join("\n")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;