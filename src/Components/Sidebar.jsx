import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <>
      <Menu text vertical>
        <Menu.Item header 
          id='sidebar-name'
          name='Jonas Masharqa'
          as={NavLink}
          to='/'
        />
        <Menu.Item 
          id='siderbar-projects'
          name='Projects'
          as={NavLink}
          to='/projects'
        />
        <Menu.Item 
          id='siderbar-about'
          name='About me'
          as={NavLink}
          to='/about'
        />
      </Menu>
    </>
  )
}

export default Navbar
