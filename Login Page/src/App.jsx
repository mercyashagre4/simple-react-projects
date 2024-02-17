
/*=================== Login Page ===================*/
import React from 'react';
import './App.css';
import Login from './components/login page/Login';
import Register from './components/login page/Register';
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element : <Login /> 
  },
  {
    path:'/user/register',
    element : <Register /> 
  }
])

function App() {
  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-[url('./assets/img/background2.png')] bg-cover bg-no-repreat">
       <RouterProvider router={router}/>
    </div>
  )
}

export default App;
