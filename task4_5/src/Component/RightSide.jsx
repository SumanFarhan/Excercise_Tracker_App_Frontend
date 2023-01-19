import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Alert from 'react-bootstrap/Alert'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addActivity } from '../Task 8-Connect to Frontend/Reducer'
import {useNavigate } from 'react-router-dom'


const RightSide = ({addExcercise, setaddExcercise}) => {
  // const [addExcercise, setaddExcercise] = useState({
  //   name: "",
  //   description: "",
  //   activitytype: "",
  //   duration: "",
  //   date: "",
  // });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const redirectToDashboard = useSelector(state => state.excercise.redirectToDashboard)

  useEffect(() => {
    if (redirectToDashboard) {
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
      {excerciseStatus.status === 'rejected add' ? (
      <Alert variant="danger" style={{width:'500px'}}>Fill all Fields</Alert>
      ):null}
    </>
  )
}

export default RightSide