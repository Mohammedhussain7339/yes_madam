import React from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AddFacility from './component/AddFacility';
import AdminHome from './component/AdminHome';
import Userhome from './component1/Userhome';
import Mainpage from './component1/Mainpage';
import SpaCet from './component1/SpaCet';
import SpasubCat from './component1/SpasubCat';
import Blog from './component1/Blog';
import Navbar from './component1/Navbar';
import Login from './component1/Login';
import Signup from './component1/Signup';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Mainpage/></>
    },
    {
      path:'/Blog',
      element:<><Navbar/><Blog/></>
    },
    {
      path:'/Login',
      element:<><Navbar/><Login/></>
    },
    {
      path:'/Signup',
      element:<><Navbar/><Signup/></>
    }
  ])
  return (
  <>

  {/* <Mainpage/> */}
  <RouterProvider router={router}/>
  </>
 )
}

export default App
