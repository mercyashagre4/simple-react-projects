/*===================================== About Us ==================================*/
import React from 'react';
import './Quick Deliverycss/AboutUs.css';
import AboutUsImg from '../../assets/quickImages/AboutUsImg.png';

const AboutUs = () => {
  return (
    <div className='container-1'>
        <div className='heading'>
            <h2>About Us</h2>
        </div>
        <div className='wrapper1'>
            <div className='wrapper1-1'>
                <p>Welcome to Our Delivery Service! We provide fast, reliable,<span> And Hassle-free delivery solutions.
                With our dedicated team</span> and robust logistics network, we ensure prompt and secure <span>delivery of your packages and documents.</span></p>
            </div>
            <div className='wrapper1-2'>
                <img src={ AboutUsImg } alt="About Us" />
            </div>
        </div>
    </div>
  );
}

export default AboutUs;
