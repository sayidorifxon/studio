import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../styles/admin.css"
import AdminBanner from '../components/AdminBanner'
import AdminBannerNumbers from '../components/AdminBannerNumbers'
import AdminBlueBanner from '../components/AdminBlueBanner'
import AdminProjects from '../components/AdminProjects'
function Admin() {
  
  let [allUsers, setAllUsers] = useState(null)
  let [update, forceUpdate] = useReducer(x=>x+1, 0)
  let id = useParams()
  useEffect(()=>{
    getUsers()
    getService()
  }, [update])
  async function getUsers(){
    let fetchUsers = await fetch("https://umar-aka-backend.onrender.com/users")
    let json = await fetchUsers.json()
    setAllUsers(json.data)
  }
  let user = allUsers?.find((item)=>item?._id === id?.userID)
  //Hero
  let hero_title = useRef()
  let hero_description = useRef()
  let hero_img = useRef()
   function heroSubmit(e){
    e.preventDefault()
    let ready = {
      title: hero_title.current.value,
      description: hero_description.current.value,
      imageLink: hero_img.current.value,
    }
    fetch(`https://landing-page-backend-1.onrender.com/headers/6687c2a4e2815f31cf742ff2`, {
      method:"put",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(ready)
    })
  }
  //Hero
  //service
  let service_title = useRef()
  let service_subtitle = useRef()
  
  function handleService(e){
    e.preventDefault()
    let ready = {
      title: service_title.current.value,
      description: service_subtitle.current.value,
    }
    fetch(`https://landing-page-backend-1.onrender.com/services/666fdd54e522b23994263bd9`,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
  }
  let [serID, setSerID]= useState(null)
  let editform = useRef()
  function openEditForm(e){
    editform.current.classList.add("open")
    setSerID(e.target.id)
  }
  let create_service_title = useRef()
  let create_service_subtitle = useRef()
  let create_service_image = useRef()
  function createServiceCard(e){
    e.preventDefault()
    let ready = {
      title: create_service_title.current.value,
      description: create_service_subtitle.current.value,
      imageLink: create_service_image.current.value
    }
    fetch("https://landing-page-backend-1.onrender.com/content-services",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
    forceUpdate()
  }
  const [ser, setSer] = useState(null)
  async function getService(){
    let fetchServices = await fetch("https://landing-page-backend-1.onrender.com/content-services")
    let json = await fetchServices.json()
    setSer(json.data)
    forceUpdate()
  }
  function delSerCard(e){
    fetch(`https://landing-page-backend-1.onrender.com/content-services/${e.target.id}`, {
      method:"DELETE"
    })
    forceUpdate()
  }
  let edit_ser_title = useRef()
  let edit_ser_subtitle = useRef()
  let edit_ser_image = useRef()
  function editServiceCard(e){
    e.preventDefault()
    let ready = {
      title: edit_ser_title.current.value ,
      description: edit_ser_subtitle.current.value,
      imageLink:edit_ser_image.current.value
    }
    fetch(`https://landing-page-backend-1.onrender.com/content-services/${serID}`, {
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
  }
  //service
  return (
    <div>
      <h2>welcome: {user?.username}</h2>
      <h2>email: {user?.email}</h2>
      <h2>phone: {user?.phone_number}</h2>
      <h2>password: {user?.password}</h2>

      <form className='hero_form' onSubmit={(e)=>heroSubmit(e)}>
        <h1>hero</h1>
        <input ref={hero_title} type="text" placeholder='title' />
        <input ref={hero_description} type="text" placeholder='description' />
        <input ref={hero_img} type="text" />
        <button type="submit">update</button>
      </form>
      <form className='hero_form service' onSubmit={(e)=>handleService(e)}>
        <h2>service</h2>
        <input ref={service_title} type="text"  placeholder='title'/>
        <input ref={service_subtitle} type="text"  placeholder='subtitle'/>
        <button type="submit">update</button>
      </form>
      <div className="service_wrapper">
      <form onSubmit={(e)=>createServiceCard(e)} className='hero_form service_card_create '>
        <h1>service cards create</h1>
        <input ref={create_service_title} type="text" placeholder='title' />
        <input ref={create_service_subtitle} type="text" placeholder='subtitle' />
        <input ref={create_service_image} type="text" placeholder='image' />
        <button type="submit">create</button>
      </form>
      <div className="box">
      <form onSubmit={(e)=>editServiceCard(e)} ref={editform} className='hero_form service_card_update '>
        <h2>service cards update</h2>
        <input ref={edit_ser_title} type="text" placeholder='title' />
        <input ref={edit_ser_subtitle} type="text" placeholder='subtitle' />
        <input ref={edit_ser_image} type="text" placeholder='image' />
        <button type="submit">update</button>
      </form>
      </div>
      <div className="xyz">
        {ser?.map((item)=>{
          return(
            <div className="service_card" key={item?._id}>
            <h2>{item?.title}</h2>
            <button id={item?._id} onClick={(e)=>delSerCard(e)}>delete</button>
            <button onClick={(e)=>openEditForm(e)}>update</button>
            </div>
          )
        })}
      </div>
      </div>
      <AdminBanner/>
      <AdminBannerNumbers/>
      <AdminBlueBanner/>
      <AdminProjects/>
    </div>
  )
}

export default Admin
