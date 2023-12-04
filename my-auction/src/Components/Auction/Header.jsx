import React from 'react';
import Image1 from '../Images/Cabin-1.jpg';
import Image2 from '../Images/Cabin.jpg';
import Image3 from '../Images/Cabin-2.jpg';
import Image4 from '../Images/Cabin-3.jpg';

export default function Header() {
    return (
        <div className='head-container'>
            <div className='container-1'>
                <p>Unlock the Skies:<div>Where Auctions Meet Aviation Excellence</div></p>
            </div>
            <div className='container-2'>
                <img
                    src={Image1} // Path relative to the public directory
                    alt="PLANE IMAGE"
                    width={450} // Set the width as per your design
                    height={600} // Set the height as per your design
                />
            </div>
            <div className='container-2'>
                <img
                    src={Image2}
                    alt="PLANE IMAGE"
                    width={450} 
                    height={600} 
                />
            </div>
            <div className='container-2'>
                <img
                    src={Image3} 
                    alt="PLANE IMAGE"
                    width={450} 
                    height={600} 
                />
            </div>
            <div className='container-2'>
                <img
                    src={Image4}
                    alt="PLANE IMAGE"
                    width={450}
                    height={600} 
                />
            </div>
        </div>
    );
}
