    import React from 'react';
    import Navbar from "../Navbar";
    import WatchList from "../Components/WatchListPage/WatchList";
    import "../../styles/Sidebar.css"

    function SideBar() {
    return (
        <div className="watchlist">
        <div className="indices-container">
            <div className="nifty">
            <span className="index">NIFTY 50</span>
            <span className="index-points">100.20</span>
            <span className="percent up">+0.25%</span>
            </div>

            <div className="sensex">
            <span className="index">SENSEX</span>
            <span className="index-points">0.00</span>
            <span className="percent down">-0.10%</span>
            </div>
        </div>
        <div className="watchlist-divider" />

        <div className="watchlist-wrapper">
            <WatchList />
        </div>
        </div>
    );
    }


    export default SideBar;
