import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import style from './components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import Background from '/public/bg_vector.png'
import Link from 'next/link'

const signup = () => {
    return (
        <>
        
        <div className={style.body}>
        <Layout>
            <div className={style.register_container}>
                <h2 className={`${style.form_title} ${'text-center'}`}><b> Create Account </b></h2>
            <Form className={style.form_container}> 
            <Form.Group className="mb-4 px-5" controlId="formBasicName">
                <Form.Label className={style.form_label}>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Input your full name" />
            </Form.Group>

            <Form.Group className="mb-4 px-5" controlId="formBasicEmail">
                <Form.Label className={style.form_label}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
    
            <Form.Group className="mb-4 px-5" controlId="formBasicPassword">
                <Form.Label className={style.form_label}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-5 px-5" controlId="formBasicPassword">
                <Form.Label className={style.form_label}>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Input your Password again" />
            </Form.Group>
            
            <div className='d-grid gap-2'>
                <button className={`${style.button_sub_login} ${"flex-grow-1 px-5"}`}type="submit">Create Account</button>
                <button className={`${style.button_sub_signup} ${"flex-grow-1 px-5"}`} ><Link href="/login"> Login </Link></button>
            </div>
        </Form>
            </div>
            </Layout>
            </div>
        
        </>
      )
}

export default signup