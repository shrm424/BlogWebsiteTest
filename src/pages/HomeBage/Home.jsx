import React from 'react'
import './style.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import pic2 from '../../Images/img2.jpg';
import pic3 from '../../Images/img4.jpg';
import pic4 from '../../Images/img5.jpg';

const WelcomeCompo = () => {
    return (
        <div>
            <Container fluid className="image-with-text-overlay p-0 position-relative">
                <img src={pic2} className="img-fluid" alt="Background" />
                <div className="text-overlayContect">
                    <div className="text-center text-light">
                        <h1>Welcome <strong style={{ color: "#FFB6C1" }}>Entire World Blog</strong></h1>
                        <p><b>Discover insights, stories, and more. Start exploring today!</b></p>
                        <Button variant="primary" className='buttonGet'>Explore More</Button>
                    </div>
                </div>
            </Container>


            <br /><br />
            <Container fluid>
                <Row>
                    <Col>
                        <Card.Img src={pic3} className='rounded-1' />
                    </Col>
                    <Col className='text-center'>
                        <span style={{ color: "#FFB6C1", fontSize: "20px" }}>About Us </span>
                        <h1>Welcome to EWBlog</h1>
                        <p>We are thrilled to have you here. Dive into our latest articles, insightful content, and updates that will keep you informed and inspired. Explore a wide range of topics and join our community of engaged readers. <br />
                            we offer a variety of services to keep you engaged and informed. Explore our range of services designed to meet your needs.
                            <br />
                            <br />
                            <div className='text-start'>
                                <li>Article Publishing</li  ><br />
                                <li>Newsletter Subscription</li ><br />
                                <li>Community Engagement</li    >
                            </div>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WelcomeCompo