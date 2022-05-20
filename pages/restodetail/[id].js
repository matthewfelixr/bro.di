import {React , useState , useEffect } from 'react'
import { useRouter } from "next/router";
import axios from 'axios';  
import LayoutAuth from '../../Layouts/LayoutAuth'
import style from '../components/Layout/layout.module.css'
import Image from 'next/image'
import solaria from '../../public/solaria.png'
import imgtemp from '../../public/imgtemp.png'
import Link from 'next/link'
import Tabs from '../components/Layout/Tabs'
import { useParams } from 'react-router';
import withUtils from '../components/Layout/withUtils/withUtils';
const RestoDetail = ({restoran}) => {

    // const param = useParams()
    // const [restoran,setRestoran] = useState()
    const router = useRouter();
    const { id } = router.query;
    var imageSize ={
        width:"430px", height:"350px" , borderRadius:"25px"
      }
    console.log(restoran)
    // const object= {
    //     namaRestoran: nama,

    // }
    // console.log(restoDetail);
        // useEffect(() => {
        //   axios.get(`https://brodi-db.herokuapp.com/api/v1/restaurant/${id}`).then((res)=>{
        //     setRestoran(res.data.data)
        //   })
        //   .catch((err)=>{
        //     console.log(err)
        //   })
        // },[restoran])
        

  return (
    <LayoutAuth>
    {restoran &&
        <div className={style.grid_container2}>
        <div className={style.grid_item1}>
        <div className='row d-flex'>
            <div className='col-3'>
            <Image
            src={solaria}
            width={110}
            height={110}
            />
            </div>
            <div className='col text-start'>
                <h1> <b>{restoran.namaRestoran}</b></h1>
                <h4> {restoran.lokasiRestoran}</h4>
                <h6> Rating 4,5</h6>
            </div>
        </div>
        </div>
        <div className={style.grid_item2}>
              <img src={restoran.gambarRestoran} alt={`Gambar Resto ${restoran.namaRestoran}`} style={imageSize}></img>
            <div className='mt-2'>
                    <Link href={`/booking/${id}`}><button className={`${style.button_sub_book} ${"flex-grow-1 px-5 m-auto"}`}type="submit">Book Now</button></Link>
            </div>

        </div>
        <div className={style.grid_item3}>
        <Tabs
            namaRestoran={restoran.namaRestoran}
            gambarMenu={restoran.gambarMenu}/>
                
        </div>  
    </div>
    }
    </LayoutAuth>
  )
}
export async function getServerSideProps(context){
  const restoran = await fetch(`https://brodi-db.herokuapp.com/api/v1/restaurant/${context.params.id}`)
      .then(res=> res.json());
  
  return{
      props: {
          restoran:restoran.data
      }
  }
  

}
export default withUtils(RestoDetail)