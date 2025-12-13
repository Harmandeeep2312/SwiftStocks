    import React from 'react';
    import { holdings } from '../../Data/Data';
    import "../../../styles/HoldingsPage.css"

    function HoldingsPage() {
    return (
        <div className="holdings-page">
            <h3 className="title">
                Holdings <span className="count">({holdings.length})</span>
            </h3>
        <div className="order-table">
            <table>
            <thead>
                <tr>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
                </tr>
            </thead>

            <tbody>
                {holdings.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const pnl = curValue - stock.avg * stock.qty;
                const isProfit = pnl >= 0;

                return (
                    <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}</td>

                    <td className={isProfit ? "profit" : "loss"}>
                        {pnl >= 0 ? `+${pnl.toFixed(2)}` : pnl.toFixed(2)}
                    </td>

                    <td className={stock.net.startsWith("+") ? "profit" : "loss"}>
                        {stock.net}
                    </td>

                    <td className={stock.day.startsWith("+") ? "profit" : "loss"}>
                        {stock.day}
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
        </div>
    );
    }


    export default HoldingsPage;