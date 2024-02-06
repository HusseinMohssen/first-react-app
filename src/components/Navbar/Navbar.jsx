import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg text-uppercase sticky-md-top" style={{backgroundColor: '#2C3E50'}}>
  <div className="container my-3">
    <Link className="navbar-brand" to={"/"} style={{color: 'white', fontWeight: "bolder", fontSize: '32PX'}}>start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <NavLink className="nav-link" aria-current="page"  to={"/about"} style={{color: 'white', fontWeight: 'bolder'}}>about</NavLink>
        </li>
        <li className="nav-item px-0">
          <NavLink className="nav-link" aria-current="page"  to={"/portfolio"} style={{color: 'white', fontWeight: "bolder"}}>portfolio</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink className="nav-link" aria-current="page"  to={"/contactUS"} style={{color: 'white', fontWeight: "bolder"}}>contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}
