import React from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Banner from '../components/Banner'
import BlueBanner from '../components/BlueBanner'
import AllProjects from '../components/AllProjects'
import Video from '../components/Video'
import Rassilka from '../components/Rassilka'
import Header from '../components/Header'
import Footer from '../components/Footer'

function HomePage() {
  return (
        <main>
          <Header/>
          <Hero/>
          <Service/>
          <Banner/>
          <BlueBanner/>
          <AllProjects/>
          <Video/>
          <Rassilka/>
          <Footer/>
        </main>
  )
}

export default HomePage
