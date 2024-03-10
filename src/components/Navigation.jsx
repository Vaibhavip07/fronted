import React from 'react'
import './navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/invoice'}>Invoice</NavLink>
    <NavLink to={'/about'}>About us</NavLink>
    
    
</nav>
  )
}

export default Navigation