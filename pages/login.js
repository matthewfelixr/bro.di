import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import style from '../components/Layout/layout.module.css'
import Layout from '../Layouts/Layout'
import Background from '/public/bg_vector.png'
import { useRouter } from 'next/router'
import axios from 'axios'
import Cookies from 'js-cookie'

const Login = () => {

    const [namaUser,setNamaUser] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [userId, setUserId]= useState(()=>{
        const cookie = Cookies.get("userId");
        return cookie ? cookie : "";
    });

    const [jwt, setJwt] = useState(() => {
        const cookie = Cookies.get("jwt");
        return cookie ? cookie : "";
      });
    const router = useRouter();

    useEffect(() => {

        Cookies.set("jwt", jwt, { path: "" });
    }, [jwt]);
        
    useEffect(() => {

        Cookies.set("userId", userId, { path: "" });
    }, [userId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user ={namaUser,email,password} 
        console.log(user);

        axios.post("https://brodi-db.herokuapp.com/api/v1/user/login",user)
        .then((res) => {
            setUserId(res.data.data.id);
            setJwt(res.data.data.accessToken);
            router.replace("/dashboard")
            // console.log(res.data.data.accessToken);
            // Cookies.set('token', res.data.accessToken)
            // router.push("/dashboard");
            });
        };

    

  return (
    <>
    
    <div className={style.body}>
        <Layout>
            <div className={style.login_container}>
                <h2 className={`${style.form_title} ${'text-center'}`}><b> Login </b></h2>
            <form className=" p-5 mb-4"onSubmit={handleSubmit}>

                <label className={style.form_label}>Email</label> 
            <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={style.form_input}
            />
            <label className={style.form_label} >Password</label>
            <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={style.form_input}
            />

                <div className='d-grid gap-2 mt-2'>
                    <button className={`${style.button_sub_login} ${"flex-grow-1 px-5 m-0 w-100"}`}type="submit">Login</button>
                    <Link href="/signup"><button className={`${style.button_sub_signup} ${"flex-grow-1 px-5 m-0 w-100"}`} >Create Account</button></Link>
                </div>
            </form>
            </div>
            </Layout>
            </div>
    
    </>
  )
}

export default Login