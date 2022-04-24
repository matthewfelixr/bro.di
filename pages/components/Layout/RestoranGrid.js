import React from 'react'
import RestoCard from './RestoCard'
import style from './layout.module.css'

const RestoranGrid = () => {
  return (
    <div className='container d-grid'>
      <h1 className={style.owl_title}>Recommended</h1>
    <hr></hr>
      <div className='row py-4 '> 
        <div className='col d-flex'>
          <RestoCard/>
          <RestoCard/>
          <RestoCard/>
        </div>
      </div>
      <div className='row py-4'> 
        <div className='col d-flex'>
          <RestoCard/>
          <RestoCard/>
          <RestoCard/>
        </div>
      </div>
      <div className='row py-4'> 
        <div className='col d-flex'>
          <RestoCard/>
          <RestoCard/>
          <RestoCard/>
        </div>
      </div>
    </div>
  )


  

}

export default RestoranGrid