import React from 'react'
import HeaderCarousel from '../components/Layout/HeaderCarousel'
import dynamic from "next/dynamic";
import Recommended from '../components/Layout/Recommended'
import RestoranGrid from '../components/Layout/RestoranGrid'
import LayoutAuth from '../Layouts/LayoutAuth'
import { useRouter} from 'next/router'
import WithUtils from '../components/Layout/WithUtil/WithUtils'

const Dashboard = () => {
  const router = useRouter();
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
    <RestoranGrid/>
    <Recommended/>
    </LayoutAuth>
    
    </>
  )
  }


export default WithUtils(Dashboard)