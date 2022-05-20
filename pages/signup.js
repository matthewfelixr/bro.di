import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import style from './components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import Background from '/public/bg_vector.png'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Signup = () => {
    
    // const[errMsg,setErrMsg] = useState('');
    // const[success,setSuccess]= useState(false);

    const [namaUser,setNamaUser] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const router=useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user ={namaUser,email,password} 
        console.log(user);
        // setSuccess(true);

            fetch("https://brodi-db.herokuapp.com/api/v1/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // credentials: "same-origin",
            body: JSON.stringify(user),
            }).then((res) => res.json())
            .then((res)=>{
                console.log(res.data);

            router.push("/login");
            });
        };

    
    return (
        <>
        
        <div className={style.body}>
        <Layout>
            <div className={style.register_container}>
                <h2 className={`${style.form_title} ${'text-center'}`}><b> Create Account </b></h2>
            <form className=" p-5 mb-4" onSubmit={handleSubmit}>
                <label className={style.form_label}>Full Name</label>
            <input
                type="text"
                placeholder="Enter Your Full Name"
                value={namaUser}
                onChange={(e) => setNamaUser(e.target.value)}
                className={style.form_input}
            />
                <label className={style.form_label}>Email</label>
            <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={style.form_input}
            />
            <label className={style.form_label}>Password</label>
            <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={style.form_input}
            />

                <div className='d-grid gap-2 mt-5'>
                    <button className={`${style.button_sub_login} ${"flex-grow-1 px-5 m-0 w-100"}`}type="submit">Create Account</button>
                    <Link href="/login"><button className={`${style.button_sub_signup} ${"flex-grow-1 px-5 m-0 w-100"}`} >Login Instead</button></Link>
                </div>
            </form>
            </div>
            </Layout>
            </div>
        
        </>
      )
}

export default Signup