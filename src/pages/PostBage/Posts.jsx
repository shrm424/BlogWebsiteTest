import React from 'react'
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic4 from '../../Images/img1.jpg';
import PostObject from './PostObject'


function Posts() {
  return (
    <div>
      <br /><br />
      <Container fluid className="p-0 position-relative" >
        <img src={pic4} style={{ height: "50vh", width: "100%", objectFit: "cover" }} alt="Background" />
        <div className="position-absolute top-50 start-50 translate-middle text-overlay " style={{ background: "#0000ff50", height: "50vh", width: "100%", }}>
          <div className="text-center text-light" style={{ marginTop: "50px" }}>
            <h1>Our Posts</h1>
            <p>we bring you the latest articles and updates to keep you informed and inspired.</p>
          </div>
        </div>
      </Container>
      <br />
      <Container fluid>
        <Row>
          {PostObject.map((item, index) => (
            <Col className='col-4' key={index}>
              <Card>
                <Card.Img src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}</Card.Text>
                  <Link to={`/post/${item.id}`}>
                    <Button className='form-control' style={{ background: '#FFB6C1', border: '0' }}                  >
                      Read More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Posts