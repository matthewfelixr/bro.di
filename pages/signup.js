import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import style from './components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import Background from '/public/bg_vector.png'
import Link from 'next/link'

const signup = () => {
    
    const[errMsg,setErrMsg] = useState('');
    const[success,setSuccess]= useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email,pwd);
        setSuccess(true);
    }
    return (
        <>
        
        <div className={style.body}>
        <Layout>
            <div className={style.register_container}>
                <h2 className={`${style.form_title} ${'text-center'}`}><b> Create Account </b></h2>
            <Form className={style.form_container} onSubmit={handleSubmit}> 
            <Form.Group className="mb-4 px-5">
                <Form.Label className={style.form_label}>Full Name</Form.Label>
                <Form.Control type="text" id="name" placeholder="Input your full name" />
            </Form.Group>

            <Form.Group className="mb-4 px-5">
                <Form.Label className={style.form_label}>Email</Form.Label>
                <Form.Control type="email" id="email" placeholder="Enter email" />
            </Form.Group>
    
            <Form.Group className="mb-4 px-5">
                <Form.Label className={style.form_label}>Password</Form.Label>
                <Form.Control type="password" id="pwd" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-5 px-5">
                <Form.Label className={style.form_label}>Confirm Password</Form.Label>
                <Form.Control type="password" id="confirm_pwd" placeholder="Input your Password again" />
            </Form.Group>
            
            <div className='d-grid gap-2'>
                <button className={`${style.button_sub_login} ${"flex-grow-1 px-5"}`}type="submit">Create Account</button>
                <Link href="/login"><button className={`${style.button_sub_signup} ${"flex-grow-1 px-5"}`} >Login</button></Link>
            </div>
        </Form>
            </div>
            </Layout>
            </div>
        
        </>
      )
}

export default signup