import React, { useEffect, useState } from 'react'
import "../styles/bluebanner.css"
function BlueBanner() {
  const [banner , setBanner] = useState(null)
  const [bannerCard , setBannerCard] = useState(null)
  useEffect(()=>{
    async function getBanner (){
      let fetchBanner = await fetch("https://landing-page-backend-1.onrender.com/all-services")
      let json = await fetchBanner.json()
      setBanner(json.data[0]);
    }
    async function getBannerCard (){
      let fetchBannerCard = await fetch("https://landing-page-backend-1.onrender.com/cards")
      let json = await fetchBannerCard.json()
      setBannerCard(json.data);
    }
    getBanner()
    getBannerCard()
  }, [])
  return (
    <section className='bluebanner'>
      <div className="container">
        <div className="bluebanner__wrapper">
            <h2>{banner?.title}</h2>
            <button className='button'>Все услуги</button>
        </div>
        <div className="bluebanner__grid">
            {bannerCard?.map((item)=>{
                return(
                    <div className="bluebanner__card" key={item?._id}>
                        <img width={200} src={item?.imageLink} alt="" />
                        <h4>{item?.title}</h4>
                        <p>{item?.description}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default BlueBanner
