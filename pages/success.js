import React from 'react'
import style from './components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import Image from 'next/image'
import Successpic from '../public/success.png'
import Link from 'next/link'

const success = () => {
    return (
        <>
            <div className={style.body}>
            <Layout>
                <div className={style.success_container}>
                    <Image
                    src={Successpic}
                    alt="Success Image"
                    width={600}
                    height={400}
                    />
                    <p><b>Your account has been created Let’s find where you want to eat!</b></p>
                    <Link href="/dashboard"><button className={`${style.button_next_success} ${"flex-grow-1 px-5"}`}>Next</button></Link>
                </div>
            </Layout>
            </div>
        </>
    )
}

export default success