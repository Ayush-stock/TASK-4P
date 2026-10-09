
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="task-navbar">
            <div className="task-nav-inner">
                <Link to="/" className="task-logo">
                    DEV@Deakin
                </Link>

                <div className="task-search-box">
                    <input
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                    />
                </div>

                <Link to="/post" className="task-nav-link">
                    Post
                </Link>

                <Link to="/login" className="task-nav-link">
                    Login
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
