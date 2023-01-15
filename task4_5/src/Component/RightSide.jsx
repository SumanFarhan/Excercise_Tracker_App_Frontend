import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const RightSide = () => {
  return (
    <>
      <h5>NAME</h5>
      <InputGroup className="mb-3">
        <Form.Control
          type='text'
          name="name"
          // value="name"
        />
      </InputGroup>
      <h5>DESCRIPTION</h5>
      <InputGroup className="mb-3">
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <h5>ACTIVITY TYPE</h5>
      {/* <div className="mb-3">
        <label>
          <input type="radio" name="test" value="small" checked />
          <img src="./Images/RUN.PNG" alt="Option 1" />
        </label>

        <label>
          <input type="radio" name="test" value="big" />
          <img src="./Images/Ride.PNG" alt="Option 2" />
        </label>
        <label>
          <input type="radio" name="test" value="small" checked />
          <img src="./Images/RUN.PNG" alt="Option 1" />
        </label>
        <label>
          <input type="radio" name="test" value="small" checked />
          <img src="./Images/RUN.PNG" alt="Option 1" />
        </label>
        <label>
          <input type="radio" name="test" value="small" checked />
          <img src="./Images/RUN.PNG" alt="Option 1" />
        </label> 
      </div>*/}

      <h5>DURATION</h5>
      <InputGroup className="mb-3">
        <Form.Control
          type='time'
          name="name"
          value="Duration"
        />
      </InputGroup>
      <h5>DATE</h5>
      <InputGroup className="mb-3">
        <Form.Control
          type='date'
          name="name"
          value="Date"
        />
      </InputGroup>
      <div className="button"><Button variant="primary" className='btnAdd'><AddCircleIcon style={{marginRight:"10px",marginBottom:"2px"}}/>Excercise Activty</Button></div>
    </>
  )
}

export default RightSide