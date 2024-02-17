// import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import FirstReact from './components/FirstReact'
// import ListUser from './components/ListUser';
// import CreateUser from './components/CreateUser';
// import ErrorPage from "./components/ErrorPage";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import EditUser from "./components/EditUser";

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <ListUser/>
//   },
//   {
//     path: "user/create",
//     element: <CreateUser/>
//   },
//   {
//     path: "user/edit",
//     element: <EditUser/>
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
//       <h5 className="text-7xl text-center text-blue-400">User Data Managment</h5> 
//       <RouterProvider router={router}/>
      
//       <Outlet/>

      
//     </div>
//   );
// }

// export default App;

// this is a choice for router provider tor navigate links
/* <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ListUser/>}>
          </Route>
        </Routes>
      </BrowserRouter> */
      

/* ===============Random Joke generator ===============*/

// import React from 'react';
// import JokeGenerator from './components/JokeGenerator';

// function App() {
//   return (
//     <div className="p-6">
//         <h1 className="text-2xl font-bold mb-4">Random Joke Generator</h1>
//         <JokeGenerator />
//     </div>
// );
// }
// export default App;

/*================== Restaurant Landing page ==================*/
// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Menu from "./components/Menu";
// import Footer from "./components/Footer";
// import Dishes from "./components/Dishes";
// import Reviews from "./components/Review";
// import Review from "./components/Review";

// const App = () => {
//   return (
//     <div>
//       <Navbar />

//       <main>
//         <div id="home">
//           <Home />
//         </div>

//         <div id="dishes">
//           <Dishes />
//         </div>

//         <div id="about">
//           <About />
//         </div>

//         <div id="menu">
//           <Menu />
//         </div>

//         <div id="review">
//           <Review />
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default App;


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
