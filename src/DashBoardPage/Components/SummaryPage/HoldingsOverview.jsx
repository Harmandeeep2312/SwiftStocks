    import React from "react";

    function HoldingsCard() {
    return (
        <div className="summary-card">
        <h3>Holdings</h3>

        <div className="summary-row">
            <span>Invested Value</span>
            <span>₹35,000</span>
        </div>

        <div className="summary-row">
            <span>Current Value</span>
            <span>₹38,200</span>
        </div>

        <div className="summary-row">
            <span>Total P&amp;L</span>
            <span className="positive">+₹3,200</span>
        </div>
        </div>
    );
    }

    export default HoldingsCard;
