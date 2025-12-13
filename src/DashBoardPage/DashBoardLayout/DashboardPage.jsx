    import React from 'react';
    import {Routes, Route}  from "react-router-dom";
    import FundsPage from "../Components/FundsPage/FundsPage";
    import OrdersPage from "../Components/OrdersPage/OrdersPage";
    import HoldingsPage from "../Components/HoldingsPage/HoldingsPage";
    import PositionsPage from "../Components/PositionsPage/PositionsPage";
    import Summary from "../Components/SummaryPage/SummaryPage";
    import SideBar from "./SideBar";
    import "../../styles/DasBoard.css"
    import Navbar from "../Navbar"

    function DashBoardPage() {
    return (
        <div className="app-shell">
        <div className="watchlist-container">
            <SideBar />
        </div>

        <div className="main-shell">
            <div className="topbar-container">
            <Navbar />
            </div>

            <div className="page-container">
            <Routes>
                <Route path="/" element={<Summary />} />
                <Route path="/fund" element={<FundsPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/holdings" element={<HoldingsPage />} />
                <Route path="/positions" element={<PositionsPage />} />
            </Routes>
            </div>
        </div>
        </div>
    );
    }



    export default DashBoardPage;