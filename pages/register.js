import React from 'react'
import Layout from '../Layouts/Layout'
import style from './components/Layout/layout.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  axios.post('localhost:5000/api/vi/register', {
    namaUser: '',
    email: '',
    password: '',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.response);
  });
  
  return (
    <>
    <div className={style.body}>
        <Layout>
            <div className={style.register_container}>
            <h2 className={`${style.form_title} ${'text-center'}`}><b> Create Account </b></h2>
            <form onSubmit={handleSubmit(onSubmit)} className='p-4'>
                <div className='mb-4 px-5'>
                  <label className={style.form_label}> Full Name </label><br></br>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className={style.form_input} 
                    {...register("namaUser", {
                      required: {
                        value:true,
                        message:"Please enter your name",
                      },},)} /><span className='w-100'>{errors?.name?.message}</span> <br></br>
                </div>
                <div className='mb-4 px-5'>
                  <label className={style.form_label}> Email </label><br></br>
                  <input type="email" placeholder="Email" className={style.form_input} {...register("email", {required: true})} /><br></br>
                </div>
                <div className='mb-4 px-5'>
                  <label className={style.form_label}> Password </label><br></br>
                  <input type="password" placeholder="Password" className={style.form_input} {...register("password", {required: true})} /><br></br>
                </div>
                <div className='mb-4 px-5'>
                  <label className={style.form_label}> Confirm Password </label><br></br>
                  <input type="password" placeholder="Confirm Password" className={style.form_input} {...register("Confirm Password", {required: true})} /><br></br>
                </div>
                <div className='mb-4 text-center'>
                <button type="submit" className={`${style.button_sub_login} ${"flex-grow-1"}`}>Create Account</button>
                <Link href="/login"><button type="submit" className={`${style.button_sub_signup  } ${"flex-grow-1"}`}>Login</button></Link>
                </div>
                  
                
            </form>
            </div>
        </Layout>
    </div>
    </>
  )
}

export default register

//, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i pattern password, conf password
//, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i
//, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i  pattern email