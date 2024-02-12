import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Signin from './Pages/Signin/Signin'
import {Routes,Route,Link} from 'react-router-dom'

function App() {
  
  return (
  
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<Signin/>}/>
   </Routes>
  )
}

export default App
