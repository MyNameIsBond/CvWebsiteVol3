import React from 'react'
import './App.sass'
import NavBar from './components/NavBar'
import WelcomeScreen from './components/WelcomeScreen'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Portofolio from './components/Portofolio'
import Timeline from './components/Timeline'
import ContactMe from './components/ContactMe'
import Fotter from './components/Fotter'
function App() {
  return (
    <div>
      <NavBar />
      <WelcomeScreen />
      <AboutMe />
      <Services />
      <Portofolio />
      <Timeline />
      <ContactMe />
      <Fotter />
    </div>
  )
}

export default App
