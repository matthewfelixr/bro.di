import React from 'react'
import Layout from '../Layouts/Layout'
import AboutUs from './components/Layout/AboutUs'
import HeroSection from './components/Layout/HeroSection'
import MitraKami from './components/Layout/MitraKami'
// import 'bootstrap/dist/css/bootstrap.min.css';    


const index = () => {
  return (
    <Layout>
        <HeroSection/>
        <AboutUs/>
        <MitraKami/>
    </Layout>
  )
}

export default index