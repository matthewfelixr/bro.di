import React from 'react'
import Link from 'next/link'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import style from './components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import Background from '/public/bg_vector.png'
const Login = () => {
  return (
    <>
    
    <div className={style.body}>
    <Layout>
        <div className={style.login_container}>
            <h2 className={`${style.form_title} ${'text-center'}`}><b> Login </b></h2>
        <Form className={style.form_container}> 
        <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
            <Form.Label className={style.form_label}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 px-5" controlId="formBasicPassword">
            <Form.Label className={style.form_label}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <div className='m-0 w-100 d-flex justify-content-end'>
            <a className={style.forgot_password}>Forgot Password</a>
            </div>
        </Form.Group>
        
        <div className='d-grid gap-2'>
            <button className={`${style.button_sub_login} ${"flex-grow-1 px-5"}`}type="submit">Log In</button>
            <Link href="/signup"><button className={`${style.button_sub_signup} ${"flex-grow-1 px-5"}`}>Sign Up</button></Link>
        </div>
    </Form>
        </div>
        </Layout>
        </div>
    
    </>
  )
}

export default Login