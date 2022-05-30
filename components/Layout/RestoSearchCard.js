import React from 'react'
import Link from 'next/link'
import  style from './layout.module.css'
import Image from 'next/image'
import Rating from  '../../public/rating.png'
import { useRouter} from 'next/router'

const RestoSearchCard = ({namaRestoran,lokasiRestoran,gambarRestoran ,id}) => {
    const router = useRouter()
    var imageSize ={
        width:"295px", height:"250px" , borderRadius:"25px 0px 0px 25px"
      }
  return (
    <>
        <div className={style.card_search_container}
        onClick={()=>router.push(`/restodetail/${id}`)}>
            <div className={`${style.row_card_search} ${"d-flex"}`}>
                <div className={`${style.col_search_image} ${"col-3"}`}>
                <img src={gambarRestoran} className={style.card_short_image} style={imageSize}></img>
                </div>
                
                <div className={`${style.col_search_description} ${"col-9"}`}>
                    <div className={style.card_search_description}>
                        <h1>{namaRestoran}</h1>
                        <h4>{lokasiRestoran}</h4>
                        <br></br>
                        <Image
                            src={Rating}
                            alt="Rating"
                            width={120}
                            height={19}
                        /> <span className={style.disabled_text}> Indonesian </span>
                    </div>
                    <Link href="/dashboard">
                    <div className={style.card_search_visit}>
                        Visit
                    </div>
                    </Link>
                </div>
                
            </div>
        </div>          
    </>
  )
}

export default RestoSearchCard