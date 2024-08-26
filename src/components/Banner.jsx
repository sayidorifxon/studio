import React, { useEffect, useState } from 'react'
import "../styles/banner.css"
import Number from './Number'
function Banner() {
    const [banner , setBanner] = useState(null)
    useEffect(()=>{
    async function getBanner (){
      let fetchBanner = await fetch("https://umar-aka-backend.onrender.com/about-us")
      let json = await fetchBanner.json()
      setBanner(json.data[0]);
    }
    getBanner()
  }, [])
  
  return (
    <section className='banner'>
      <div className="container">
        <div className="banner__wrapper">
            <div className="banner__content">
                <h2>{banner?.title}</h2>
                <p>{banner?.description}</p>
                <a href="#!">Подробнее о компании</a>
            </div>
            <img width={500} src={`https://umar-aka-backend.onrender.com${banner?.imageLink}`} alt="" />
        </div>
        <Number/>
      </div>
    </section>
  )
}

export default Banner
