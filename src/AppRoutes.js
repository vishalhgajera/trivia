import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Trivia from './components/trivia/Trivia'
import Result from './components/result/Result'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Trivia/>} />
            <Route path='/result' element={<Result/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
