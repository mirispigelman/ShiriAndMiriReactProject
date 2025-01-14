import React from "react";
import {useState, useContext} from 'react' 
import '../../../App.css'
import FetchData from '../../../service/FetchData.js'
import  { ContextUser } from '../../ContextUser'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Comments = () => {
    const navigate = useNavigate();
    return(
        <>
        <h1>Comments</h1>
        </>
    )
}
export default Comments