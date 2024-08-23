import React, { useRef } from 'react'

function AdminBanner() {
    let title = useRef()
    let description = useRef()
    let image = useRef()
    let link = useRef()
    async function handleSubmit(e){
        e.preventDefault()
        let ready = {
            title: title.current.value ,
            description: description.current.value,
            hyperlink: link.current.value,
            imageLink: image.current.value,
        }
        await fetch(`https://landing-page-backend-1.onrender.com/about-us/666fdeda8363a53ccab0b940`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
  return (
    <div>
        <form className='hero_form' onSubmit={(e)=>handleSubmit(e)} >
            <h2>bannersection</h2>
            <input ref={title} type="text" placeholder='title'/>
            <input ref={description} type="text" placeholder='subtitle'/>
            <input ref={link} type="text" placeholder='link'/>
            <input ref={image} type="text" placeholder='image'/>
            <button type="submit">update</button>
        </form>
    </div>
  )
}

export default AdminBanner
