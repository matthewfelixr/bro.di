import React from 'react'
import Layout from '../Layouts/Layout'
import style from './components/Layout/layout.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import userSlice from './components/Layout/store/userSlice'
import { Provider } from "react-redux";
import store from './components/Layout/store/store'
const Register = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();

	// memberitahu pesan gagal dalam regis

	const [ regStatus , setRegStatus] = useState({
		succes: false,
		message: " ",
	});

	// const dispatch = useDispatch();
	// const navigate = useNavigate();

	//menampilkan data  email dan password

	const formSubmithandler = (data) => {
		console.log(data);

		const postData = {
			email: data.user_email,
			password: data.user_password,
      namaUser: data.user_namaUser,
		};

		axios
			.post("localhost:5000/api/v1/user/register", postData) // server nya ON kan dulu sebelumnya
			.then((res) => {
				// memastikan bahwa token nya ada
				if (typeof res.data.accessToken !== "undefined") {
					// menyimpan di local storage
					localStorage.setItem("brodiShopAccessToken", res.data.accessToken);

					// menyimpan di redux store
					const user = jwtDecode(res.data.accessToken);
					axios.get(`localhost:5000/api/v1/user/${user.sub}`).then((res) => {
						dispatch(
							userSlice.actions.addUser({
								userData: res.data,
							})
						);
						navigate("/dashboard");
					});
				}
			})
			// unsuccess login attempt

			.catch((err) => {
				setRegStatus({
					success: false,
					message: "Oops, your account has been register",
				});
			});
	};
  
  return (
    <Provider store={store}>
    <>
    <div className={style.body}>
        <Layout>
            <div className={style.register_container}>
            <h2 className={`${style.form_title} ${'text-center'}`}><b> Create Account </b></h2>
            <form onSubmit={handleSubmit(formSubmithandler)} className='p-4'>
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
                {/* <div className='mb-4 px-5'>
                  <label className={style.form_label}> Confirm Password </label><br></br>
                  <input type="password" placeholder="Confirm Password" className={style.form_input} {...register("Confirm Password", {required: true})} /><br></br>
                </div> */}
                <div className='mb-4 text-center'>
                <button type="submit" className={`${style.button_sub_login} ${"flex-grow-1"}`}>Create Account</button>
                <Link href="/login"><button type="submit" className={`${style.button_sub_signup  } ${"flex-grow-1"}`}>Login</button></Link>
                </div>
            </form>
            </div>
        </Layout>
    </div>
    </>
    </Provider>
  )
}

export default Register

//, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i pattern password, conf password
//, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i
//, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i  pattern email