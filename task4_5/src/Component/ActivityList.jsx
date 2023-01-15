import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button'

const ActivityList = () => {
  return (
    <>
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
                <Button variant="primary" className='buttonUpdate'>
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