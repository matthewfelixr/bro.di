import {React, useState, useEffect} from 'react'
import Link from 'next/link'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import style from './components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import Background from '/public/bg_vector.png'
import { useRouter } from 'next/router'
import axios from 'axios'
import Cookies from 'js-cookie'

const Login = () => {

    const [namaUser,setNamaUser] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [jwt, setJwt] = useState(() => {
        const cookie = Cookies.get("jwt");
        return cookie ? cookie : false;
      });
    const router = useRouter();

    useEffect(() => {

        Cookies.set("jwt", jwt, { path: "" });
        }, [jwt]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user ={namaUser,email,password} 
        console.log(user);

        axios.post("http://localhost:5000/api/v1/user/login",user)
        .then((res) => {
            setJwt(res.data.data.accessToken);
            // console.log(res.data.data.accessToken);
            // Cookies.set('token', res.data.accessToken)
            // router.push("/dashboard");
            });
        // setSuccess(true);

            // fetch("http://localhost:5000/api/v1/user/login", {
            // method: "POST",
            // headers: {
            //     "Content-Type": "application/json",
            // },
            // // credentials: "same-origin",
            // body: JSON.stringify(user),
            // }).then((res)=>{
            //     res.json()
            // }).then((res) => {
            // console.log(res);
            // // Cookies.set('token', res.data.accessToken)
            // // router.push("/dashboard");
            // });
            // axios
			// .post("http://localhost:5000/api/v1/user/login", user) // server nya ON kan dulu sebelumnya
			// .then((res) => {
			// 	// memastikan bahwa token nya ada
			// 	if (typeof res.data.accessToken !== "undefined") {
			// 		// menyimpan di local storage
			// 		localStorage.setItem("brodiShopAccessToken", res.data.accessToken);

			// 		// menyimpan di redux store
			// 		const user = jwtDecode(res.data.accessToken);
			// 		axios.get(`localhost:5000/api/v1/user/${user.sub}`).then((res) => {
			// 			dispatch(
			// 				userSlice.actions.addUser({
			// 					userData: res.data,
			// 				})
			// 			);
			// 			navigate("/dashboard");
			// 		});
			// 	}
			// })
        };

    

  return (
    <>
    
    <div className={style.body}>
        <Layout>
            <div className={style.register_container}>
                <h2 className={`${style.form_title} ${'text-center'}`}><b> Create Account </b></h2>
            <form onSubmit={handleSubmit}>
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
                    <button className={`${style.button_sub_login} ${"flex-grow-1 px-5"}`}type="submit">Login</button>
                    <Link href="/signup"><button className={`${style.button_sub_signup} ${"flex-grow-1 px-5"}`} >Create Account</button></Link>
                </div>
            </form>
            </div>
            </Layout>
            </div>
    
    </>
  )
}

export default Login