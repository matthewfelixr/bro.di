import React from 'react'
import { Form } from 'react-bootstrap'
import style from './components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import Link from 'next/link'

const bill = () => {
  return (
    <>
        <div className={style.body}>
        <Layout>
            <div className={style.bill_container}>
            <h2 className={`${style.form_title} ${'text-center'}`}><b> Receipt </b></h2>
            <Form className={style.form_container}> 
                <Form.Group className="mb-4 px-5" controlId="formBasicName">
                    <Form.Label className={style.form_label_bill}>Restaurant</Form.Label>
                    <h4>Solaria  Transmart Buah Batu</h4>
                </Form.Group>

                <Form.Group className="mb-4 px-5" controlId="formBasicName">
                    <Form.Label className={style.form_label_bill}>Date</Form.Label>
                    <h4>25 February 2022</h4>
                </Form.Group>

                <div className='row'>
                    <div className='col'>
                    <Form.Group className="mb-4 px-5" controlId="formBasicName">
                    <Form.Label className={style.form_label_bill}>Start Hour</Form.Label>
                        <h4>15:00</h4>
                    </Form.Group>
                    </div>
                    <div className='col'>
                    <Form.Group className="mb-4 px-5" controlId="formBasicName">
                    <Form.Label className={style.form_label_bill}>End Hour</Form.Label>
                        <h4>16:00</h4>
                    </Form.Group>
                    </div>
                </div>
                <Form.Group className="mb-4 px-5" controlId="formBasicName">
                    <Form.Label className={style.form_label_bill}>Quantity</Form.Label>
                    <h4>4</h4>
                </Form.Group>

                <Form.Group className="mb-4 px-5" controlId="formBasicName">
                    <Form.Label className={style.form_label_bill}>Price</Form.Label>
                    <h4>Rp 40.000,00</h4>
                </Form.Group>
                
            </Form>
            </div>
            <div className={`${'d-grid gap-2'}`}>
                    <Link href="/success"><button className={`${style.button_sub_confirm} ${"flex-grow-1 px-5"}`}type="submit">Confirm</button></Link>
                    <Link href="/booking"><button className={`${style.button_sub_cancel} ${"flex-grow-1 px-5"}`} >Cancel</button></Link>
            </div>
        </Layout>
        </div>
    </>
  )
}

export default bill