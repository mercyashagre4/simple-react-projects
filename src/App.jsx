// import { Routes, Route, Link, Outlet } from "react-router-dom";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import FirstReact from './components/FirstReact'
// import ListUser from './components/ListUser';
// import CreateUser from './components/CreateUser';
// import ErrorPage from "./components/ErrorPage";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <ListUser/>
//   },
//   {
//     path: "user/noo",
//     element: <CreateUser/>
//   },
//   {
//     path: "*", // the * repesents any other page not provided by the router
//     element: <ErrorPage />
//   }
// ]);

// function App() {
  

//   return (
//     <div className="bg-red">
//       <FirstReact/>
//       <h5 className="text-7xl text-center text-blue-400">hello tailwind css</h5> 
//       <RouterProvider router={router}/>
      
//       <Outlet/>
      
//     </div>
//   );
// }

// export default App

/* ===============Random Joke generator ===============*/

import React from 'react';
import JokeGenerator from './components/JokeGenerator';

function App() {
  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Random Joke Generator</h1>
        <JokeGenerator />
    </div>
);
}
export default App;
