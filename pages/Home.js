import React from 'react'
import Layout from '../Layouts/Layout'
import AboutUs from '../components/Layout/AboutUs'
import HeroSection from '../components/Layout/HeroSection'

const Home = (props) => {
  return (
    <Layout>
        <HeroSection/>
        <AboutUs/>
    </Layout>
  )
}

export default Home