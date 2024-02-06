import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../../components/Home/Home'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router'

export default function UserLayout() {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}
