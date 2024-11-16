import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Features from "./Features";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Features></Features>
            <Contact></Contact>
        </div>
    );
};

export default Home;