    import { fundTransactions } from "../../Data/Data";

    function FundsHistory() {
    return (
        <div className="funds-history">
        <h4>Transaction History</h4>

        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            </thead>

            <tbody>
            {fundTransactions.map((tx, i) => (
                <tr key={i}>
                <td>{tx.date}</td>
                <td className={tx.type === "ADD" ? "profit" : "loss"}>
                    {tx.type}
                </td>
                <td>₹{tx.amount}</td>
                <td className="success">{tx.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    }

    export default FundsHistory;
