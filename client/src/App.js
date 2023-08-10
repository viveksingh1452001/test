import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/home'
import Contact from './components/Contact/contact'
import About from './components/About/about'
import Login from './components/login'
import Signup from './components/Signup/signup'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App