import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Navigate, Routes,Route} from 'react-router-dom'

import Login from './Login'
import SignUp from './SignUP'
import SignUpPart2 from './SignUp-part2'
import { use } from 'react'
function App() {
  
  useEffect(()=>{
    if(localStorage.getItem("currentUser")!==null){
      console.log(localStorage.getItem("currentUser"));
    }
  },[])
  
  return (
    <>
     {/* <Login/>
     <SignUp/> */}
     <SignUpPart2/>
    </>
  )
}

export default App
