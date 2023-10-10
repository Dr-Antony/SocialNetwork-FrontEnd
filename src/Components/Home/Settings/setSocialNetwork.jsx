import React from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import instance from "../../../Axios/axios";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "../../../redux/slices/userSlice";

const SetSocialNetwork = ({show,data, handleClose}) => {
const dispatch = useDispatch()

    const {register,handleSubmit} = useForm({
        defaultValues: {
            website: data.website,
            github: data.github,
            twitter: data.twitter,
            instagram: data.instagram,
            facebook: data.facebook
        }
    })
    const onSubmitForm = async (values)=> {
        await instance.patch(`/user/${data._id}`,values);
        dispatch(fetchAuthMe());
        handleClose();
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}   >
                <Modal.Header closeButton>
                    <Modal.Title>Set your Social Networks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmitForm)}>
                        <Form.Group className="mb-3" controlId='formBasicText' >
                            <Form.Label>Website</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Set or change your website"
                                {...register('website')}
                            />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId='formBasicText'>
                            <Form.Label>Github</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Set or change your github account"
                                {...register('github')}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId='formBasicText'>
                            <Form.Label>Twitter</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Set or change your twitter account"
                                {...register('twitter')}


                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId='formBasicText'>
                            <Form.Label>Instagram</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Set or change your instagram account"
                                {...register('instagram')}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId='formBasicText'>
                            <Form.Label>Facebook</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Set or change your facebook account"
                                {...register('facebook')}
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

export default SetSocialNetwork;

