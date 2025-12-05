    import React from 'react';

    function Team() {
        return ( 
            <div className="About-Team-card">
        <div className="About-team-text">
            <h2>👨‍💻 Behind the Project</h2>
            <p>
            Hi, I’m <span className="highlight-strong">Harmandeep Singh</span>, the creator of
            SwiftStocks. I’m currently pursuing my B.Tech, and like many beginners, I stepped
            into the world of trading with curiosity but found myself overwhelmed by complex charts,
            confusing interfaces, and the fear of making costly mistakes. As a newbie, I wanted a space
            where I could <span className="highlight">learn, experiment, and grow without risking anything</span>.
            That’s when the idea for SwiftStocks took shape.
            <br /><br />
            I built this platform as a bridge between learning and real trading—a clean, simple,
            beginner-friendly environment where anyone can practice, understand market behavior, and gain
            confidence before ever placing a real trade. SwiftStocks reflects my own learning journey and the
            tool I wish I had when I started: a <span className="highlight">safe, structured, and intuitive</span> way
            to explore trading step by step.
            <br /><br />
            My goal is to help others like me overcome early challenges, build a strong foundation, and approach
            trading with <span className="highlight-strong">clarity rather than confusion</span>.
            </p>
        </div>

        <div className="About-team-image">
            <img src="/your-photo.png" alt="Harmandeep Singh" />
            <div className="Team-info">
            <h3 className="Team-name">Harmandeep Singh</h3>
            <p className="Team-role">Founder • SwiftStocks</p>
            </div>
        </div>
        </div>
        );
    }

    export default Team;