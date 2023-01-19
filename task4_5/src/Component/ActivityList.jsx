import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';
import { getExcercise, updateExcercise, getOneExcercise } from '../Task 8-Connect to Frontend/Reducer'
import { useDispatch } from 'react-redux'
import axios from "axios";


const ActivityList = () => {
  const [addExcercise, setaddExcercise] = useState({
    name: "",
    description: "",
    activityType: ['run', 'walk', 'hike', 'swim', 'ride'],
    duration: "",
    date: "",
  });

  const dispatch = useDispatch()
  const stateData = useSelector(state => state.excercise.excerciseData)
  const navigate=useNavigate()
  const handleShow = () => {
    // navigate("/")
    // setaddExcercise(addExcercise)
    setShow(true)
  }
  const handleClose = () => setShow(false);
  useEffect(() => {
    dispatch(getExcercise())
    console.log("inside useEffect", stateData)
  },[])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#c8102e' }}>Update Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body><form>
          <div className='labelModal'>
          <label>Name:
            <input type="text" 
            className='inputModal'
            //  value={addExcercise.name} 
            name="name"  />
          </label>
          </div>
          <div className='labelModal'>
          <label>Description:
            <textarea type="text" 
            className='inputModal'
            // value={addExcercise.description} 
            name="description"  />
          </label>
          </div>
          <div className='labelModal'>
          <label>Activity type:
          <input type="text" 
          className='inputModal'
                name="activitytype" 
                // value={addExcercise.activitytype}
/>
          </label>
          </div>
          <div className='labelModal'>
          <label>Duration:
            <input type="time" 
            className='inputModal'
            // value={addExcercise.duration} 
            name="duration"  />
          </label>
          </div>
          <div className='labelModal'>
          <label >Date:
            <input type="date" 
            className='inputModal'
            // value={addExcercise.date} 
            name="date"  />
          </label>
          </div>
        </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" style={{ color: '#fefcfa', backgroundColor: '#c8102e', border: 'none' }} onClick={ModalSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='activityList'>
        <Navbar>
          <Container className='justify-content-center'>
            <Navbar.Brand> <h1 className='headingList'>Excercise Tracker App</h1> <Link to="/"><HomeIcon/></Link></Navbar.Brand>
          </Container>
        </Navbar>
        <div className="cardsList">
          {stateData?.map((v, i) => {
            return (
              <Card style={{ width: '18rem' }} key={v._id}>
                <Card.Body>
                  <Card.Title>{v.name}
                    <Button variant="primary" className='buttonUpdate' onClick={() => handleShow(v._id)}>
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
        </div>
      </div>
    </>
  )

}

export default ActivityList