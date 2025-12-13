    import React from "react";
    import { orders } from "../../Data/Data"; 
    import "../../../styles/OrderPage.css";

    function OrdersPage() {
    const hasOrders = orders.length > 0;

    return (
        <div className="orders-page">
        <h3 className="title">Orders ({orders.length})</h3>

        {!hasOrders ? (
            <div className="orders-empty">
            <h4>No orders yet</h4>
            <p>
                You haven’t placed any buy or sell orders.
                <br />
                Start trading with demo funds to see your order history here.
            </p>
            <button className="primary-btn">Get Started</button>
            </div>
        ) : (
            <div className="order-table">
            <table>
                <thead>
                <tr>
                    <th>Time</th>
                    <th>Instrument</th>
                    <th>Type</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                {orders.map((order, index) => (
                    <tr key={index}>
                    <td className="muted">{order.time}</td>

                    <td className="instrument">{order.name}</td>

                    <td className={order.type === "BUY" ? "buy" : "sell"}>
                        {order.type}
                    </td>

                    <td>{order.qty}</td>

                    <td>{order.price.toFixed(2)}</td>

                    <td className={order.status === "COMPLETED" ? "success" : "pending"}>
                        {order.status}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}
        </div>
    );
    }

    export default OrdersPage;
