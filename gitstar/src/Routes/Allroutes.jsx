import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Css from "../components/Css"
import JS from "../components/JS"
import Html from "../components/Html"
import Home from '../components/Home';
const Allroutes = () => {
  return (
    <>
  <Routes>
     <Route path='/Css' element={<Css/>}/>
     <Route path='/' element={<Home/>}/>
     <Route path='/HTML' element={<Html/>}/>
     <Route path='/Javascript' element={<JS/>}/>
    </Routes>
    </>
   
  )
}

export default Allroutes