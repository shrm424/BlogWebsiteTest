import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="mt-5 p-4" style={{ background: '#FFB6C1' }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About EWBlog</h5>
                        <p>Discover the latest insights and stories from our blog. Stay updated with our informative articles.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/AboutnUs">About Us</a></li>
                            <li><a href="/Posts">Posts</a></li>
                            <li><a href="/ContactUs">Contact Us</a></li>
                            <li><a href="/AddNewPost">Add New Post</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <address>
                            <strong>EWBlog</strong><br />
                            Mogadishu Somalia<br />
                            Shirkole Offically Hodan<br />
                            (+252) 617 600 424
                        </address>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={6}>
                        <p>&copy; {new Date().getFullYear()} EWBlog. All rights reserved.</p>
                    </Col>
                    <Col md={6}>
                        <ul className="list-unstyled list-inline text-md-right">
                            <li className="list-inline-item"><a href="/AboutUs">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="/AboutUs">Terms of Use</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
