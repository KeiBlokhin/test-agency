import React from 'react'
import Box from '@mui/material/Box'
import Header from './components/Header'

import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import PagePage from './pages/PagesPage'
import ServicesPage from './pages/ServicesPage'
import DemosPage from './pages/DemosPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/demos' element={<DemosPage />} />
        <Route path='/pages' element={<PagePage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
