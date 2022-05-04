import React from 'react'
import { Form } from 'react-bootstrap'
import style from './components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import Link from 'next/link'

const booking = () => {
  return (
    <>
        <div className={style.body}>
        <Layout>
            <div className={style.booking_container}>
            <h2 className={`${style.form_title} ${'text-center'}`}><b> Booking </b></h2>
            <Form className={style.form_container}> 
                <Form.Group className="mb-4 px-5" controlId="formBasicName">
                    <Form.Label className={style.form_label}>Date</Form.Label>
                    <Form.Control type="date" placeholder="Input your date" />
                </Form.Group>
                
                <div className='row d-flex'>
                    <div className='col-6'>
                        <Form.Group className="mb-4 px-5" controlId="formBasicEmail">
                            <Form.Label className={style.form_label}>Start Hours</Form.Label>
                            <Form.Control type="time"/>
                        </Form.Group>
                    </div>
                    <div className='col-6'>
                        <Form.Group className="mb-4 px-5" controlId="formBasicEmail">
                            <Form.Label className={style.form_label}>End Hours</Form.Label>
                            <Form.Control type="time"/>
                        </Form.Group>
                    </div>
                </div>
                
                <Form.Group className="mb-4 px-5" controlId="formBasicPassword">
                    <Form.Label className={style.form_label}>Quantity</Form.Label>
                    <Form.Control type="number" min="1" placeholder="Input your seat quantity" />
                </Form.Group>
                
                <div className='d-grid gap-2'>
                    <Link href="/bill"><button className={`${style.button_sub_book} ${"flex-grow-1 px-5"}`}type="submit">Book</button></Link>
                    <Link href="/dashboard"><button className={`${style.button_sub_back} ${"flex-grow-1 px-5"}`} >Back</button></Link>
                </div>
            </Form>
            </div>
        </Layout>
        </div>
    </>
  )
}

export default booking