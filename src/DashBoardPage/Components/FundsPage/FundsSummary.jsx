    import useAnimatedNumber from "./useAnimatedNumber";

    function FundsSummary({ onAdd, onWithdraw }) {
    const available = 50000;
    const invested = 35000;
    const profit = 3200;

    const animatedAvailable = useAnimatedNumber(available);
    const animatedProfit = useAnimatedNumber(profit);

    return (
        <div className="funds-summary">
        <div className="funds-stats">
            <div>
            <span>Available Balance</span>
            <strong className="positive">₹{animatedAvailable}</strong>
            </div>

            <div>
            <span>Invested Amount</span>
            <strong>₹{invested}</strong>
            </div>

            <div>
            <span>Total Profit / Loss</span>
            <strong className="positive">+₹{animatedProfit}</strong>
            </div>
        </div>

        <div className="funds-actions">
            <button className="btn-add" onClick={onAdd}>Add Money</button>
            <button className="btn-withdraw" onClick={onWithdraw}>Withdraw</button>
        </div>
        </div>
    );
    }
    export default FundsSummary;