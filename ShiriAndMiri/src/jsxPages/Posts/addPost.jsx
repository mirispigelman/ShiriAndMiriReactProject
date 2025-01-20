import React from "react";
import { useState, useContext } from 'react'
import '../../App.css'
import fetchData from '../../service/FetchData.js'
import  { ContextUser } from '../ContextUser'
import handleAdd from "../../service/handleAdd.js";

const AddPost = ({ setData }) => {
    const { user } = useContext(ContextUser);
    const [newData, setNewData] = useState({ userId: user.id, title: "",body: "" });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd(setData,`posts?userId=${user.id}`, newData)
    };

    return (
        <>
            <form className="add" onSubmit={handleSubmit}>
            <br />
            <input placeholder="title" value={newData.title} onChange={(e) => setNewData(prev => ({ ...prev, title: e.target.value }))} required/>
            <br />
            <textarea placeholder="body" value={newData.body} onChange={(e) => setNewData(prev => ({ ...prev, body: e.target.value }))} />
            <br />
            <button type="submit">add</button>
            </form>
             </>
    )
}
export default AddPost;