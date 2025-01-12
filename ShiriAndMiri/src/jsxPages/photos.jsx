import React from "react";
import {useState, useContext} from 'react' 
import SignUp from './SignUP'
import '../App.css'
import FetchData from './FetchData'
import ContextUserProvider, { ContextUser } from './ContextUser'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import home from './home';
import { useNavigate } from "react-router-dom";

const Photos=()=>{
    const navigate = useNavigate();
    return(
        <>
        <button onClick={()=>navigate("/albums")}>back to albums</button>
        <h1>Photos</h1>
        </>
    )
}
export default Photos;