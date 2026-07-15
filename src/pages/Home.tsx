import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Pricing from "../components/sections/Pricing";
import Booking from "../components/sections/Booking";
import Instructor from "../components/sections/Instructor";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

function Home() {
    return (
        <>
        <Header />

        <Hero />

        <About />

        <Pricing />

        <Booking />

        <Instructor />

        <Contact />

        <Footer />
        </>
    );
}

export default Home;