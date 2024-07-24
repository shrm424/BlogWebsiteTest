import React from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import pic1 from '../../Images/img11.jpg';


const NewsletterSignup = () => (
    <Container fluid className="p-0 position-relative" >
        <img src={pic1} style={{ height: "70vh", width: "100%", objectFit: "cover" }} className="img-fluid" alt="Background" />
        <div className="position-absolute top-50 start-50 translate-middle text-overlay " style={{ background: "#0000ff50", height: "70vh", width: "100%", }}>
            <div className="text-center text-light p-4" style={{ marginTop: "50px" }}>
                <h2>Subscribe to Our Newsletter</h2>
                <p>  Subscribe to our newsletter to receive the latest updates and articles directly to your inbox. Stay connected with the EWBlog community.
                    
                </p>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Control type="email" className='form-control mb-4' placeholder="Enter your email" />
                    </Form.Group>
                    <Button variant="primary" style={{ background: '#FFB6C1', border: '0', fontSize: "24px" }} className='form-control mb-4' type="submit"> Subscribe</Button>
                </Form>
            </div>
        </div>
    </Container>
);

export default NewsletterSignup;
