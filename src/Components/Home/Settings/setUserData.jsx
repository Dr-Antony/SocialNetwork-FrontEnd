import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import instance from "../../../Axios/axios";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "../../../redux/slices/userSlice";

const SetUserData = ({data,show,handleClose}) => {
    const dispatch = useDispatch()
    debugger
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userName: data.userName,
            phone: data.phone,
            address: data.address
        },
        mode: 'onBlur'
    });
    const onSubmitForm = async (values)=>{
        await instance.patch(`/user/${data._id}`,values);
        dispatch(fetchAuthMe());
        handleClose();
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Set new data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmitForm)}>
                        <Form.Group className="mb-3" controlId='formBasicText' >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Change your full name"
                                {...register('userName')}
                            />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId='formBasicText'>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Change your phone number"
                                {...register('phone')} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId='formBasicText'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Change your address"
                                {...register('address')}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SetUserData;




