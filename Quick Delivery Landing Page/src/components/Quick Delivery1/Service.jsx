/*============================================ Service =====================================*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTemperatureHigh, faArrowUpRightFromSquare, faCube } from '@fortawesome/free-solid-svg-icons';
import './Quick Deliverycss/Service.css';

const Service = () => {
  return (
    <div className="explore-section">
          <h2>Explore Our <span className='span-1'>Service</span> </h2>
          <p>Experience the ease and convenience of our delivery service today. [Sign Up Now] to get started and <span> enjoy a seamless delivery experience like never before.</span></p>
          <div className='cards'>
            <div className="card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faCube} className="icon package-icon"  />
                <h1>Package Delivery</h1>
              </div>
              <p>We transport packages from location, <span>ensuring safe and timely delivery.</span> </p>
              <div className="arrow-icon">
                <i className="fas fa-arrow-right"></i>
              </div>
              <hr className='horizontal-line'></hr>
              <div>
                <div className="icon-section">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow-icon' />
                <a href='' className="more">More details</a>
                </div>
                <hr className='bold'></hr>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faBell} className="icon" id='bell-icon'/>
                <h1>Tracking and Notifications</h1>
              </div>
              <p>Customers can track the progress, and <span> Notifications are sent at key milestones.</span></p>
              <div className="arrow-icon">
                <i className="fas fa-arrow-right"></i>
              </div>
              <hr className='horizontal-line'></hr>
              <div>
                <div className="icon-section">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow-icon'/>
                <a href='' className="more">More details</a>
                </div>
                <hr className='bold'></hr>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                
                <FontAwesomeIcon icon={faTemperatureHigh} className="icon" />
                <h1>Special Handling:</h1>
              </div>
              <p>They may provide extra packaging, <span>temperature-controlled transportation.</span></p>
              <div className="arrow-icon">
                <i className="fas fa-arrow-right"></i>
              </div>
              <hr className='horizontal-line'></hr>
              <div>
                <div className="icon-section">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow-icon' />
                <a href=''className="more">More details</a>
                </div>
                <hr className='bold'></hr>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Service;
