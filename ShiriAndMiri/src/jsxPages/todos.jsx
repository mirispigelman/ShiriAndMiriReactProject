import React, { useEffect } from "react";
import {useState, useContext} from 'react' 
import SignUp from './SignUP'
import '../App.css'
import fetchData from './FetchData'
import ContextUserProvider, { ContextUser } from './ContextUser'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Todos=()=>{
    const navigate = useNavigate();
    const {userId} = useContext(ContextUser);
    const [data,setData]=useState([]);

    useEffect(() => {
        async function getTodos(){
            let todos = await fetchData(`todos?userId=${userId.slice(1,-1)}`)||[]; 
            setData(todos);
        }
        getTodos();
    },[]);

    const handleCheckboxToggle = async (todo) => {
        try{
            ///what is more efficient? to ask the server again or to do map?
            let responseTodo = await fetchData(`todos?userId=${userId.slice(1,-1)}&&id=${todo.id}`,'PUT',{completed:!todo.completed})||[]; 
            console.log(responseTodo);
            setData(prevData => prevData.map(item => item.id === todo.id ? {...item, completed: !item.completed} : item));
        }
        catch(e){ console.error('Error fetching:', e); }
    }
    console.log(userId);
    console.log(data);
    
    return(
        <>
        <button onClick={()=>navigate("/home")}>back to home</button>
        <h1>Todos</h1>
        <div className="container">
        {data.map((todo)=><div key={todo.id} className="line">
            <strong>{todo.id}</strong>
            <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleCheckboxToggle(todo)}
            >
            </input>
            <button>delete</button>
            <button>update content</button>
            <button>update state</button>

            {todo.title}
            </div>)}
        </div>
        </>
        
    )
}
export default Todos;