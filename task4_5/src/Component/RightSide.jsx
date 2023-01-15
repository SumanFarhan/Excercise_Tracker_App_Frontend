import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getExcercise} from '../Task 8-Connect to Frontend/Reducer'

import { addActivity } from '../Task 8-Connect to Frontend/Reducer'
import { Link, useNavigate } from 'react-router-dom'


const RightSide = () => {
  const [addExcercise, setaddExcercise] = useState({
    name: "",
    description: "",
    activitytype: "",
    duration: "",
    date: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const redirectToDashboard = useSelector(state => state.excercise.redirectToDashboard)
  const excerciseData = useSelector(state => state.excercise.excerciseData)
  

  useEffect(() => {
    if (redirectToDashboard) {
       dispatch(getExcercise())
      console.log("inside useEffect",excerciseData)
      navigate("/dashboard");
    }
  }, [redirectToDashboard])

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
    {console.log(addExcercise)}
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
      <InputGroup className="mb-3">
        <Form.Control
          type='text'
          name="activitytype"
          value={addExcercise.activitytype}
          onChange={Setting}
        />
      </InputGroup>
        
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
    </>
  )
}

export default RightSide