function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">

                <h2>DEV@Deakin</h2>

                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#articles">Articles</a>
                    </li>

                    <li>
                        <a href="#tutorials">Tutorials</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;