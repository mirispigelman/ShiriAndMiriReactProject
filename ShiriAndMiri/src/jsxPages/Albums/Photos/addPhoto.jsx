import React from "react";
import { useState } from 'react'
import { useParams } from "react-router-dom";
import '../../../App.css'
import handleAdd from "../../../service/handleAdd";
const AddPhoto = ({ setData }) => {
    const { albumId } = useParams();
    const [newData, setNewData] = useState({ albumId: albumId, title: "",url: "",thumbnailUrl: "" });
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleAdd(setData,`photos?albumId=${albumId}`, newData);
    };
    
    return (
        <>
            <form className="add" onSubmit={handleSubmit}>
            <input  placeholder="title" onChange={(e) => setNewData(prev => ({ ...prev, title: e.target.value }))} required/>
            <br />
            <input  placeholder="url" onChange={(e) => setNewData(prev => ({ ...prev, url: e.target.value }))}/>
            <br />
            <input  placeholder="thumbnailUrl" onChange={(e) => setNewData(prev => ({ ...prev, thumbnailUrl: e.target.value }))} required/>
            <br />
            <button type="submit">add</button>
            </form>
           </>
    )
}
export default AddPhoto;