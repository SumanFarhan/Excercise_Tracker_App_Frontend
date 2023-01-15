import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import run from '../Images/RUN.PNG'
import walk from '../Images/walk.PNG'
import hike from '../Images/hike.PNG'
import swim from '../Images/swim.PNG'
import ride from '../Images/Ride.PNG'
import {addActivity} from '../Task 8-Connect to Frontend/Reducer'
import { Link, useNavigate } from 'react-router-dom'


const RightSide = () => {
  const [addExcercise, setaddExcercise] = useState({
    name: "",
    description: "",
    activityType:'',
    duration: "",
    date: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const redirectToDashboard = useSelector(state => state.excercise.redirectToDashboard)
  

  useEffect(()=>{
    if(redirectToDashboard){
        navigate("/dashboard");
    }
},[redirectToDashboard])

  const Setting = (event) => {
    const { name, value } = event.target
    setaddExcercise((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }
  return (
    <>
      <h5>NAME</h5>
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
          <input type="radio" name="run" value={addExcercise.activityType}  onChange={Setting}/>
          <img src={run} alt="Option 1" className='activityTypeImage'/>
        </label>
        <label>
          <input type="radio" name="bicycleRide" value={addExcercise.activityType}  onChange={Setting}  />
          <img src={ride} alt="Option 2" className='activityTypeImage'/>
        </label>
        <label>
          <input type="radio" name="walk" value={addExcercise.activityType}  onChange={Setting}  />
          <img src={walk} alt="Option 3" className='activityTypeImage' />
        </label>
        <label>
          <input type="radio" name="swim" value={addExcercise.activityType}  onChange={Setting}  />
          <img src={swim} alt="Option 4" className='activityTypeImage' />
        </label>
        <label>
          <input type="radio" name="hike" value={addExcercise.activityType}  onChange={Setting}  />
          <img src={hike} alt="Option 5" className='activityTypeImage'/>
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
      <div className="button"><Button variant="primary" className='btnAdd' onClick={()=>dispatch(addActivity(addExcercise))}><AddCircleIcon style={{ marginRight: "10px", marginBottom: "2px" }} />Excercise Activty</Button></div>
    </>
  )
}

export default RightSide