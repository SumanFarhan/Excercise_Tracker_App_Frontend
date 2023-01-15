import React from 'react'
import ExcerciseActivity from './Component/ExcerciseActivity'
import './App.css'
import ActivityList from './Component/ActivityList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExcerciseActivity />}></Route>
          <Route path="/dashboard" element={<ActivityList />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App