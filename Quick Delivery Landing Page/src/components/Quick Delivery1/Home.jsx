import React from 'react';
import quickBackground from '../../assets/quickImages/quickBackground.jpg';
import './Quick Deliverycss/Home.css';

function Home() {
  return (
    <div className='container'>
        <img src={ quickBackground } className='homeImg'alt="background image"/>
        <h1>Simplify your life with our efficient <span>delivery solutions</span> </h1>
        <button type='button' className='button1'>Order Now</button>
    </div>
  )
}

export default Home;