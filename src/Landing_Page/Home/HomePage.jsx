import React from 'react';
import HeroSection from './HeroSection';
import Stats from './Stats';
import Pricing from './pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbarr from '../Navbarr';
import Footer from '../Footer';
import HeroBackground from "./HeroBackground";
// import Signup from "../Signup/SignUp.jsx";
import About from "../about/AboutPage";



function HomePage() {
    return (
    <>
    <div className="hero-shell">
    <HeroBackground />
    <Navbarr />
    <HeroSection />
    <Stats />
    <Pricing />
    <Education />
    <OpenAccount />
    {/* <Signup /> */}
    <About />
    <Footer />
    </div>
    

    </>  
    );
}

export default HomePage;