import React from 'react'
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom"
import './App.css'
import Header from './components/header/Header'
import Home from './screens/home/Home'
import Rides from './screens/rides/Rides'

function App() {
  return (
    <div className="App">
      <Router>
        <div className='AppContainer'>
          <Header/>
          <Routes>
            <Route path='rides' element={<Rides/>}/>
            <Route path='*' element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
