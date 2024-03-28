// import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
// // import { useState } from 'react';
// // import reactLogo from './assets/react.svg';
// // import viteLogo from '/vite.svg';
// import './App.css'
// import FirstReact from './components/FirstReact';
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
//       <RouterProvider router={router} />
//       <Outlet />

      
//     </div>
//   );
// }

// export default App;

// this is a choice for router provider for navigate links
/* <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ListUser/>}>
          </Route>
        </Routes>
      </BrowserRouter> */
      

/* ===============Random Joke generator ===============*/

// import React from 'react';
// import JokeGenerator from './components/joke generator/JokeGenerator';

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
// import Navbar from "./components/restaurant landing/Navbar";
// import Home from "./components/restaurant landing/Home";
// import About from "./components/restaurant landing/About";
// import Menu from "./components/restaurant landing/Menu";
// import Footer from "./components/restaurant landing/Footer";
// import Dishes from "./components/restaurant landing/Dishes";
// import Review from "./components/restaurant landing/Review";

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




/*============================== Login Page ==============================*/
// import React from 'react';
// import './App.css';
// import Login from './components/login page/Login';
// import Register from './components/login page/Register';
// import { BrowserRouter, Routes, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element : <Login /> 
//   },
//   {
//     path:'/user/register',
//     element : <Register /> 
//   }
// ])

// function App() {
//   return (
//     <div className="text-white h-[100vh] flex justify-center items-center bg-[url('./assets/img/background2.png')] bg-cover bg-no-repreat">
//        <RouterProvider router={router}/>
//     </div>
//   )
// }

// export default App;


/*=================================== Quick delivery landing page ====================================*/
// import Navbar from './components/quickDelivery landing/Navbar';
// import Home from './components/quickDelivery landing/Home';
// import Service from './components/quickDelivery landing/Service';
// import About from './components/quickDelivery landing/About';
// import ContactUs1 from './components/quickDelivery landing/ContactUs1';
// import ContactUs from './components/quickDelivery landing/ContactUs';

// function App() {
//   return(
//     <div>
//       <Navbar />
//       <Home />
//       <Service />
//       <About />
//       <ContactUs1 />
//       <ContactUs />
//     </div>
//   )
// }
// export default App;


/*============================ Api request and Data Fetching using UseFetch() ========================= */
// import './App.css';
// import React, { useEffect } from 'react';
// import UseFetch from './components/use fetch/UseFetch';

// function App() {
//   const BASE_URL = "https://inshortsapi.vercel.app/news?category=science"
//   const { data, loading, error } = UseFetch(BASE_URL);
//   return (
//     <div className='App'>
//       <h1 className='w-90 mx-[350px] text-2xl rounded hover:bg-red-600 hover:text-white'>Custom React Hook(data fetching)</h1>
//       { loading && <h3>loading...</h3> }
//       { error && <h3>Error: something went wrong</h3> }
//       <div className='text-1xl hover:bg-red-200 hover:text-white'>
//         <pre>{ JSON.stringify(data, undefined, 2)}</pre>
//       </div>
//     </div>
   
//   );
// }

// export default App;

/*=================================== Animated Responsive Login page with Tailwind css ============================*/

// import React from 'react';
// import LoginPage from './components/animated Login page/LoginPage';

// function App() {
//   return (
//     <div className='bg-gray-100'>
//       <LoginPage />
//     </div>
//   )
// }

// export default App;

//            /*========================================== Quiz App ================================= */

// import React, {useState, useContext} from 'react';
// import MainMenu from './components/Quiz App/MainMenu';
// import Quiz from './components/Quiz App/Quiz';
// import EndScreen from './components/Quiz App/EndScreen';
// import { QuizContext } from './Helpers/Contexts';

// function App() {
//   const [ gameState, setGameState ] = useState("menu");
//   const [ score, setScore ] = useState(0);
//   return(
//     <div className='App'>
//     <h1>Quiz App</h1>
//     <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
//     {gameState === 'menu' && <MainMenu/>}
//     {gameState === 'quiz' && <Quiz/>}
//     {gameState === 'endScreen' && <EndScreen/>}
//     </QuizContext.Provider>
//     </div>
//   )
// }

// export default App;

/*===================Quick delivery2 ==================*/
// import React from 'react';
// import HomePage from './components/QuickDelivery/HomePage';
// import ExploreService from './components/QuickDelivery/ExploreService';
// import HowItWorks from './components/QuickDelivery/HowItWorks';
// import AboutUs from './components/QuickDelivery/AboutUs';
// import ContactUs from './components/QuickDelivery/ContactUs';


// function App() {
//   return (
//     <div>
//       <HomePage/>
//       <ExploreService />
//       <AboutUs />
//       <HowItWorks />
//       <ContactUs />
//     </div>
//   )
// }

// export default App;

/*=================== Simple chatbot =========================*/
// import React from 'react'
// import { Segment } from 'semantic-ui-react';
// import ChatBot from 'react-simple-chatbot';


// function App() {
//   const steps = [
//     {
//         id: 'Greet',
//         message: 'Hello, Welcome to our website',
//         trigger: 'Ask Name'
//     },
//     {
//         id:'Ask Name',
//         message: 'please enter your name',
//         trigger: 'Waiting1'
//     },
//     {
//       id: 'waiting1',
//       user: 'true',
//       trigger: 'Name'
//     },
//     {
//       id:'Name',
//       message: 'Hi { previousValue }, please select your issue',
//       tirgger: 'issues'
//     },
//     {
//       id: 'issues',
//       option: [
//         {value: 'React', lable: 'React', trigger: 'React'},
//         {value: 'Angular', lable: 'Angular', trigger: 'Angular'}
//       ],
//     },
//     {
//       id: 'React',
//       message: 'Thanks for telling your react issue',
//       end: true
//     },
//     {
//       id: 'Angular',
//       message: 'Thanks for telling your Angular issue',
//       end: true
//     }
// ]
//   return (
//     <div>
//       <Segment floated="right">
//         <ChatBot steps={steps} />
//      </Segment>
//     </div>
//   )
// }

// export default App;

/*============================== Quick Delivery landig Page ===============================*/
// import React from 'react';
// import Homepage from './components/Quick Delivery/HomePage';
// import ExploreService from './components/Quick Delivery/ExploreService';
// import AboutUs from './components/Quick Delivery/AboutUs';
// import How from './components/Quick Delivery/How';
// import ContactUs from './components/Quick Delivery/ContactUs';

// function App() {
//   return (
//     <div>
//       <Homepage />
//       <ExploreService />
//       <AboutUs />
//       <How />
//       <ContactUs />
//     </div>
//   )
// }

// export default App;

/*=========================== Quick Deliveryl landing page ============================*/
import React from 'react';
import NavBar from './components/Quick Delivery1/NavBar';
import Home from './components/Quick Delivery1/Home';
import Service from './components/Quick Delivery1/Service';
import AboutUs from './components/Quick Delivery1/AboutUs';
import HowItWorks from './components/Quick Delivery1/HowItWorks';
import ContactUs from './components/Quick Delivery1/ContactUs';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Service />
      <AboutUs />
      <HowItWorks />
      <ContactUs />
    </div>
  )
}

export default App;

