import React from 'react'
import { NavLink } from 'react-router-dom'
import Clock from '../../container/Navbar/Clock'

const Navbar = () => {
  return (
    <>
      <h1>Menú</h1>
      <div className='navbar__Links'>
        <NavLink to='/' className='pending' activeclassname='active'> Tareas </NavLink>
        <NavLink to='/Notes' className='pending' activeclassname='active' > Notas </NavLink>
        <NavLink to='/Calendar' className='pending' activeclassname='active' > Calendario </NavLink>
      </div>
      <Clock />
    </>
  )
}

export default Navbar