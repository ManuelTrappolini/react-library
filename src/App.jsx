import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Books from './pages/Books'
import DefaultLayout from './pages/DefaultLayout'



function App() {


  return (
    <>
      <BrowserRouter>
        {/* Your routes list */}
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<Books />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route >
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
