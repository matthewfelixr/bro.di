import React from 'react'
import Layout from '../Layouts/Layout'
import AboutUs from './components/Layout/AboutUs'
import HeroSection from './components/Layout/HeroSection'


const index = () => {
  return (
    <Layout>
        <HeroSection/>
        <AboutUs/>

    </Layout>
  )
}

export default index