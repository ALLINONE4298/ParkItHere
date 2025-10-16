import "./about.styles.css";

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

const AboutPage = () => (
    <>
        <Header />
        <div className="about-container">
            <h1 className="about-title">About ParkItHere</h1>
            <p className="about-description">
                ParkItHere is your solution for finding and reserving parking spots easily and efficiently.
                Our mission is to simplify parking for everyone, everywhere, while helping individuals monetize their unused spaces.
            </p>
            <h2 className="about-section-title">How It Works</h2>
            <p className="about-description">
                If you have an empty space, ParkItHere lets you list it and earn extra income. Vehicle owners can discover these secure alternatives to traditional parking, making parking safer and more convenient.
            </p>
            <h2 className="about-section-title">Features</h2>
            <ul className="about-features-list">
                <li>Real-time parking spot availability</li>
                <li>Easy reservations</li>
                <li>User-friendly interface</li>
                <li>Secure payments</li>
                <li>Monetize your unused spaces</li>
                <li>Safe and trusted parking alternatives</li>
            </ul>
        </div>

        <Footer />
    </>
);

export default AboutPage;