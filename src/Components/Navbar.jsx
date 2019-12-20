import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <NavLink id='nav-home' to='/'>Home</NavLink>
      <NavLink id='nav-projects' to='/projects'>Projects</NavLink>
      <NavLink id='nav-about' to='/about'>About me</NavLink>
    </>
  )
}

export default Navbar
