import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup';
import {useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';
import {getExcercise} from '../Task 8-Connect to Frontend/Reducer'


import { useDispatch } from 'react-redux'

const ActivityList = () => {
  const [addExcercise, setaddExcercise] = useState({
    name: "",
    description: "",
    activityType: ['run', 'walk', 'hike', 'swim', 'ride'],
    duration: "",
    date: "",
  });

  const dispatch = useDispatch()
  const excerciseData = useSelector(state => state.excercise.excerciseData)

  const Setting = (event) => {
    const { name, value } = event.target
    setaddExcercise((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false);
  const stateData = useSelector(state => state.excercise.excerciseData)
  // const val = dispatch(getExcercise())
  // const stateData = useSelector(state => state.excerciseData)
  return (
    <>
    {/* {console.log(val)} */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#c8102e' }}>Update Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body><form>
          <label>NAME
            <input type="text" value={addExcercise.name} name="name" onChange={Setting} />
          </label>
          <label>Description
            <textarea type="text" value={addExcercise.description} name="description" onChange={Setting} />
          </label>
          <label>Activity type
          <InputGroup className="mb-3">
              <Form.Control
                type='text'
                name="activitytype"
                value={addExcercise.activitytype}
                onChange={Setting}
              />
            </InputGroup>
          </label>
          <label>Duration
            <input type="email" value={addExcercise.duration} name="duration" onChange={Setting} />
          </label>
          <label>Date
            <input type="email" value={addExcercise.date} name="date" onChange={Setting} />
          </label>
        </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" style={{ color: '#fefcfa', backgroundColor: '#c8102e', border: 'none' }} onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='activityList'>
        <Navbar>
          <Container className='justify-content-center'>
            <Navbar.Brand> <h1 className='headingList'>Excercise Tracker App</h1></Navbar.Brand>
          </Container>
        </Navbar>
        <div className="cardsList">
          {stateData?.map((v,i)=>{
            return (
              <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{v.name}
                  <Button variant="primary" className='buttonUpdate' onClick={handleShow}>
                    <EditIcon style={{ marginLeft: "80px", marginBottom: "2px" }} />
                  </Button>
                  <DeleteIcon />
                </Card.Title>
                <Card.Text>
                  {v.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
            <ListGroup.Item>Activity Type:{v.activitytype}</ListGroup.Item>
            <ListGroup.Item>Duration:{v.duration}</ListGroup.Item>
            <ListGroup.Item>Date:{v.date}</ListGroup.Item>
              </ListGroup>
            </Card>
            )
          })}
    
          {/* <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Activity Type:</ListGroup.Item>
              <ListGroup.Item>Duration:</ListGroup.Item>
              <ListGroup.Item>Date:</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Activity Type:</ListGroup.Item>
              <ListGroup.Item>Duration:</ListGroup.Item>
              <ListGroup.Item>Date:</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Activity Type:</ListGroup.Item>
              <ListGroup.Item>Duration:</ListGroup.Item>
              <ListGroup.Item>Date:</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Activity Type:</ListGroup.Item>
              <ListGroup.Item>Duration:</ListGroup.Item>
              <ListGroup.Item>Date:</ListGroup.Item>
            </ListGroup>
          </Card> */}
        </div>
      </div>
    </>
  )

}

export default ActivityList