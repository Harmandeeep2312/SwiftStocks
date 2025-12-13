import React from 'react';
import { useState } from 'react';
import {KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';
import WatchListActions from './WatchListActions';

function WatchListItem({stock}) {
    const [showWatchListActions, setShowWatchListActions] = useState(false);
    const handleMouseOnHover = (e)=>{
        setShowWatchListActions(true);
    }
    const handleMouseLeaveHover = (e)=>{
        setShowWatchListActions(false);
    }
    return (
        <>
        <li onMouseEnter={handleMouseOnHover} onMouseLeave={handleMouseLeaveHover}>
            <div className='item'>
                <p className= {stock.isDown ? "down": "up"  }>{stock.name}</p>
                <div className='itemInfo'>
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown ? (<KeyboardArrowDown className = 'down' />) : (<KeyboardArrowUp className = 'up'/>) }
                    <span className='price'>{stock.price}</span>
                </div>
            </div>
            {showWatchListActions && <WatchListActions uid = {stock.name}/>}
        </li>
        </>
    );
}

export default WatchListItem;