import "./notFound.styles.css";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="not-found-container">
                <h1 className="not-found-title">404 - Page Not Found</h1>
                <p className="not-found-message">
                    Oops! The page you are looking for does not exist.
                </p>
                <button className="not-found-button" onClick={() => navigate('/')}>Go Back Home</button>
            </div>
            <Footer />
        </>
    );
};

export default NotFoundPage;