import "./sidebar.styles.css";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar-container">
                <ul>
                    <a href="/profile"><li>Profile</li></a>
                    <a href="/find-parking"><li>Find Parking Spots</li></a>
                    <a href="/vehicles"><li>Vehicles</li></a>
                    <a href="/bookings"><li>Bookings</li></a>
                    <a href="/bills"><li>Bills</li></a>
                    <a href="/other-services"><li>Other Services</li></a>
                    <a href="/document-center"><li>Document Center</li></a>
                    <a href="/help-support"><li>Help & Support</li></a>
                    <a href="/logout"><li>Logout</li></a>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;