import React from 'react'
import style from '../components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'

const About = () => {
    const imgFormat ={
        width:"300px", 
      }
  return (
    <>
    
    <div className={style.body}>
        <Layout>
            <div className="container">
            <div className={style.container}>
                <h5 className={`${style.title} ${'text-center mt-5 '}`}><b> Developed By: </b></h5>
                <h1 className={`${style.title} ${'text-center mb-5'}`}><b> Team Peak </b></h1>
                <div className='row ms-auto me-auto text-center'>
                        <div className='col-3 mb-4'>
                            <h2><b>M.Ghifari Eka N.</b></h2>
                            <h4>140810190021</h4>
                            <div className={style.button_member}>Project Manager</div>
                            <img src='https://i.ibb.co/RT7HdX7/21-removebg-preview.png'style={imgFormat}></img>
                        </div>
                        <div className='col-3 mb-4'>
                            <h2><b>Windu Nursetyadi</b></h2>
                            <h4>140810190040</h4>
                            <div className={style.button_member}>Back-End Developer</div>
                            <img src='https://i.ibb.co/FVHxfPn/41-removebg-preview.png'style={imgFormat}></img>
                        </div>
                        <div className='col-3 mb-4'>
                            <h2><b>Matthew Felix R.</b></h2>
                            <h4>140810190047</h4>
                            <div className={style.button_member}>Front-End Develoer</div>
                            <img src='https://i.ibb.co/tZ1wTZx/47-removebg-preview.png' style={imgFormat}></img>
                        </div>
                        <div className='col-3 mb-4'>
                            <h2><b>Ananda Sapta A.</b></h2>
                            <h4>140810190063</h4>
                            <div className={style.button_member}>UI/UX Designer</div>
                            <img src='https://i.ibb.co/7Gsr6G0/63-removebg-preview.png'style={imgFormat}></img>
                        </div>
                </div>
            </div>
            </div>
        </Layout>
    </div>
    
    </>
  )
}

export default About