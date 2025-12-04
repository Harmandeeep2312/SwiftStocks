import React from 'react';
function HeroSection() {
    return (
    <section className="hero-content">
        <div className="hero-text">
            <h1>Trade Smarter<br></br>Grow Faster</h1>
            <p>
                Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more
            </p>
            <div className="hero-buttons">
                <button className="btn-primary-glow">Open Account</button>
                <button className="btn-ghost">Learn More</button>
            </div>
        </div>

        <div className="hero-card">
          {/* put your 3D logo / card / chart image here */}
        <span>Some fancy card area</span>
        </div>
    </section>
    );
}

export default HeroSection;