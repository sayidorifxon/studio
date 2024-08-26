import React, { useEffect, useReducer, useRef, useState } from 'react'

function AdminBannerNumbers() {
    const [number, setNumber] = useState(null)
    const [update, forceUpdate] = useReducer(x=>x+1, 0)
    useEffect(()=>{
        getNumber()
    }, [update])
    async function getNumber(){
        let fetchNumber = await fetch("https://landing-page-backend-1.onrender.com/about-us_number")
        let json = await fetchNumber.json()
        setNumber(json?.data)
        forceUpdate()
    }
    let title = useRef()
    let numbers = useRef()
    let image = useRef()
    let update_title = useRef()
    let update_numbers = useRef()
    let update_image = useRef()
    let update_form = useRef()
    const[id, setId] = useState("")
    async function createNumber(e){
        e.preventDefault()
        let ready = {
            title: title.current.value,
            numbers: numbers.current.value,
            imageLink: image.current.value,
        }
        await fetch("https://landing-page-backend-1.onrender.com/about-us_number",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
        forceUpdate()
    }
    function openUpdateForm(e){
        setId(e.target.id)
        update_form.current.classList.add("open")
    }
    async function updateNumber(e){
        e.preventDefault()
        let ready = {
            title: update_title.current.value,
            numbers: update_numbers.current.value,
            imageLink: update_image.current.value,
        }
        await fetch(`https://umar-aka-backend.onrender.com/about-us_number/${id}`, {
            method:"PUT",
            headers:{
               "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
        forceUpdate()
        update_form.current.classList.remove("open")
    }
  return (
    <div className='number_wrapper hero_form'>
        
      <form className='create_number' onSubmit={(e)=>createNumber(e)} >
        <h2>number</h2>
        <input ref={title} type="text" placeholder='title' />
        <input ref={numbers} type="text" placeholder='numbers' />
        <input ref={image} type="text" placeholder='image' />
        <button type="submit">create</button>
      </form>
      <div>
      <form ref={update_form} className='update_number' onSubmit={(e)=>updateNumber(e)} >
        <input ref={update_title} type="text" placeholder='title' />
        <input ref={update_numbers} type="text" placeholder='numbers' />
        <input ref={update_image} type="text" placeholder='image' />
        <button type="submit">update</button>
      </form>
      </div>
      <div className="number_grid">
        {number?.map((item)=>{
            return(
            <div className="number_card" key={item?._id}>
                <h4>{item?.title}</h4>
                <button>delete</button>
                <button id={item?._id} onClick={(e)=>openUpdateForm(e)}>update</button>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default AdminBannerNumbers
