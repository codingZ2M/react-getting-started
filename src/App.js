import React from 'react'
import {Routes, Route} from 'react-router-dom';
import BikeDetails from './components/BikeDetails';
import NavBar from './components/NavBar';
import Home from './pages/Home';

const App = () => {
  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bike/:id" element={<BikeDetails/>} />
      </Routes>
    </div>
  )
}

export default App