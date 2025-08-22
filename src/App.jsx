import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import TermsAndConditions from './components/TermsAndConditions.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App

