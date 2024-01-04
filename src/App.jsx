import './App.css'
import Navbar from '../Componentes/Navbar'
import Profile from '../Componentes/Profile'
import BackgroundEffect from '../Componentes/BackgroundEffect'
import PersonalInfo from '../Componentes/PersonalInfo'
import Grid from '../Componentes/Grid'
import Footer from '../Componentes/Footer'
import Projects from '../Componentes/Projects'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlurComponent from '../Componentes/BlurComponent'
import SideBar from '../Componentes/SideBar'
import { useState } from 'react'

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleShowSideBar= () => {
    setShowSideBar(!showSideBar)
  }

  const data = [
    {
      "id":"1",
      "img": "IMG/Twitter-clone.png",
      "title": "Twitter Clone",
      "content": "This is my Twitter home page clone. I started learning React with this project. Every part of this home page is a reusable component which can be used for other projects. Once the layout was finished I learned how to ask an API data to generate the posts. With this project I learned the React basics and improve my HTML and CSS skills by styling all the components.",
      "link":"https://github.com/FrancoDagostin/Twitter-Clone"
    },
    {
      "id":"2",
      "img": "IMG/Shop-project.png",
      "title": "Franco Shop",
      "content": "This shop project introduced me to a huge amount of React functionalities like useState, useEffect and React-Router-DOM. I learned how to make reactive components and navigation through each of them as well as between sections and categories. Also I learned how to ask for data from a JSON and map it into the app which simplified coding a lot.",
      "link":"https://github.com/FrancoDagostin/Franco-Shop"
    },
    {
      "id":"3",
      "img": "IMG/FollowCard-project.png",
      "title": "Twitter Follow Card",
      "content": "This was my first React project, where I learned the fundamentals about this JavaScript library. I learned how to make components, import useState and map function. I understand the state of components and how to change it to make the web page interactive.",
      "link":"https://github.com/FrancoDagostin/Twitter-Follow-Card"
    },
    {
      "id":"4",
      "img": "IMG/Youtube-project.png",
      "title": "YouTube Clone",
      "content": "This YouTube Clone was created using only HTML and CSS. Making this projects I learned the fundamentals of HTML schematizing and CSS styling. Learned about Grid, Flexbox as well as divs, sections and other HTML tags.",
      "link":"https://github.com/FrancoDagostin/YouTube-Clone"
    }
  ]

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
