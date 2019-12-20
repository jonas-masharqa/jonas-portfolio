import React from 'react'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <NavLink id='nav-home' to='/'>Home</NavLink>
      <NavLink id='nav-home' to='/'>Projects</NavLink>
      <NavLink id='nav-home' to='/'>About me</NavLink>
    </>
  )
}

export default Navbar
