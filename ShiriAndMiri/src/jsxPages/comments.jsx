import React from "react";
import {useState, useContext} from 'react' 
import SignUp from './SignUP'
import '../App.css'
import FetchData from './FetchData'
import ContextUserProvider, { ContextUser } from './ContextUser'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import home from './home';
import { useNavigate } from "react-router-dom";

const Comments = () => {
    const navigate = useNavigate();
    return(
        <>
        <button onClick={()=>navigate("/posts")}>back to posts</button>
        <h1>Comments</h1>
        </>
    )
}
export default Comments