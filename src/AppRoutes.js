import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Trivia from './components/trivia/Trivia'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Trivia/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
