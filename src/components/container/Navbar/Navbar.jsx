import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Clock from './Clock'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <>
    <img className='btnMenu' src="./img/menu.png" alt="Menu" onClick={ () => setShowMenu(!showMenu)}/>
    <div className={showMenu? 'navbar': 'navbar navbar--desactivated' }>
      <h1>Menú</h1>
      <div className='navbar__Links'>
        <NavLink to='/' className='pending' activeclassname='active'> Tareas </NavLink>
        <NavLink to='/Notes' className='pending' activeclassname='active' > Notas </NavLink>
      </div>
      <Clock />
    </div>
    </>
  )
}

export default Navbar