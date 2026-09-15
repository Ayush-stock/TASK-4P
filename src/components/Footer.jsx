function Footer() {
    return (
        <footer id="contact">

            <div className="newsletter">
                <h2>SIGN UP FOR OUR DAILY INSIDER</h2>

                <input
                    type="email"
                    placeholder="Enter your email"
                />

                <button>
                    Subscribe
                </button>
            </div>

            <div className="footer-content">

                <div className="footer-column">
                    <h2>Explore</h2>

                    <a href="#home">Home</a>
                    <a href="#">Questions</a>
                    <a href="#articles">Articles</a>
                    <a href="#tutorials">Tutorials</a>
                </div>


                <div className="footer-column">
                    <h2>Support</h2>

                    <a href="#">FAQs</a>
                    <a href="#">Help</a>
                    <a href="#contact">Contact Us</a>
                </div>


                <div className="footer-column">
                    <h2>Stay Connected</h2>

                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>

            </div>


            <div className="copyright">

                <h3>DEV@Deakin 2026</h3>

                <p>
                    Privacy Policy | Terms | Code of Conduct
                </p>

            </div>

        </footer>
    );
}

export default Footer;