import React from 'react'
import { Form } from 'react-bootstrap'
import style from '../components/Layout/layout.module.css'
import WithUtils from '../components/Layout/WithUtil/WithUtils'
import LayoutAuth from '../Layouts/LayoutAuth'
import Link from 'next/link'
import Cookies from 'js-cookie'

const Profile = () => {
  return (
    <div className={style.body}>
        <LayoutAuth>
            <div className={style.profile_container}>
            <h2 className={`${style.form_title} ${'text-center'}`}><b> Profile </b></h2>
            <Form className={style.form_container}> 
                <Form.Group className="mb-4 px-5" controlId="formBasicName">
                    <Form.Label className={style.form_label}>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-4 px-5" controlId="formBasicEmail">
                    <Form.Label className={style.form_label}>Email</Form.Label>
                    <Form.Control type="email" placeholder="youremail@provider.com" />
                </Form.Group>
        
                <Form.Group className="mb-4 px-5" controlId="formBasicPassword">
                    <Form.Label className={style.form_label}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <div className='d-grid gap-2'>
                    <button className={`${style.button_sub_profile} ${"flex-grow-1 px-6"}`}type="submit">Edit Profile</button>
                </div>
                <div className='d-grid gap-2'>
                    <Link href="/">
                        <button className={`${style.button_sub_signup} ${"flex-grow-1 px-6"}`}type="submit" onClick={()=>{Cookies.remove('jwt')}}>Sign Out</button>
                    </Link>
                </div>
            </Form>
            </div>
        </LayoutAuth>
    </div>
  )
}

export default WithUtils(Profile)