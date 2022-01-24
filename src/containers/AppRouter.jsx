import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import TestPage from './TestPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path=':theme/:level' element={<TestPage />} />
        </Routes>
    )
}

export default AppRouter