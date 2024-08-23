import React, { useEffect, useState } from 'react'
import "../styles/video.css"
function Video() {
    const [video , setVideo] = useState(null)
    useEffect(()=>{
    async function getVideo (){
      let fetchVideo = await fetch("https://landing-page-backend-1.onrender.com/videos")
      let json = await fetchVideo.json()
      setVideo(json.data[0]);
    }
    getVideo()
    }, [])
  return (
    <section className='video' style={{backgroundImage:`url(${video?.imageLink})`}}>
        <div className="container">
            <div className="video__wrapper">
                <h2>{video?.title}</h2>
                <p>{video?.description}</p>
                <iframe title='video' src={video?.video} frameborder="0">video</iframe>
            </div>
        </div>
    </section>
  )
}

export default Video
