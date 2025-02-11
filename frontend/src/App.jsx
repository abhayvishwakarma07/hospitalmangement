import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Conponent/Login';
import Ragistar from './Conponent/Ragistar';
import { Route, Routes } from 'react-router-dom';
import Home from './Conponent/Home';
import Appointment from './Conponent/Appointment';
import Doctor from './Conponent/Doctor';

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Ragistar/>}/>
      <Route path='/doctor' element={<Doctor/>}/>
      <Route path='/Appintement' element={<Appointment/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App;