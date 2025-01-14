import React from "react";
import {useState, useContext} from 'react' 
import '../../../App.css'
import fetchData from '../../../service/FetchData.js'
import  { ContextUser } from '../../ContextUser.jsx'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Photos=()=>{
    const navigate = useNavigate();
    return(
        <>
        <h1>Photos</h1>
        </>
    )
}
export default Photos;