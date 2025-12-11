import React from 'react';
import Navbar from "../Navbar";

function SideBar() {
    return (
        <div className='topbar-container'>
            <div className='indices-container'>
                <div className='nifty'>
                    <div className='index'>NIFTY 50</div>
                    <div className='index-points'>{100.20}</div>
                    <div className='percent'></div>
                </div>
                <div className='sensex'>
                    <div className='index'>SENSEX</div>
                    <div className='index-points'>{0.00}</div>
                    <div className='percent'></div>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default SideBar;