import React from 'react';
import "../../styles/stats.css";

function Stats() {
    const data = [
    {
    title: "Advanced Trading Charts",
    desc: "View professional-grade charts with indicators and tools.",
    icon: "📈",
    },
    {
    title: "Fast Order Execution",
    desc: "Place and execute orders instantly with smart routing.",
    icon: "⚡",
    },
    {
    title: "Free Account Opening",
    desc: "Open your trading account in minutes at zero cost.",
    icon: "🧾",
    },
    {
    title: "No spam or gimmicks",
    desc: "No gimmicks, spam, or annoying push notifications. High quality apps that you use at your pace, the way you like",
    icon: "🔐",
    },
    {
    title: "Multiple Investment Products",
    desc: "Trade stocks, F&O, commodities, and currencies.",
    icon: "💹",
    },
    {
    title: "Trade Anywhere",
    desc: "Use SwiftStocks on mobile and web seamlessly.",
    icon: "📱",
    },
];

    return (
        <section className="features-section">
            <h2 className="features-title">Features</h2>

            <div className="features-grid">
                {data.map((item, i) => (
                <div key={i} className="feature-box">
                    <div className="feature-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Stats;