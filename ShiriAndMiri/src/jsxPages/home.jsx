import { useContext ,useState,useEffect} from "react";
import '../App.css'
import {Navigate} from 'react-router-dom'
import fetchData from "./FetchData";
import ShowInfo from "./showInfo";
import { ContextUser } from "./ContextUser";
import { useNavigate } from "react-router-dom";
import Albums from "./albums";
import Todos from "./todos";
import Posts from "./posts";

const Home = () =>{
const navigate = useNavigate();

const [showInfo,setShowInfo]=useState(false);
const {user,resetUser}=useContext(ContextUser);

function logout(){
    resetUser();
    navigate("/login");
}
console.log(user);

return(<>
    <>
    <h1>Home</h1>
    <h3>{user.slice(1, -1)},Welcome back!</h3>
    <button className="btnNav" onClick={()=>navigate("/albums")}>Albums</button>
    <button className="btnNav" onClick={()=>navigate("/todos")}>Todos</button>
    <button className="btnNav" onClick={()=>navigate("/posts")}>Posts</button>
    <br/>
    <br/>
    <button onClick={logout}>log out</button>
    <button onClick={()=>setShowInfo(!showInfo)}>{showInfo?"hide Info":"show Info"}</button>
    {showInfo&&<ShowInfo/>}
    </>
</>)
} 


export default Home;
