import React from 'react'
import Excercisegirl from '../Images/Excercise Girl.json'
import Lottie from "lottie-react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Alert from 'react-bootstrap/Alert'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addActivity } from '../Task 8-Connect to Frontend/Reducer'
import { useNavigate } from 'react-router-dom'
import run from '../Images/RUN.PNG'
import hike from '../Images/hike.PNG'
import swim from '../Images/swim.PNG'
import walk from '../Images/walk.PNG'
import bicycle from '../Images/Ride.PNG'



const ExcerciseActivity = ({addExcercise, setaddExcercise}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const redirectToDashboard = useSelector(state => state.excercise.redirectToDashboard)
  const excerciseStatus = useSelector(state => state.excercise)
  useEffect(() => {
    if (redirectToDashboard) {
      navigate("/dashboard");
    }
  }, [redirectToDashboard])

  const Setting = (event) => {
    const { name, value } = event.target
    setaddExcercise((data) => {
      console.log(data)
      return {
        ...data,
        [name]: value
      }
    })
  }
  const option = {
    className: "lottie-svg-class"
  }


  return (
    <>
      <div className="main">
        <div className="leftSide">  <h1 className='heading'>Excercise Tracker App</h1>
          <Lottie
            animationData={Excercisegirl}
            loop={true}
            rendererSettings={
              option
            }
            className="animationImage"
          /></div>
        <div className="rightSide"><h5>NAME</h5>
          <InputGroup className="mb-3">
            <Form.Control
              type='text'
              name="name"
              value={addExcercise.name}
              onChange={Setting}
            />
          </InputGroup>
          <h5>DESCRIPTION</h5>
          <InputGroup className="mb-3">
            <Form.Control as="textarea" aria-label="With textarea" name="description" value={addExcercise.description}
              onChange={Setting} />
          </InputGroup>
          <h5>ACTIVITY TYPE</h5>
          <div className="mb-3">
          <label>
                        <input type="radio" name="activitytype" value="run" 
                        checked={addExcercise.activitytype === 'run'} onChange={Setting}/>
                        <img src={run} alt="run" />
                      </label>
                      <label>
                        <input type="radio"  name="activitytype" value="hike" 
                        checked={addExcercise.activitytype === 'hike'} onChange={Setting} />
                        <img src={hike} alt="hike" />
                      </label>
                      <label>
                        <input type="radio"  name="activitytype" value="bicycle" 
                        checked={addExcercise.activitytype === 'bicycle'} onChange={Setting} />
                        <img src={bicycle} alt="bicycle" />
                      </label>
                      <label>
                        <input type="radio" name="activitytype" value="walk" 
                        checked={addExcercise.activitytype === 'walk'} onChange={Setting}/>
                        <img src={walk} alt="Option 2" />
                      </label>
                      <label>
                        <input type="radio" name="activitytype" value="swim" 
                         checked={addExcercise.activitytype === 'swim'} onChange={Setting}/>
                        <img src={swim} alt="swim" />
                      </label>
          </div>
          <h5>DURATION</h5>
          <InputGroup className="mb-3">
            <Form.Control
              type='time'
              name="duration"
              value={addExcercise.duration}
              onChange={Setting}
            />
          </InputGroup>
          <h5>DATE</h5>
          <InputGroup className="mb-3">
            <Form.Control
              type='date'
              name="date"
              value={addExcercise.date}
              onChange={Setting}
            />
          </InputGroup>
          <div className="button"><Button variant="primary" className='btnAdd' onClick={() => dispatch(addActivity(addExcercise))}><AddCircleIcon style={{ marginRight: "10px", marginBottom: "2px" }} />Excercise Activty</Button></div>
          {excerciseStatus.status === 'rejected add' ? (
            <Alert variant="danger" style={{ width: '500px' }}>Fill all Fields</Alert>
          ) : null}</div>
      </div>
    </>
  )
}

export default ExcerciseActivity