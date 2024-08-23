import React, { useEffect, useState } from 'react'
import "../styles/service.css"
function Service() {
  const [service , setService] = useState(null)
  useEffect(()=>{
    async function getService (){
      let fetchService = await fetch("https://landing-page-backend-1.onrender.com/services")
      let json = await fetchService.json()
      setService(json.data[0]);
    }
    getService()
  }, [])
  
  return (
    <section className='service'>
      <div className="container">
        <h2>{service?.title}</h2>
        <p>{service?.description}</p>
        <div className="service__wrapper">
            {service?.content_ref_id?.map((item)=>{
                return(
                    <div className="service__card" key={item._id}>
                    <img src={`https://landing-page-backend-1.onrender.com${item?.imageLink}`} alt="" />
                        <div>
                            <h4>{item?.title}</h4>
                            <h5>{item?.description}</h5>
                        </div>
                    </div>
                )
            })}
        </div>
        <button className='button'>Все услуги</button>
      </div>
    </section>
  )
}

export default Service
