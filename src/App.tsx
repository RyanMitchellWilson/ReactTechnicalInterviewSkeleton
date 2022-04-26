import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Rides from './screens/rides/Rides'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-container">
          <Rides/>
        </div>
      </div>
    </Provider>
  );
}

export default App
