import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Navigation from './components/Layout/Navigation'
import style from './components/Layout/layout.module.css'
import Header from './components/Layout/Header'
const Login = () => {
  return (
    <>
    <Header/>  
        <div className={style.login_container}>
            <h2 className='text-center'><b> Login </b></h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={style.form_label}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className={style.form_label}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <div className='m-0 w-100 d-flex justify-content-end'>
            <a className={style.forgot_password}>Forgot Password</a>
            </div>
        </Form.Group>
        
        <div className='d-grid gap-2'>
            <Button className={`${style.btn_sub_login} ${"flex-grow-1"}`}type="submit">Log In</Button>
            <Button className={`${style.btn_sub_signup} ${"flex-grow-1"}`} >Sign Up</Button>
        </div>
    </Form>
        </div>
    </>
  )
}

export default Login