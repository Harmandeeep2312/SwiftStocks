import React from "react";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer-shell">
        <div className="footer-brand-center">
            <h3>SwiftStocks</h3>
            <p>
            A modern demo platform to learn trading the smart way. Practice
            charts, explore market data, and place simulated trades in a completely
            risk-free environment.
            </p>
        </div>

        <div className="footer-inner">
            <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#support">Support</a></li>
                </ul>
            </div>

        <div className="footer-col">
            <h4>Learn &amp; Explore</h4>
            <ul>
                <li><a href="#">Market Basics</a></li>
                <li><a href="#">Trading Guide</a></li>
                <li><a href="#">Demo Orders</a></li>
                <li><a href="#">Charting Tools</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
        </div>

        <div className="footer-col">
            <h4>Tools</h4>
            <ul>
                <li><a href="#">Simulated Trading</a></li>
                <li><a href="#">Market Visuals</a></li>
                <li><a href="#">Portfolio Demo</a></li>
                <li><a href="#">Indicators Preview</a></li>
            </ul>
        </div>

        <div className="footer-col">
            <h4>Contact</h4>
            <ul>
                <li><span>support@swiftstocks.com</span></li>
                <li>
                <a href="https://github.com/Harmandeeep2312" target="_blank">
                GitHub
                </a>
            </li>
            </ul>
        </div>
        </div>
        <div className="footer-bottom">
            <p>© {new Date().getFullYear()} SwiftStocks. All rights reserved.</p>
            <p className="footer-disclaimer">
            SwiftStocks is a demo and educational platform only. No real-money
            trading, fund transfers, or brokerage services are provided.
            </p>
        </div>
    </footer>
    );
}
