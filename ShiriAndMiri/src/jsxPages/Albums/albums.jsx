import React from "react";
import {useState, useContext} from 'react' 
import '../../App.css'
import FetchData from '../../service/FetchData.js'
import  { ContextUser } from '../ContextUser'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Albums=()=>{
    const navigate = useNavigate();
    const{user}=useContext(ContextUser);
    return(
        <>
        <h1>Albums</h1>
        </>
    )
}
export default Albums;