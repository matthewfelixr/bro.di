import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import style from './components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import Background from '/public/bg_vector.png'
import Link from 'next/link'

const Signup = () => {
    
    // const[errMsg,setErrMsg] = useState('');
    // const[success,setSuccess]= useState(false);

    const [namaUser,setNamaUser] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user ={namaUser,email,password} 
        console.log(user);
        // setSuccess(true);

            fetch("http://localhost:5000/api/v1/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // credentials: "same-origin",
            body: JSON.stringify(user),
            }).then((res) => res.json())
            .then((res)=>{
                console.log(res.data);
            // fetch("")
            // router.push("/dashboard");
            });
        };

    
    return (
        <>
        
        <div className={style.body}>
        <Layout>
            <div className={style.register_container}>
                <h2 className={`${style.form_title} ${'text-center'}`}><b> Create Account </b></h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
            <input className={style.form_input}
                type="text"
                placeholder="Enter Your Full Name"
                value={namaUser}
                onChange={(e) => setNamaUser(e.target.value)}
            />
                <label>Email</label>
            <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

                <div className='d-grid gap-2'>
                    <button className={`${style.button_sub_login} ${"flex-grow-1 px-5"}`}type="submit">Create Account</button>
                    <Link href="/login"><button className={`${style.button_sub_signup} ${"flex-grow-1 px-5"}`} >Login</button></Link>
                </div>
            </form>
            </div>
            </Layout>
            </div>
        
        </>
      )
}

export default Signup