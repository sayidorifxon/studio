import React, { useEffect, useRef, useState } from 'react'

function AdminBlueBanner() {
    const [bannerCard , setBannerCard] = useState(null)
    useEffect(()=>{
        async function getBannerCard (){
          let fetchBannerCard = await fetch("https://landing-page-backend-1.onrender.com/cards")
          let json = await fetchBannerCard.json()
          setBannerCard(json.data);
        }
        getBannerCard()
      }, [])
    let title = useRef()
    let create_title = useRef()
    let create_description = useRef()
    let create_referal = useRef()
    let create_image = useRef()
    let update_title = useRef()
    let update_description = useRef()
    let update_referal = useRef()
    let update_image = useRef()
    let updateform = useRef()
    const [id, setId] = useState("")
    async function updateTitle(e){
        e.preventDefault()
        let ready = {
            title:title.current.value
        }
        await fetch("https://umar-aka-backend.onrender.com/all-services/666fe0d4580596affdff3001", {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
    function openForm(e){
        updateform.current.classList.add("open")
        setId(e.target.id)
    }
    async function createCard(e){
        e.preventDefault()
        let ready = {
            title: create_title.current.value,
            description: create_description.current.value,
            referal: create_referal.current.value,
            imageLink: create_image.current.value,
        }
        await fetch(`https://umar-aka-backend.onrender.com/cards`, {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
    async function updateCard(e){
        e.preventDefault()
        let ready = {
            title: update_title.current.value,
            description: update_description.current.value,
            referal: update_referal.current.value,
            imageLink: update_image.current.value,
        }
        await fetch(`https://umar-aka-backend.onrender.com/cards/${id}`, {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
        updateform.current.classList.remove("open")

    }
    async function deleteCard(e){
        await fetch(`https://umar-aka-backend.onrender.com/cards/${e.target.id}`,{
            method:"DELETE"
        })
    }
  return (
    <div className='hero_form'>
      <form onSubmit={(e)=>updateTitle(e)}>
        <h2>blubanner title</h2>
        <input ref={title} type="text" placeholder='title' />
        <button type="submit">submit</button>
      </form>
      <div className="wrapper">
        <form onSubmit={(e)=>createCard(e)} className='create__form'>
            <input ref={create_title} type="text" placeholder='title' />
            <input ref={create_description} type="text" placeholder='description' />
            <input ref={create_image} type="text" placeholder='image' />
            <input ref={create_referal} type="text" placeholder='ref' />
            <button type="submit">create</button>
        </form>
        <div>
        <form onSubmit={(e)=>updateCard(e)} ref={updateform} className='update__form'>
            <input ref={update_title} type="text" placeholder='title' />
            <input ref={update_description} type="text" placeholder='description' />
            <input ref={update_image} type="text" placeholder='image' />
            <input ref={update_referal} type="text" placeholder='ref' />
            <button type="submit">update</button>
        </form>
        </div>
        <div className="grid">
            {bannerCard?.map((item)=>{
                return(
                <div className="card" key={item?._id}>
                    <h4>{item?.title}</h4>
                    <button id={item?._id} onClick={(e)=>deleteCard(e)}>delete</button>
                    <button id={item?._id} onClick={(e)=>openForm(e)}>update</button>
                </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default AdminBlueBanner
