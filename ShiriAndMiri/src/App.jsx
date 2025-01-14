import { useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  useEffect(() => {
    if (localStorage.getItem("currentUser") !== null) {
      console.log(localStorage.getItem("currentUser"));
    }
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
