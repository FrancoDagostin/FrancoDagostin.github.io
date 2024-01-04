import './App.css'
import Navbar from '../Componentes/Navbar'
import Profile from '../Componentes/Profile'
import BackgroundEffect from '../Componentes/BackgroundEffect'
import PersonalInfo from '../Componentes/PersonalInfo'
import Grid from '../Componentes/Grid'
import Footer from '../Componentes/Footer'
import Projects from '../Componentes/Projects'
import data from '../Data/Data.json'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlurComponent from '../Componentes/BlurComponent'
import SideBar from '../Componentes/SideBar'
import { useState } from 'react'

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleShowSideBar= () => {
    setShowSideBar(!showSideBar)
  }

  return (
    <>
      <BrowserRouter>
       <Navbar onClick={()=> handleShowSideBar()}/>
       <BlurComponent show={showSideBar}/>
       <SideBar show={showSideBar} onClick={()=> setShowSideBar(false)}/>

       <Routes>
        <Route path='/' element={<Grid/>}/>
        <Route path='/Projects' element=
        
        {data.map ( projects=>
        <Projects 
        id={projects.id}
        key={projects.id}
        img={projects.img}
        title={projects.title}
        content={projects.content}
        link={projects.link}
        />
        )}/>

       </Routes>

       <Footer />
     </BrowserRouter>


      
      
      
      
    </>
  )
}

export default App
