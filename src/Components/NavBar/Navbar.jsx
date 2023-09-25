import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';




const Navigation = (props) => {



    const [show, setShow] = useState(false)

    const handleClose = ()=> {
        setShow(false)
    }
    const handleShow = ()=>{
        setShow(true)
    }
    const [userAuth, setUserAuth] = useState(false)
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>SocialNetwork</Navbar.Brand>
                    {
                        userAuth ?
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                                <Nav.Link><Link to="/messages">Messages</Link></Nav.Link>
                            </Nav>
                            :
                            null
                    }
                    {
                        !userAuth ?
                            <Nav>
                                {/* <Nav.Link><Button onClick={handleShow}>Login-1</Button></Nav.Link> */}
                                <Nav.Link><Link to="/login"><Button>Login</Button></Link></Nav.Link>
                                <Nav.Link><Link to="/registration"><Button>Registration</Button></Link></Nav.Link>
                            </Nav>
                            :
                            <Nav>
                                <Nav.Link><Link to="/"><Button>Logout</Button></Link></Nav.Link>
                            </Nav>
                    }
                </Container>
            </Navbar>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Modal.Body>
            </Modal> */}
        </div>
    )
}

export default Navigation;