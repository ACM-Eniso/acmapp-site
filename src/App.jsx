import NavBar from "./components/navBar/NavBar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Competition from "./components/competition/Competition.jsx";
import Title from "./components/title/Title.jsx";
import About from "./components/about/About.jsx";
import Club from "./components/club-photos/Club.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import './index.css'

const App = () => {


    return (
        <div>
            <NavBar/>
            <Hero />
            <div className="container">
                <Title subTitle='Our Competition' title='What We Think' />
                <Competition/>
                <Title subTitle='About Us' title='Welcome' />
                <About />
                <Title subTitle='Gallery' title='Some Club Photos' />
                <Club />
                <Title subTitle='Contact Us' title='Get in Touch' />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default App;
