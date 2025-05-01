import React from 'react'
import Hero from "./sections/Hero";
import ShowcaseSection from './components/ShowcaseSection';
import NavBar from './components/NavBar';
import Experience from './components/ExperienceSection';
import TechStack from './sections/TechStack';
import Contact from './components/Contact';



const App = () => {
  return (
    <>
      <Hero/>
      <ShowcaseSection/>
      <NavBar/>
      <Experience/>
      <TechStack/>
      <Contact/>
    </>
  )
}

export default App