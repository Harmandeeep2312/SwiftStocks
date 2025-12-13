    import React, { useState } from "react";

    function FundsModal({ type, onClose }) {
    const [amount, setAmount] = useState("");

    return (
        <div className="funds-modal-backdrop">
        <div className="funds-modal">
            <h4>{type === "ADD" ? "Add Funds" : "Withdraw Funds"}</h4>

            <p>
            {type === "ADD"
                ? "Add demo money to your trading account."
                : "Withdraw demo money from your trading account."}
            </p>

            <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />

            <div className="modal-actions">
            <button className="btn-secondary" onClick={onClose}>
                Cancel
            </button>
            <button className="btn-primary">
                {type === "ADD" ? "Add Money" : "Withdraw"}
            </button>
            </div>
        </div>
        </div>
    );
    }

    export default FundsModal;
