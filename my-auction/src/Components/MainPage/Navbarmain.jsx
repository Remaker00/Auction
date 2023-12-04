import React from 'react';
import Image from '../Images/ZA-logo.png';

const Navbarmain = () => {
    return (
        <div className='main-nav'>
            <div className='second-nav'>
                <div className='Logo-nav'>
                    <img
                        src={Image} // Path relative to the public directory
                        alt="LOGO IMAGE"// Set the height as per your design
                    />
                    <p>ZYGLER<div>AROSPACE</div></p>
                </div>
                <nav className='anavlist'>
                    <a href="/zygler-arospace">HOME</a>
                    <a href="/zygler-arospace/auction">AUCTION</a>
                    <a href="#news">NEWS</a>
                    <a href="#contact">CONTACT</a>
                </nav>
            </div>
        </div>
    );
};

export default Navbarmain;
