import React, { useEffect, useState } from 'react'

function Number() {
    const [number , setNumber] = useState(null)
    useEffect(()=>{
    async function getNumber (){
      let fetchNumber = await fetch("https://landing-page-backend-1.onrender.com/about-us_number")
      let json = await fetchNumber.json()
      setNumber(json.data);
    }
    getNumber()
  }, [])
  
  return (
    <div className='number'>
      {number?.map((item)=>{
        return(
            <div className="number__card" key={item?._id}>
                <div>
                    <img width={100} src={item.imageLink} alt="" />
                    <h4>{item?.numbers}</h4>
                </div>
                <p>{item?.title}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Number
