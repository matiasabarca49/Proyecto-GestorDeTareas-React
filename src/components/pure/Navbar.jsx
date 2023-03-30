import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <h1>Menú</h1>
      <div className='navbar__Links'>
        <Link to='/' className='btn' > Tareas </Link>
        <Link to='/Calendar' className='btn' > Calendario </Link>
      </div>

    </>
  )
}

export default Navbar