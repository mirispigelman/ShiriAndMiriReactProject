import { useContext, useEffect } from 'react'
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom';
import fetchData from './service/FetchData';
import { ContextUser } from "./jsxPages/ContextUser";



function App() {
  const navigate=useNavigate();
  const {setUser}=useContext(ContextUser);
  const fetchUser = async () => {
    try {
        const userId = localStorage.getItem("currentUser");//
        console.log("use rId"+ userId);
        if (userId) {
            const userData = await fetchData(`users?id=${userId.slice(1,-1)}`); 
            setUser(userData[0]); 
        } else {
            navigate("/login"); 
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        alert("Error fetching user");
        navigate("/login"); 
    }
};

useEffect(() => {
    fetchUser();
}, [navigate]);

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
