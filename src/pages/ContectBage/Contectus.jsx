import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './style.css'
import pic4 from '../../Images/img13.jpg';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <br />
      <br />
      <Container fluid className="p-0 position-relative" >
        <img src={pic4} style={{ height: "50vh", width: "100%", objectFit: "cover" }} alt="Background" />
        <div className="position-absolute top-50 start-50 translate-middle text-overlay " style={{ background: "#0000ff50", height: "50vh", width: "100%", }}>
          <div className="text-center text-light" style={{ marginTop: "50px" }}>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
          </div>
        </div>
      </Container>
      <Container className="contact-page mt-5">

        <Row className="mb-5">
          <Col md={6}>
            <h1>Get In Touch</h1>
            <Form onSubmit={handleSubmit} controlId="formEmail">
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Enter your message"
                  required
                />
              </Form.Group>

              <Button style={{ background: '#FFB6C1', border: '0' }} className='form-control' type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> info@ewblog.com</p>
            <p><strong>Phone:</strong> +252 (617) 600 424</p>
            <p><strong>Address:</strong> Taleex street, Hodan, Mogadishu - Somalia</p>
            <p>Feel free to reach out to us through any of the contact methods listed above. We look forward to hearing from you!</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
