
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


import style from "./Register.module.css"
import { useForm } from 'react-hook-form';

import { handleEmailValidation } from '../../FormValidation/emailValidation';
import { instance } from '../../Axios/axios';

const Registration = (props) => {


    const { register, handleSubmit, formState: { errors, touchedFields, isValid } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            userName: '',
            checkMe: false
        },
        mode: 'onBlur'
    });
    const submit = async (data) => {
        console.log(data)
        const result = await instance.post('/registration',data)
        console.log(result)
    }
    const error = (data) => {
        console.log(data, 'This error')
    }
    return (
        <div className={style.register_wrapper}>
            <div className={style.register_form}>
                <Form onSubmit={handleSubmit(submit, error)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            isInvalid={errors?.email}
                            isValid={touchedFields.email && !errors?.email}
                            {...register('email', { required: 'Enter your email', validate: handleEmailValidation })} />
                        <Form.Control.Feedback type='invalid'>{errors?.email?.message}</Form.Control.Feedback>
                        <Form.Control.Feedback type='valid' >Выглядит неплохо!</Form.Control.Feedback>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            isInvalid={errors?.password}
                            isValid={touchedFields.password && !errors.password}
                            {...register('password', { required: 'Enter your password', minLength: { value: 5, message: `Пароль не может быть меньше 5 символов!` } })} />
                        <Form.Control.Feedback type='invalid'>{errors?.password?.message}</Form.Control.Feedback>
                        <Form.Control.Feedback type='valid'>Выглядит неплохо!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='formBasicText'>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="User Name"
                            isInvalid={errors?.userName}
                            isValid={touchedFields.userName && !errors?.userName}
                            {...register('userName', { required: 'Enter your fullname' })} />
                        <Form.Control.Feedback type='invalid'>{errors?.userName?.message}</Form.Control.Feedback>
                        <Form.Control.Feedback type='valid'>Выглядит неплохо!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                        <Form.Check
                            type="checkbox"
                            label="Check me out"
                            {...register('checkMe')} />
                    </Form.Group>
                    <div className={style.registration_btn}>
                        <Button disabled={!isValid} className={style.btn} variant="primary" type="submit">
                            Registration
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Registration;