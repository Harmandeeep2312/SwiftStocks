    import React from "react";

    function EquityCard() {
    return (
        <div className="summary-card">
        <h3>Equity</h3>

        <div className="summary-row">
            <span>Available Balance</span>
            <span className="positive">₹50,000</span>
        </div>

        <div className="summary-row">
            <span>Used Margin</span>
            <span>₹12,500</span>
        </div>

        <div className="summary-row">
            <span>Opening Balance</span>
            <span>₹62,500</span>
        </div>
        </div>
    );
    }

    export default EquityCard;
