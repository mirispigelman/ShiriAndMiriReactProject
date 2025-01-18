import React from "react";
import { useState } from 'react'
import { useParams } from "react-router-dom";
import '../../../App.css'
import fetchData from '../../../service/FetchData'
import handleAdd from "../../../service/handleAdd";
const AddPhoto = ({ setData }) => {
    const { albumId } = useParams();
    const [newData, setNewData] = useState({ albumId: albumId, title: "",url: "",thumbnailUrl: "" });
    
    return (
        <>
            <input  placeholder="title" onChange={(e) => setNewData(prev => ({ ...prev, title: e.target.value }))}></input>
            <br />
            <input  placeholder="url" onChange={(e) => setNewData(prev => ({ ...prev, url: e.target.value }))}></input>
            <br />
            <input  placeholder="thumbnailUrl" onChange={(e) => setNewData(prev => ({ ...prev, thumbnailUrl: e.target.value }))}></input>
            <br />
            <button onClick={()=>handleAdd(setData,`photos?albumId=${albumId}`, newData)}>add</button>
        </>
    )
}
export default AddPhoto;