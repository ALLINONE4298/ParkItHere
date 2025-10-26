import "./dashboard.styles.css";

// Components
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Sidebar from "../../components/sidebar/sidebar.component";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;