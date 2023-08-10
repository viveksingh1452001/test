/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom'



function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid  bg-gradient p-2 ">

    <NavLink className="navbar-brand text-dark fw-bold fs-NavLink mx-6" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse pe-5" id="navbarNav">

      <ul className="navbar-nav ms-auto ">
        <li className="nav-item ps-3  ">
          <NavLink  className="nav-link  fs-6 text-dark" aria-current="page" to="/">Home </NavLink>
        </li>
        <li className="nav-item ps-3">
          <NavLink className="nav-link fs-6 text-dark " to="/about">About</NavLink>
        </li>
        <li className="nav-item ps-3">
          <NavLink className="nav-link fs-6 text-dark" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item ps-3">
          <NavLink className="nav-link fs-6 text-dark" to="/login">Login</NavLink>
        </li>
        <li className="nav-item ps-3">
          <NavLink className="nav-link fs-6 text-dark" to="/signup">Signup</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;