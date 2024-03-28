import React from 'react';
// import { FaDotCircle} from 'react-icons/fa';
import { GoCircle } from "react-icons/go";
import howItWorksImg from '../../assets/quickImages/howItWorksImg.jpg';
import './Quick Deliverycss/HowItWorks.css';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
const HowItWorks = () => {
  return (
    <div>
        <div className='heading-1'>
            <h2>Easy Steps to use the Service</h2>
        </div>
        <div className='wrapper2'>
            <div className='wrapper2-1'>
                <img src={ howItWorksImg } alt="About Us" />
            </div>
            <div className='wrapper2-2'>
                  <div className='wrapper-icon-section'>
                    <div className='icon-wrapper'>
                      <div className='icon-wrapper1'>
                        <div><GoCircle/></div>
                        <div><GoCircle/></div>
                      </div>
                      <div className='icon-wrapper1'>
                        <div><GoCircle/></div>
                        <div><GoCircle/></div>
                      </div> 
                    </div> 
                    <p> <span> Go to the website and Register</span>
                      <br/> then you can create an account in the website
                    </p>
                  </div>

                  <div className='wrapper-icon-section'>
                    <div className='icon-wrapper'>
                      <div className='icon-wrapper1'>
                        <div><GoCircle/></div>
                        <div><GoCircle/></div>
                      </div>
                      <div className='icon-wrapper1'>
                        <div><GoCircle/></div>
                        <div><GoCircle/></div>
                      </div> 
                    </div> 
                    <p> <span> Pick your order </span>
                      <br/>Pick among various catagories depending on your taste 
                    </p>
                  </div>

                  <div className='wrapper-icon-section'>
                    <div className='icon-wrapper'>
                      <div className='icon-wrapper1'>
                        <div><GoCircle/></div>
                        <div><GoCircle/></div>
                      </div>
                      <div className='icon-wrapper1'>
                        <div><GoCircle/></div>
                        <div><GoCircle/></div>
                      </div> 
                    </div> 
                    <p> <span> Add your address </span>
                      <br/>Add your  address whether it’s your home or your work place.
                    </p>
                  </div>

                  <div className='wrapper-icon-section'>
                    <div className='icon-wrapper'>
                      <div className='icon-wrapper1'>
                        <div><GoCircle/></div>
                        <div><GoCircle/></div>
                      </div>
                      <div className='icon-wrapper1'>
                        <div><GoCircle/></div>
                        <div><GoCircle/></div>
                      </div> 
                    </div> 
                    <p> <span> Payment option </span>
                        <br/>see the payment option in the website 
                    </p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks;