import "./header.styles.css";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">ParkItHere</h1>
            <nav>
                <ul className="header-nav-list">
                    <li>
                        <a href="/" className="header-nav-link">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="header-nav-link">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="header-nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;