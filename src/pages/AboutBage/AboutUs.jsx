import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import pic1 from '../../Images/img9.png';
import pic2 from '../../Images/img10.png';
import pic3 from '../../Images/img7.jpg';
import person1 from '../../Images/person1.png';
import person2 from '../../Images/person2.png';
import person3 from '../../Images/person3.png';


const About = () => {
  return (
    <>
      <br />
      <br />
      <Container fluid className="p-0 position-relative" >
        <img src={pic3} style={{ height: "50vh", width: "100%", objectFit: "cover" }} alt="Background" />
        <div className="position-absolute top-50 start-50 translate-middle text-overlay " style={{ background: "#0000ff50", height: "50vh", width: "100%", }}>
          <div className="text-center text-light"  style={{ marginTop: "50px" }}>
            <h1>About EWBlog</h1>
            <p>Welcome to EWBlog, your go-to source for insightful articles and updates.</p>
          </div>
        </div>
      </Container>

      <Container className="about-page mt-5">
        <Row className="mb-5">
          <Col md={6}>
            <Image src={pic1} rounded fluid />
          </Col>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              At EWBlog, we strive to provide high-quality content that educates, informs, and inspires our readers. Our mission is to create a platform where ideas are shared, discussed, and appreciated. We believe in the power of words to connect people, provoke thought, and drive change. Our team is dedicated to bringing you a diverse range of perspectives, covering topics that matter most to you.
            </p>
            <p>
              Join us on this journey of discovery and enlightenment. Together, let's explore new ideas, challenge the status quo, and celebrate the diversity of human thought. At EWBlog, every article is a step towards a more informed and connected world.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={6}>
            <h2>Our Vision</h2>
            <p>
              Our vision at EWBlog is to become a leading voice in the digital media landscape, recognized for our commitment to quality journalism and innovative storytelling. We aim to expand our reach, engaging a global audience and fostering a deeper understanding of the world around us.
            </p>

            <p>
              Ultimately, we seek to inspire positive change through our work, promoting values of integrity, inclusivity, and excellence. As we grow, we remain dedicated to our core principles, ensuring that EWBlog continues to be a beacon of insight and inspiration for years to come.
            </p>
          </Col>
          <Col md={6}>
            <Image src={pic2} rounded fluid />
          </Col>
        </Row>
        <Row className="team-section mb-5">
          <h1 className='text-center'>Meet Our Team</h1>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={person1} />
              <Card.Body>
                <Card.Title>Sharmarke Nor Mohamed </Card.Title>
                <Card.Text>Group Leader</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={person2} />
              <Card.Body>
                <Card.Title>Abdifitah Mohamed Abdullahi</Card.Title>
                <Card.Text>Member</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={person3} />
              <Card.Body>
                <Card.Title>Ikhlas Ali Mohamed </Card.Title>
                <Card.Text>Member</Card.Text>
              </Card.Body>
            </Card>
          </Col>                        
        </Row>
      </Container>
    </>
  );
}

export default About;
