import "./footer.styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">
                © {new Date().getFullYear()} <a href="/">ParkItHere</a>. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer;