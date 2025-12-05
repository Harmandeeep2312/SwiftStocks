import React from 'react';
import "../../styles/Education.css"
// eslint-disable-next-line
import education_image from '../../assets/education.png'

function Education() {
    return ( 
        <div className='Education-Section'>
            <h2 className='Education-title'>Explore, Learn, and Grow as an Investor</h2>
            <div className='Education-card'>
                <div className='Education-image'>
                    <img src={education_image}></img>
                </div>
                <div className='Education-text ms-auto'>
                    <h3>Free and open market education</h3>
                    <p>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a className='Education-link' href='#'>Varsity</a>
                    <br></br>
                    <p>
                        TradingQ&A of Zerodha, the most active trading and investment community in India for all your market related queries.
                        <br></br>
                        <a className='Education-link' href='#'>TradingQ&A</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education ;