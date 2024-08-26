import React, { useEffect, useRef, useState } from 'react'

function AdminProjects() {
    const[projectCards , setProjectCards] = useState(null)
    const[id , setId] = useState("")
    let main_title = useRef()
    let main_description = useRef()
    let create_image = useRef()
    let update_image = useRef()
    let update_projects = useRef()
    async function updateProject(e){
        e.preventDefault()
        let ready = {
            title:main_title.current.value,
            description:main_description.current.value,
        }
        await fetch(`https://umar-aka-backend.onrender.com/all-projects/666fe207faf592070189b5dc5`,{
            method:"PUT",
            headers:{
                "content-tpe":"application/json"
            },
            body:JSON.stringify(ready)
        })

    }
    useEffect(()=>{
        getProjectCards()
    }, [])
    async function getProjectCards(){
        let fetchProjectCards = await fetch("https://landing-page-backend-1.onrendecardsr.com/projects")
        let json = await fetchProjectCards.json()
        setProjectCards(json?.data)
    }
    async function updateProjectCard(e){
        e.preventDefault()
        let ready = {
            title:"xyz",
            imageLink:update_image.current.value,
        }
        await fetch(`https://umar-aka-backend.onrender.com/projects/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
        update_projects.current.classList.remove("open")

    }
    async function createProjectCard(e){
        e.preventDefault()
        let ready = {
            title:"xyz",
            imageLink:create_image.current.value,
        }
        await fetch("https://umar-aka-backend.onrender.com/projects",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
    function openUpdate(e){
        update_projects.current.classList.add("open")
        setId(e.target.id)
    }
  return (
    <div className='hero_form'>
      <form onSubmit={(e)=>updateProject(e)}>
        <h2>all projects</h2>
        <input ref={main_title} type="text" placeholder='title' />
        <input ref={main_description} type="text" placeholder='description' />
        <button type="submit">update</button>
      </form>
      <div className="wrapper">
        <form className='createproject' onSubmit={(e)=>createProjectCard(e)}>
            <input ref={create_image} type="text" placeholder='rasm'/>
            <button type="submit">create</button>
        </form>
        <div>
        <form onSubmit={(e)=>updateProjectCard(e)} ref={update_projects} className='updateproject'>
            <input ref={update_image} type="text" placeholder='rasm'/>
            <button type="submit">update</button>
        </form>
        </div>
        <div className="grid">
            {projectCards.map((item)=>{
                return(
                <div className="card" key={item?._id}>
                    <img width={50} src={item?.imageLink} alt="rasm chiqmadi" />
                    <button>delete</button>
                    <button id={item?._id} onClick={(e)=>openUpdate(e)}>update</button>
                </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default AdminProjects
