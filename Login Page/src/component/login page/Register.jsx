import React from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai'; 

function Register() {
  return (
    <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
    <Link to="/Register"></Link>
        <div>
            <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
            <form action="">
            <div className="relative my-4">
                <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 apperance--none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer 'placeholder=''/>
                <lable for="email" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-21 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-28 peer-focus:scale-72 peer-focus:-translate-y-6 ">
                   Email</lable>
                <BiUser className='absolute top-0 right-4'/>
                
            </div>

            <div className='relative my-4'>
                <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 apperance--none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
               <lable for="password" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-21 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-28 peer-focus:scale-72 peer-focus:-translate-y-6 ">
                Password</lable>
               <AiOutlineUnlock className='absolute top-0 right-4'/>
            </div>
            <div className='relative my-4'>
                <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 apperance--none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
               <lable for="password" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-21 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-28 peer-focus:scale-72 peer-focus:-translate-y-6 ">Confirm Password</lable>
               <AiOutlineUnlock className='absolute top-0 right-4'/>
            </div>
            <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">Register</button>
            <div>
                <span className='m-4'>Already Create an Account? <Link to="/" className='text-blue-500'>Login</Link> </span>
            </div>
            </form>
        </div>

    </div>
  )
}

export default Register