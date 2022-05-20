import React,{useState,useEffect} from 'react'
import { useRouter } from "next/router";
import { Form, Table } from 'react-bootstrap'
import style from '../components/Layout/layout.module.css'
import Layout from '../../Layouts/Layout'
import Link from 'next/link'
import axios from 'axios';
import Cookies from 'js-cookie'
import WithUtils from '../components/Layout/WithUtil/WithUtils';

const Booking = ({restoran,meja}) => {
    // const [restoran,setRestoran] = useState()
    const router = useRouter();
    const { id } = router.query;
    const [bookDate,setBookDate] =useState();
    const [bookHourStart,setBookHourStart] =useState();
    const [bookHourEnd,setBookHourEnd] =useState();
    const [seat,setSeat] =useState();
    const [idMeja,setSelectSeat]=useState(['option 1','option 2'])
    const idUser = Cookies.get("userId");
    // console.log(restoran)
    // console.log(meja)



    // useEffect(() => {
    //     axios.get(`https://brodi-db.herokuapp.com/api/v1/restaurant/${id}`).then((res)=>{
    //       setRestoran(res.data.data)
    //     })
    //     .catch((err)=>{
    //       console.log(err)
    //     })
    //   })
    
      const handleSubmit = (e)=>{
          e.preventDefault();
          const order = {
              idUser,
              idMeja,
              bookDate,
              bookHourStart,
              bookHourEnd,
              bookStatus:"success"}
          console.log(order)

          axios.post("https://brodi-db.herokuapp.com/api/v1/order/create",order)
          .then((res)=>{

            
          })

      }
  return (
    <>
        <div className={style.body}>
        <Layout>
            {restoran &&
                <div className={style.booking_container}>
                <h2 className={`${style.form_title} ${'text-center'}`}><b> {restoran.namaRestoran} Booking </b></h2>
                <form className='p-5 mb-4' onSubmit={handleSubmit}>
                    <label className={style.form_label}>Date</label>
                    <input
                        type="date"
                        placeholder="dd/mm/yyy"
                        value={bookDate}
                        onChange={(e) => setBookDate(e.target.value)}
                        className={style.form_input}
                    />

                    <div className='row d-flex'>
                        <div className='col-6'>
                            <label className={style.form_label}>Hour Start</label>
                            <input
                            type="time"
                            placeholder="00:00"
                            value={bookHourStart}
                            onChange={(e) => setBookHourStart(e.target.value)}
                            className={style.form_input}
                            />
                        </div>
                        <div className='col-6'>
                            <label className={style.form_label}>Hour End</label>
                            <input
                            type="time"
                            placeholder="00:00"
                            value={bookHourEnd}
                            onChange={(e) => setBookHourEnd (e.target.value)}
                            className={style.form_input}
                            />
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <div className='col-6'>
                        <label className={style.form_label}>Seats</label>
                    <input
                        type="number"
                        placeholder=""
                        value={seat}
                        min="1"
                        onChange={(e) => setSeat(e.target.value)}
                        className={style.form_input}
                    />
                    </div>
                    <div className='col-6'>
                    <label className={style.form_label}>Select Seat</label>
                    <select
                                                placeholder="Select Seat"
                                                value={idMeja}
                                                onChange={(e) => setSelectSeat(e.target.value)}
                                                className={style.form_input}
                    >
                    <option value="">-Select Seat-</option>
                    {meja.map((item,index) => {
                                return (
                                    <option value={item.id} key={index}>{item.id}</option>
                                )
                            })}
                    </select>
                    </div>
                    </div>
                    

                    <div className='d-grid gap-2'>
                        <button className={`${style.button_sub_book} ${"flex-grow-1 px-5"}`}type="submit">Book</button>
                        <Link href={`/restodetail/${id}`}><button className={`${style.button_sub_back} ${"flex-grow-1 px-5"}`} >Back</button></Link>
                    </div>
                </form>
                {/* <Form className={style.form_container}> 
                    <Form.Group className="mb-4 px-5" controlId="formBasicName">
                        <Form.Label className={style.form_label}>bookDate</Form.Label>
                        <Form.Control type="bookDate" placeholder="Input your bookDate" />
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
                </Form> */}
                </div>
            }
            
        </Layout>
        </div>
    </>
  )
}
export async function getServerSideProps(context){
    const restoran = await fetch(`https://brodi-db.herokuapp.com/api/v1/restaurant/${context.params.id}`)
        .then(res=> res.json());
    const meja = await fetch(`https://brodi-db.herokuapp.com/api/v1/table/all`)
        .then(res=> res.json());
    return{
        props: {
            restoran:restoran.data,
            meja:meja.data
        }
    }
    
  
  }
export default WithUtils(Booking)