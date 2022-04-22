import React from 'react'
import style from './layout.module.css'
import Image from 'next/image'
import sushitei from '../../../public/sushitei.png'
import solaria from '../../../public/solaria.png'
import marudon from '../../../public/marudon.png'
import yoshinoya from '../../../public/yoshinoya.png'
import pelunch from '../../../public/pelunch.png'
import bakmigm from '../../../public/bakmigm.png'
import aw from '../../../public/aw.png'
import kafbet from '../../../public/kafebetawi.png'

const MitraKami = () => {
  return (
    <div className='container mt-5 mb-5'>
        <div className='row d-flex align-items-center m-auto'>
            <div className='col-4'>
                <hr></hr> 
            </div>
            <div className='col-4 text-center'>
                <h1 className={style.mitra_title}>Mitra Kami</h1>
            </div>
            <div className='col-4'>
                <hr></hr>
            </div>
        </div>

        <div class={style.grid_container}>
            <div class={style.item1}>
                <Image
                    src={sushitei}
                    width={147}
                    height={265}
                />
            </div>
            <div class={style.item2}>
                <Image
                    src={solaria}
                    width={265}
                    height={265}
                />
            </div>
            <div class={style.item3}>
                <Image
                    src={marudon}
                    width={633}
                    height={89}
                />    
            </div>  
            <div class={style.item4}>
            <Image
                    src={yoshinoya}
                    width={633}
                    height={139}
                />
            </div>
            <div class={style.item5}>
            <Image
                    src={pelunch}
                    width={212}
                    height={176}
                />
            </div>
            <div class={style.item6}>
            <Image
                    src={bakmigm}
                    width={249}
                    height={176}
                />
            </div>
            <div class={style.item7}>
            <Image
                    src={aw}
                    width={318}
                    height={176}
                />
            </div>
            <div class={style.item8}>
            <Image
                    src={kafbet}
                    width={277}
                    height={176}
                /></div>  
        </div>
    </div>
  )
}

export default MitraKami
