import React from 'react'
import Layout from './Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Service from './Pages/Services/Service'


const App = () => {
  return (
    <div>
      <Layout/>
      
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/service' element={<Service/>}/>
         <Route path='/blog' element={<Blog/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App