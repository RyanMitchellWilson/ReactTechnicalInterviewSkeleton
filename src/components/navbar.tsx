import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link className="left" to="/">Home</Link>
      <Link to="/rides">Rides</Link>
    </nav>
  )
}

export default NavBar
