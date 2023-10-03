// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Landing from './pages/Landing/Landing'
import NewCar from './pages/NewCar/NewCar'
// components
import NavBar from './components/NavBar/NavBar'

// services

// styles
import './App.css'

function App() {
  const [cars, setCars] = useState([])

  function handleAddCar(carFormData) {
    const newCarsArray = [...cars, carFormData]
    setCars(newCarsArray)
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/cars/new' element={<NewCar />} />
      </Routes>
    </>
  )
}

export default App