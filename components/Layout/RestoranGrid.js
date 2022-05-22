import React from 'react'
import RestoCard from './RestoCard'
import style from './layout.module.css'

const RestoranGrid = ({restoran}) => {
  console.log(restoran)
  return (
    <>
    {restoran &&
            <div className='container d-grid'>
      
            
            <hr></hr>
            <div className='row py-4 '> 
              <div className='col d-flex'>
                {restoran.map((resto)=>{
                  <RestoCard
                    // namaRestoran={restoran.namaRestoran}
                    // lokasiRestoran={restoran.lokasiRestoran}
                  />
                })}
      
              </div>
            </div>
          </div>
    }

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

export default RestoranGrid