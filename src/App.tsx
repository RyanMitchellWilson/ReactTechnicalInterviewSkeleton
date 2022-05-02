import React from 'react'
import {
  BrowserRouter as Router, Outlet, Route, Routes
} from "react-router-dom"
import './App.css'

import NavBar from './components/navbar'
import Home from './screens/home/Home'
import Rides from './screens/rides/Rides'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />}/>
          <Route path='/rides' element={<Rides />}/>
          <Route path='*' element={<Home />}/>
        </Route>
      </Routes>
    </Router>
  )
}

const AppLayout = () => {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
