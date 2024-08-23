import React, { useEffect, useState } from 'react'
import "../styles/hero.css"
function Hero() {
  const [hero , setHero] = useState(null)
  useEffect(()=>{
    async function getHero (){
      let fetchHero = await fetch("https://landing-page-backend-1.onrender.com/headers")
      let json = await fetchHero.json()
      setHero(json.data[0]);
    }
    getHero()
  }, [])
  
  return (
    <section className='hero' style={{backgroundImage:`url(${hero?.imageLink})`}}>
      <div className="container">
        <div className="hero__wrapper">
          <h4>{hero?.title}</h4>
          <h1>{hero?.description}</h1>
          <button className='button'>Наши проекты</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
