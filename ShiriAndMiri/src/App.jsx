import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'

import Login from './jsxPages/Login'
import SignUp from './jsxPages/SignUP'
import SignUpPart2 from './jsxPages/SignUp-part2'
import ContextUserProvider from './jsxPages/ContextUser'
import { use } from 'react'
function App() {
  
  useEffect(()=>{
    if(localStorage.getItem("currentUser")!==null){
      console.log(localStorage.getItem("currentUser"));
    }
  },[])
  
  return (
    <>
    <Outlet/>
    </>
  )
}

export default App
