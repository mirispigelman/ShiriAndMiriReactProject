import React, { useEffect } from "react";
import {useState, useContext} from 'react' 
import SignUp from './SignUP'
import '../App.css'
import fetchData from './FetchData'
import ContextUserProvider, { ContextUser } from './ContextUser'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import home from './home';
import { useNavigate } from "react-router-dom";
const Todos=()=>{
    const navigate = useNavigate();
    const {userId} = useContext(ContextUser);
    const {data,setData}=useState([]);

    useEffect(() => {
        async function getTodos(){
            let todos = await fetchData(`todos?userId=${userId.slice(1,-1)}`)||[]; 
            setData(todos);
        }
        getTodos();
    })
    console.log(userId);
    console.log(data);
    
    return(
        <>
        <button onClick={()=>navigate("/home")}>back to home</button>
        <h1>Todos</h1>
        {data.map((todo)=><div>
            <button></button>
            {todo.title}
            </div>)}
        </>
    )
}
export default Todos;