import React from 'react'
// bootstrap 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Nav_bar() {
  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>Link-Tree</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Edit</Nav.Link>
            <Nav.Link href="#action2">View</Nav.Link>
          </Nav>
          <div>
            <a href=''>
            <Button variant="outline-success" className='mx-1'>Sigh up</Button>
            </a>
            <a href=''>
            <Button variant="outline-success" className='mx-1'>Login</Button>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Nav_bar