import React from 'react';
import "../../styles/Pricing.css"
import pricing_image from '../../assets/pricing.png'

function Pricing() {
    return (
        <>
        <h2 className='Pricing-title'>Trade More Pay Less!</h2>
        <div className='Pricing-section'>
            <div className='Pricing-text-box'>
                <h3>Unbeatable Pricing</h3>
                <p>We pioneered the concept of discount broking and price transparency in india.Flat fees and no hidden charges</p>
                <a href='#' className='pricing-link'>See Pricing </a>
            </div>
            <div className='Pricing-image-box'>
                <img src={pricing_image}></img>
            </div>
        </div>
        </>
    );
}

export default Pricing;