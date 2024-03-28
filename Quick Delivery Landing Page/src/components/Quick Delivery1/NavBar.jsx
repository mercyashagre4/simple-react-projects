/*=============================================== NavBar ===================================*/
import React from 'react';
import logo from '../../assets/quickImages/logo.png';
import './Quick Deliverycss/NavBar.css';

const NavBar = () => {
  return (
    <div>
        <div className='container'>
            <h6>quick delivery</h6>
            <div className='wrapper'>
                    <img src={ logo } alt="logo"/>
                    <p> <span> quick</span> delivery</p>
                        <nav className='wrapper-1'>
                            <ul>
                                <a href=''><li className='active'>Home</li></a>
                                <a href=''><li>Service</li></a>
                                <a href=''><li>About Us</li></a>
                                <a href=''><li>Contact Us</li></a>
                            </ul>
                        </nav>
                    <div className='wrapper-2'>
                        <div className='btn'>
                            <button type='button'>Login</button>
                        </div>
                        <div className='signUp'>
                            <button type='button'>sign up</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
);
}

export default NavBar;
                    
                    

            
            
