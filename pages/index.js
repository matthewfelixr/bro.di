import React from 'react'
import { Provider } from 'react-redux'
import Layout from '../Layouts/Layout'
import AboutUs from './components/Layout/AboutUs'
import HeroSection from './components/Layout/HeroSection'
import MitraKami from './components/Layout/MitraKami'
import store from './components/Layout/store/store'
// import 'bootstrap/dist/css/bootstrap.min.css';    


const index = () => {
  return (
    <Provider store={store}>
    <Layout>
        <HeroSection/>
        <AboutUs/>
        <MitraKami/>
    </Layout>
    </Provider>
  )
}

export default index