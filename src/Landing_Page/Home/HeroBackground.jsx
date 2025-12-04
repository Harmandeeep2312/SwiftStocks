import React from "react";
import "../../styles/HomePage.css";
import { LineChart } from "lucide-react";

export default function HeroBackground() {
return (
    <div className="hero-fixed-bg">
    <div className="hero-glow"></div>
    <div className="hero-floating-icon">
        <div className="hero-icon-circle">
            <LineChart className="hero-icon-svg" />
        </div>
        </div>
    </div>
);
}
