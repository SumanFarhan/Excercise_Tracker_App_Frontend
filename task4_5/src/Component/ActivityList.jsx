import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { useDispatch } from 'react-redux'

const ActivityList = () => {
  const [addExcercise, setaddExcercise] = useState({
    name: "",
    description: "",
    activityType: [run, walk, hike, swim, ride],
    duration: "",
    date: "",
  });

  const dispatch = useDispatch()

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
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#c8102e' }}>Update Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body><form>
          <label>NAME
            <input type="text" value={obj.name} name="name" onChange={add} />
          </label>
          <label>Description
            <textarea type="text" value={obj.name} name="name" onChange={add} />
          </label>
          <label>Activity type
            <select >
              <option name="run" value={addExcercise.activityType[0]}  onChange={Setting}>Run</option>
              <option name="hike" value={addExcercise.activityType[2]}  onChange={Setting} >Hike</option>
              <option name="swim" value={addExcercise.activityType[3]}  onChange={Setting} >Swim</option>
              <option name="bicycleRide" value={addExcercise.activityType[4]}  onChange={Setting}>Ride</option>
              <option name="walk" value={addExcercise.activityType[1]}  onChange={Setting}>Walk</option>
            </select>
          </label>
          <label>Duration
            <input type="email" value={obj.email} name="email" onChange={add} />
          </label>
          <label>Date
            <input type="email" value={obj.email} name="email" onChange={add} />
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
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title
                <Button variant="primary" className='buttonUpdate' onClick={handleShow}>
                  <EditIcon style={{ marginLeft: "80px", marginBottom: "2px" }} />
                </Button>
                <DeleteIcon />
              </Card.Title>
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
        </div>
      </div>
    </>
  )

}

export default ActivityList