import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, logout, userIsAuth } from "../../redux/slices/userSlice";




const NavigationTop = (props) => {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const isAuth = useSelector(userIsAuth);
    const { data } = useSelector(state => state.auth);
    // const myId = useSelector(state=>state.auth.data._id)

    const [show, setShow] = useState(false)
    const [userId, setUserId] = useState(null)

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }
    const onClickLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }
    const toHome = async () => {
        if(window.localStorage.getItem('token')){
            return navigate('/')
        }else{
            return navigate('/login')
        }
        // debugger
        // await dispatch(fetchAuthMe())
        // await navigate(`/user/${data._id}`)
    }
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>SocialNetwork</Navbar.Brand>
                    {
                        isAuth ?
                            <Nav className="me-auto">
                                <Nav.Link><Button onClick={toHome}>Home</Button></Nav.Link>
                                <Nav.Link><Link to="/users"><Button>Users</Button></Link></Nav.Link>
                                <Nav.Link><Link to="/messages"><Button>Messages</Button></Link></Nav.Link>
                            </Nav>
                            :
                            null
                    }
                    {
                        !isAuth ?
                            <Nav>
                                {/* <Nav.Link><Button onClick={handleShow}>Login-1</Button></Nav.Link> */}
                                <Nav.Link><Link to="/login"><Button>Login</Button></Link></Nav.Link>
                                <Nav.Link><Link to="/registration"><Button>Registration</Button></Link></Nav.Link>
                            </Nav>
                            :
                            <Nav>
                                <Nav.Link><Link to="/login"><Button onClick={onClickLogout}>Logout</Button></Link></Nav.Link>
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

export default NavigationTop;