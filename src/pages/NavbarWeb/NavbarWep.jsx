import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function NavbarWep() {
    return (
        <Navbar fixed="top" expand="lg" className="navbar" style={{ background: '#FFB6C1' }}>
            <Container className="d-flex align-items-center justify-content-between">
                <div>
                    <Navbar.Brand as={Link} to="/">EWBlog</Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link as={NavLink} to="/" className='navLink' >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/AboutUs" className='navLink'  >About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/Posts" className='navLink' >Posts</Nav.Link>
                            <Nav.Link as={NavLink} to="/ContactUs" className='navLink'  >Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavbarWep;
