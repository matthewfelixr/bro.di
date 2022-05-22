import React from 'react'
import { Form } from 'react-bootstrap'
import style from '../components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import WithUtils from '../components/Layout/WithUtil/WithUtils'
// import Link from 'next/link'

const Profile = () => {
  return (
    <div className={style.body}>
        <Layout>
            <div className={style.profile_container}>
            <h2 className={`${style.form_title} ${'text-center'}`}><b> Profile </b></h2>
            <Form className={style.form_container}> 
                <Form.Group className="mb-4 px-5" controlId="formBasicName">
                    <Form.Label className={style.form_label}>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Windah Nursetyadi" />
                </Form.Group>

                <Form.Group className="mb-4 px-5" controlId="formBasicEmail">
                    <Form.Label className={style.form_label}>Email</Form.Label>
                    <Form.Control type="email" placeholder="windah@nursetyadi.com" />
                </Form.Group>
        
                <Form.Group className="mb-4 px-5" controlId="formBasicPassword">
                    <Form.Label className={style.form_label}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <div className='d-grid gap-2'>
                    <button className={`${style.button_sub_profile} ${"flex-grow-1 px-6"}`}type="submit">Edit Profile</button>
                </div>
            </Form>
            </div>
        </Layout>
    </div>
  )
}

export default WithUtils(Profile)