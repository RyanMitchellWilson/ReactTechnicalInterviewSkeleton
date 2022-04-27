import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()

  const pressHome = useCallback(() => {
    navigate('/')
  }, [navigate])
  const pressRides = useCallback(() => {
    navigate('/rides')
  }, [navigate])

  return (
    <div className='RoutingContainer'>
      <div className='RouteButtonLeft' onClick={pressHome}>
        <div>Home</div>
      </div>
      <div className='RouteButtonRight' onClick={pressRides}>
        <div>Rides</div>
      </div>
    </div>
  )
}

export default Header
