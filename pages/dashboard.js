import React from 'react'
import HeaderCarousel from '../components/Layout/HeaderCarousel'
import dynamic from "next/dynamic";
import Recommended from '../components/Layout/Recommended'
import RestoCard from '../components/Layout/RestoCard'
import LayoutAuth from '../Layouts/LayoutAuth'
import { useRouter} from 'next/router'
import Link from 'next/link'
import WithUtils from '../components/Layout/WithUtil/WithUtils'

const Dashboard = ({restoran}) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  return (
    <>
    <LayoutAuth>
    <HeaderCarousel/>
    <br></br>
    <br></br>
    <br></br>
    <div className='d-flex m-1'>
    {restoran.map(resto=>(
  
    <RestoCard
      key={resto.id}
      namaRestoran={resto.namaRestoran}
      lokasiRestoran={resto.lokasiRestoran}
      id={resto.id}
      gambarRestoran={resto.gambarRestoran}
    />
 
    ))}
    </div>
    <Recommended/>
    </LayoutAuth>
    
    </>
  )
  }
  export async function getStaticProps(){
    const restoran = await fetch('https://brodi-db.herokuapp.com/api/v1/restaurant/all')
        .then(res=> res.json());
    return{
        props: {
            restoran:restoran.data,
        }
    }
    
  
  }

export default WithUtils(Dashboard)