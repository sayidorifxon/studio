import React, { useEffect, useState } from 'react'
import "../styles/allproject.css"
function AllProjects() {
    const [project , setProject] = useState(null)
    useEffect(()=>{
    async function getProject (){
      let fetchProject = await fetch("https://umar-aka-backend.onrender.com/all-projects")
      let json = await fetchProject.json()
      setProject(json.data[0]);
    }
    getProject()
  }, [])
  return (
    <section className='allproject'>
      <div className="container">
        <h2>{project?.title}</h2>
        <p>{project?.description}</p>
        <div className="project__wrapper">
            {project?.project_ref_id?.map((item)=>{
                return(
                    <div className="project__card" key={item?._id}>
                        <img src={`https://landing-page-backend-7ost.onrender.com${item?.imageLink}`} alt="" />
                    </div>
                )
            })}
        </div>
        <button className='button'>Все проекты</button>
      </div>
    </section>
  )
}

export default AllProjects
