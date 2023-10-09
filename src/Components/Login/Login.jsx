import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import style from './Login.module.css'
import { useForm } from "react-hook-form";


import { AlertError } from "../Alert/Alert";
import { instance } from "../../Axios/axios";

import { useNavigate, Navigate } from "react-router-dom";
import { fetchLogin, userIsAuth } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {


    const [showErrAlert, setShowErrAlert] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [errArray, setErrArray] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(userIsAuth)







    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            checkMe: false
        },
        mode: 'onBlur'
    })



    // const submit = async (values) => {
    //     try {
    //         console.log(values)
    //         const response = await dispatch(fetchLogin(values))
    //         debugger
    //         setShowErrAlert(false)
    //         if (response.payload.token) {
    //             debugger
    //             window.localStorage.setItem('token',response.payload.token)
    //         }
    //         if (!response.error) {
    //             navigate(`/`)
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setErrArray([...error.response.data])
    //         setShowErrAlert(true)
    //     }
    // }



    const submit = async (values) => {
        
            console.log(values)
            const response = await dispatch(fetchLogin(values))
            debugger
            if (response.payload) {
                debugger
                setShowErrAlert(false)
                window.localStorage.setItem('token', response.payload.token)
                navigate(`/user/${response.payload._id}`)
            }
            if (response.error && ! response.payload) {
                debugger
                console.log(response.error);
                // setErrArray( [...errArray, error.response.data])
                setShowErrAlert(true)
            }
        
    }
    const error = (data) => {
        console.log(data, 'This error')
    }


    if (isAuth) {
        return navigate('/')
    }


    return (
        <div className={style.login_wrapper}>
            <div className={style.login_form}>
                {showErrAlert ? <AlertError errors={errArray} setShowAlert={setShowErrAlert} alertText={'Не удалось авторизоваься!'} /> : null}
                <Form onSubmit={handleSubmit(submit, error)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            isInvalid={errors?.email}
                            {...register('email', { required: 'Укажите почту!' })} />
                        <Form.Control.Feedback type='invalid'>{errors?.email?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            isInvalid={errors?.password}
                            {...register('password', { required: 'Укажите пароль!' })} />
                        <Form.Control.Feedback type='invalid'>{errors?.password?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Check me out"
                            {...register('checkMe')} />
                    </Form.Group>
                    <div className={style.login_btn}>
                        <Button className={style.btn} variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
        </div >
    )
}

export default Login;




