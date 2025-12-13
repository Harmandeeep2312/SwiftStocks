import React from 'react';
import {Tooltip,Grow} from '@mui/material';
import { BarChartOutlined } from '@mui/icons-material';

function WatchListActions({uid}) {

    return (
        <>
            <span className='actions'>
                <Tooltip 
                    title ='Buy (B)'
                    placement = "top"
                    arrow 
                    TransitionComponent={Grow}
                >
                    <button className='buy'> Buy</button>
                </Tooltip>
                <Tooltip 
                    title ='Sell (S)'
                    placement = "top"
                    arrow 
                    TransitionComponent={Grow}
                >
                    <button className='sell'> Sell</button>
                </Tooltip>
                <Tooltip 
                    title ='Analytics (A)'
                    placement = "top"
                    arrow 
                    TransitionComponent={Grow}
                >
                    <button className='action'><BarChartOutlined  className='icon'/></button>
                </Tooltip>
            </span>
        </>
    );
}

export default WatchListActions;