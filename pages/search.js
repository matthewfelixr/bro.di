import React from 'react'
import Layout from '../Layouts/Layout'
import style from '../components/Layout/layout.module.css'
import RestoSearchCard from '../components/Layout/RestoSearchCard'
import Pagination from 'react-bootstrap/Pagination'
import LayoutAuth from '../Layouts/LayoutAuth'

const search = ({restoran}) => {
  return (
    <>
        <LayoutAuth>
            <div className={style.search_header}>
                <h1>Restaurant List</h1>
                <br></br>
                <br></br>
            </div>
            {restoran.map(resto=>(
  
  <RestoSearchCard
    key={resto.id}
    namaRestoran={resto.namaRestoran}
    lokasiRestoran={resto.lokasiRestoran}
    id={resto.id}
    gambarRestoran={resto.gambarRestoran}
  />

  ))}

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

export default search