import "./App.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <About />
            <Projects />
            <FeaturedArticles />
            <FeaturedTutorials />
            <Footer />
        </>
    );
}

export default App;