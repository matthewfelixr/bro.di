import React from 'react'
import dynamic from "next/dynamic";
import style from './layout.module.css'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import RestoCard from './RestoCard';

const Recommended = () => {
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
      });
  return (
    <>
    <div className={'container mt-5 pt-5'}>
    <h1 className={style.owl_title}>Recommended</h1>
    <hr></hr>
    <OwlCarousel>
    <div className={style.item}><RestoCard/></div>
    <div className={style.item}><RestoCard/></div>
    <div className={style.item}><RestoCard/></div>
    <div className={style.item}><RestoCard/></div>
    <div className={style.item}><RestoCard/></div>
    </OwlCarousel>
    </div>
    <div className={'container mt-3 pt-3'}>
    <h1 className={style.owl_title}>Indonesian Restaurant</h1>
    <hr></hr>
    <OwlCarousel>
    <div className={style.item}><RestoCard/></div>
    <div className={style.item}><RestoCard/></div>
    <div className={style.item}><RestoCard/></div>
    <div className={style.item}><RestoCard/></div>
    <div className={style.item}><RestoCard/></div>
    </OwlCarousel>
    </div>
    </>
  )
}

export default Recommended