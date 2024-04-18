import React from 'react';
import { FcGoogle } from "react-icons/fc";
import './loginPageCss/LoginPage.css';

const LoginPage = () => {
  return (
    <div className='container'>
        <div className='form-wrapper'>
            <div className='heading'>
                <h1>Login</h1>
            </div>
            <div className='google-login'>
                <button type="button" className='google-login'>
                    <FcGoogle className='google-icon'/>
                    login with Google
                     
                </button>
            </div>
            <div className='horizontal-line'>
                <hr />
                <p>or</p>
                <hr />
            </div>
            <form action="">
                <div>
                    <label for="email">User name or Email</label>
                    <input type="email" id="email" name="email"  placeholder='@moonlight21' className='user_field' required/>
                </div>
                <div>
                    <label for="password">password</label>
                    <input type="password" id="password" name="password" placeholder='............' className='user_password' required/>
                </div>
            </form>
            <div className='forget_password'>
               <p > 
                <a href="">
                    forget password?
                </a> 
                </p>
            </div>
            <div className='login_button'>
                <button type='submit'>Login</button>
            </div>
        </div>
        
    </div>
  )
}

export default LoginPage;