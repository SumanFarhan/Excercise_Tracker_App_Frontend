import React ,{useState}from 'react'
import ExcerciseActivity from './Component/ExcerciseActivity'
import './App.css'
import ActivityList from './Component/ActivityList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [addExcercise, setaddExcercise] = useState({
    name: "",
    description: "",
    activitytype: "run",
    duration: "",
    date: "",
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExcerciseActivity addExcercise={addExcercise} setaddExcercise={setaddExcercise}/>}></Route>
          <Route path="/dashboard" element={<ActivityList setaddExcercise={setaddExcercise}/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App