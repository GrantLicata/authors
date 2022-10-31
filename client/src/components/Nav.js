import React from 'react'
import { NavLink } from 'react-router-dom'

let activeStyle = {
  color: "cyan"
}

let inactiveStyle = {
  color: "white"
}

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark">
      <div class="container-fluid">
        <div class="navbar-nav mx-auto">
          <a class="navbar-brand text-warning" href="/"><strong>Authors</strong></a>
          {/* <NavLink to='/' className='nav-link' style={({ isActive }) => 
            isActive ? activeStyle : inactiveStyle } end>Home</NavLink>
          <NavLink to='/form' className='nav-link' style={({ isActive }) => 
            isActive ? activeStyle : inactiveStyle } end>Form</NavLink> */}
        </div>
      </div>
    </nav>
  )
}

export default Nav