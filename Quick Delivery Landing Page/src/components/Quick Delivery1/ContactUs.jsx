import React from 'react';
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineAddLocation } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import logo from '../../assets/quickImages/logo.png';
import './Quick Deliverycss/ContactUs.css';

const ContactUs = () => {
  return (
    <div className='container-footer'>
        <div className='heading-footer'>
        <h1>Get In <span>Touch </span></h1>
        </div>
        <div className='footer-wrapper'> 

            <div className='footer-wrapper-1'>
                <div className='phone'>
                    <HiOutlinePhone  className='phone-icon'/>
                    <p>Phone Number <span >0920014218 </span></p>
                </div>
                <div className='email'>
                    <MdOutlineMailOutline className='email-icon'/>
                    <p>E Mail <span>Quickdelivey.Com</span></p>
                </div>
                <div className='address'>
                    <MdOutlineAddLocation className='address-icon'/>
                    <p>Address <span> Welo Sefer </span></p>
                </div>
            </div>

            <div className='footer-wrapper-2'>
                <form >
                    <div className='footer-section-1'>

                        <div className='input-section-1'>
                            <input 
                                type="text"
                                placeholder='first name'
                               />
                        </div>
                        <div className='input-section-1'>
                            <input 
                                type="text"
                                placeholder='last name' />
                        </div>
                    </div>
                        <div className='section-2'>
                            <input
                                type="text"
                                placeholder='email address' />
                        </div>
                        <div className='section-3'>
                            <input 
                                type="text"
                                placeholder='message' />
                        </div>
                        <div className='section-4 '>
                        <button type='button' >
                            Order Now
                        </button>
                        </div>
                </form>
            </div>
        </div>

        <div className='footer-wrapper-3'>
              <div className='row-wrapper-3'>
                  <div className='logo-section'>
                    <img src={ logo } alt="logo"/>
                    <p> <span> quick</span> delivery</p>
                  </div>

                  <div className='link-section'>
                      <h3>quick links</h3>
                      <div className='link-section-1'>
                        <p  ><a href="">Home</a></p>
                        <p ><a href="">Menu</a></p>
                        <p ><a href="">About Us</a></p>
                      </div>
                  </div>

                  <div className='aboutus-section'>
                    <h3 >About Us</h3>
                      <div className='aboutus-section-1'>
                        <p >Promotions</p>
                        <p >Customer Care</p>
                        <p >Legal Information</p>
                      </div>
                  </div>

                  <div className='follow-section'>
                      <h3>Follow Us</h3>
                      <div className='follow-icons'>
                        <FaInstagramSquare  className='instagram-icon'/>
                        <FaFacebook />
                        <FaTwitter  />
                        <FaPinterest  />
                      </div>
                  </div>
              </div>

                  <div className='copyright-section'>
                    <div className='footer-horizontal-line'></div>
                    <p>&#169; All Rights Reserved</p>
                  </div>
        </div>
    </div>
  )
}

export default ContactUs