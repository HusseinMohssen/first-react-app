import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import Portfolio from './components/Portfolio/Portfolio'
import {RouterProvider, createHashRouter} from 'react-router-dom'
import UserLayout from './Layouts/UserLayout/UserLayout'
export default function App() {
    let routes = createHashRouter([
        {
          path: '/', element: <UserLayout/>, children:[
          {index: true , element: <Home/>},
          {path:'/home' , element: <Home/>},
          {path: 'about', element: <About/>},
          {path: 'portfolio', element: <Portfolio/>},
          {path: 'contactUS', element: <ContactUs/>},
          ]
        },
        
      ])
    
      return (
        <>
    
          <RouterProvider router = {routes} />
          
        </>
      )
    }
